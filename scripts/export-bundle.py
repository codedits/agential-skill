#!/usr/bin/env python3
"""
Universal Skill Exporter & Bundler
Converts SKILL.md and references into formats consumable by any LLM / Agent platform:
- Single System Prompt (for ChatGPT, Claude Web, Gemini Web, DeepSeek)
- Agent Skill Package (.agents/skills/<name>/)
- Cursor Rule (.cursorrules)
- JSON Manifest (for tool APIs)
"""

import argparse
import os
import re
import sys
from pathlib import Path


def parse_frontmatter(content: str):
    """Extract frontmatter and body from markdown content."""
    pattern = r"^---\s*\n(.*?)\n---\s*\n(.*)$"
    match = re.match(pattern, content, re.DOTALL)
    if not match:
        return {}, content
    yaml_text, body = match.groups()
    frontmatter = {}
    current_key = None
    current_val = []

    for line in yaml_text.splitlines():
        line_stripped = line.strip()
        if not line_stripped or line_stripped.startswith("#"):
            continue
        if ":" in line and not line.startswith(" ") and not line.startswith("\t"):
            if current_key:
                frontmatter[current_key] = "\n".join(current_val).strip()
            key, val = line.split(":", 1)
            current_key = key.strip()
            current_val = [val.strip()] if val.strip() else []
        else:
            current_val.append(line_stripped)

    if current_key:
        frontmatter[current_key] = " ".join(current_val).strip()

    return frontmatter, body


def compile_single_prompt(root_dir: Path) -> str:
    """Combines SKILL.md and all references into a single cohesive system prompt."""
    skill_file = root_dir / "SKILL.md"
    if not skill_file.exists():
        raise FileNotFoundError(f"SKILL.md not found in {root_dir}")

    content = skill_file.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(content)

    prompt_lines = [
        "# AI System Directive: Code Reviewer Pro",
        f"Description: {fm.get('description', '')}",
        "",
        body.strip(),
        "",
        "---",
        "# Extended References & Checklists",
    ]

    ref_dir = root_dir / "references"
    if ref_dir.exists():
        for ref_file in sorted(ref_dir.glob("*.md")):
            ref_content = ref_file.read_text(encoding="utf-8")
            prompt_lines.append("")
            prompt_lines.append(f"## Reference: {ref_file.name}")
            prompt_lines.append(ref_content.strip())

    return "\n".join(prompt_lines)


def main():
    parser = argparse.ArgumentParser(description="Export Code Reviewer Pro skill to multiple AI formats")
    parser.add_argument(
        "--format",
        choices=["prompt", "verify", "json"],
        default="prompt",
        help="Export format (prompt: standalone text, verify: test validation, json: raw structure)",
    )
    parser.add_argument(
        "--output",
        "-o",
        type=str,
        help="Target output file path (default: stdout)",
    )

    args = parser.parse_args()
    root_dir = Path(__file__).resolve().parent.parent

    skill_file = root_dir / "SKILL.md"
    if not skill_file.exists():
        print(f"Error: {skill_file} does not exist", file=sys.stderr)
        sys.exit(1)

    content = skill_file.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(content)

    if args.format == "verify":
        print("[CHECK] Validating skill structure...")
        errors = []
        if "name" not in fm or not fm["name"]:
            errors.append("Missing required frontmatter 'name'")
        if "description" not in fm or not fm["description"]:
            errors.append("Missing required frontmatter 'description'")
        if len(body.strip()) < 50:
            errors.append("SKILL.md body is too short")

        ref_dir = root_dir / "references"
        if not ref_dir.exists() or not list(ref_dir.glob("*.md")):
            errors.append("Missing references/ directory or markdown files")

        if errors:
            print("[FAIL] Validation failed:")
            for err in errors:
                print(f"  - {err}")
            sys.exit(1)
        else:
            print("[PASS] Skill structure and frontmatter are 100% valid!")
            print(f"  - Name: {fm.get('name')}")
            print(f"  - Description: {fm.get('description')}")
            print(f"  - Reference files: {len(list(ref_dir.glob('*.md')))}")
            return

    if args.format == "prompt":
        compiled = compile_single_prompt(root_dir)
        if args.output:
            out_path = Path(args.output)
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(compiled, encoding="utf-8")
            print(f"Successfully exported standalone prompt to {args.output}")
        else:
            print(compiled)

    elif args.format == "json":
        import json
        data = {
            "name": fm.get("name", "code-reviewer-pro"),
            "description": fm.get("description", ""),
            "instructions": body.strip(),
            "references": {}
        }
        ref_dir = root_dir / "references"
        if ref_dir.exists():
            for ref_file in sorted(ref_dir.glob("*.md")):
                data["references"][ref_file.name] = ref_file.read_text(encoding="utf-8")
        out_json = json.dumps(data, indent=2)
        if args.output:
            Path(args.output).write_text(out_json, encoding="utf-8")
            print(f"Successfully exported JSON bundle to {args.output}")
        else:
            print(out_json)


if __name__ == "__main__":
    main()
