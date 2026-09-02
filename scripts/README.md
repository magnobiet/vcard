# Scripts

This directory contains utility scripts for the Next.js template project.

## Available Scripts

### remove-integrations.sh

Removes various integrations and dependencies from the project. Supports both interactive dialog mode and command-line mode.

#### Usage

**Interactive Mode (Dialog)**
```bash
./remove-integrations.sh
```
Displays a checklist dialog where you can select multiple integrations to remove and optionally run verification checks.

**Command-Line Mode**
```bash
./remove-integrations.sh [options]
```

#### Options

- `--resend` - Remove Resend integration
- `--sentry` - Remove Sentry integration
- `--playwright` - Remove Playwright integration
- `--k6` - Remove K6 integration
- `--knip` - Remove Knip integration
- `--github-actions` - Remove GitHub Actions integration
- `--google-analytics` - Remove Google Analytics integration
- `--cookiebot` - Remove Cookiebot integration
- `--example-page` - Remove example page
- `--upstash` - Remove Upstash integration
- `--vercel-analytics` - Remove Vercel Analytics integration
- `--datadog` - Remove Datadog integration
- `--check` - Run format, lint, typecheck, and build after removal (CLI mode only)
- `--help, -h` - Show help message

#### Examples

**Remove specific integrations with verification:**
```bash
./remove-integrations.sh --resend --sentry --check
```

**Remove specific integrations without verification:**
```bash
./remove-integrations.sh --playwright --k6
```

**Interactive mode:**
```bash
./remove-integrations.sh
```

#### Requirements

- **Dialog mode**: Requires `dialog` command to be installed. Install with:
  - macOS: `brew install dialog`
  - Linux: Use your package manager (e.g., `sudo apt install dialog`)

#### Verification Checks

When enabled, the following commands run after removal:
- `pnpm format` - Format code
- `pnpm lint:fix` - Fix linting issues
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm build` - Build the project

---

### html-cleanup.sh

Cleans and formats HTML files by removing data attributes, replacing hrefs, and adding line breaks for better readability.

#### Usage

```bash
./html-cleanup.sh file.html [backup]
```

#### Arguments

- `file.html` - HTML file to clean (required)
- `backup` - (optional) Set to `true` to create a backup of the original file

#### Examples

**Clean HTML file without backup:**
```bash
./html-cleanup.sh index.html
```

**Clean HTML file with backup:**
```bash
./html-cleanup.sh index.html true
```

#### What it does

- Removes all `data-*` attributes from HTML elements
- Replaces all `href` attributes that don't start with `#` with `#`
- Adds line breaks after HTML closing tags
- Adds line breaks before HTML opening tags
- Formats HTML with each tag on its own line

#### Output

The script outputs:
- Confirmation that the file was cleaned and formatted
- Summary of changes made
- Backup file location (if backup was created)

---

## General Notes

- All scripts should be run from the project root directory
- Ensure scripts have executable permissions: `chmod +x scripts/*.sh`
- Some scripts may require specific dependencies to be installed
- Always review script changes before committing to version control
