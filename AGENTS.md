# AI Agent Instructions for Luthien Labs Frontend

Welcome! When assisting with this repository, please adhere strictly to the
following guidelines to ensure consistency and prevent errors.

## 1. Project Context

- **Description:** This is the frontend application for the Luthien Labs
  website.
- **Tone:** The content is satirical. When generating text or placeholder
  content, maintain a dry, satirical tone but do not cross into offensive
  territory.

## 2. Tech Stack

- **Framework:** Astro (`astro`)
- **Runtime & Package Manager:** Deno (Do NOT use `npm`, `yarn`, or `pnpm`
  unless specifically requested).
- **Styling:** Sass (`sass`).
- **Dev Environment:** Nix flakes.

## 3. Development Workflow

Always assume the user is operating within the Nix development environment
(`nix develop`).

- **Install dependencies:** `deno install`
- **Run dev server:** `deno run dev`
- **Build for production:** `deno run build`

## 4. Coding Conventions & Rules

- **Markdown Files:** Restrict line lengths to 80 characters in all `.md`
  files.
- **Package Management:** When adding new dependencies, use Deno-compatible
  imports or commands. Update `package.json` only via `deno` or manually as
  instructed.
- **Astro Components:** Prefer `.astro` files for UI components. Keep component
  logic concise and in the frontmatter (`---`).
- **No Assumptions:** If you are unsure about a dependency or a file path,
  always read the codebase (`package.json`, `astro.config.mjs`) before
  attempting to make changes.
- **Formatting:** Mimic the existing code formatting, indentation, and
  structure found in the surrounding files.
