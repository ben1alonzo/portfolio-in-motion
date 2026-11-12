# Local development

## Requirements

- Node.js 22 LTS recommended (Next.js requires Node.js 20.9 or later)
- npm
- GitHub CLI (optional for local development)

## Get started

```powershell
git clone https://github.com/ben1alonzo/portfolio-in-motion.git
cd portfolio-in-motion
git switch feat/v0.1-project-foundation
npm install
npm run dev
```

Visit http://localhost:3000.

The v0.1 homepage intentionally shows an empty neutral 3D scene and unobtrusive HTML links. Card geometry first arrives in v0.2. There should be no automatic object or camera movement.

## Checks

```powershell
npm run lint
npm run typecheck
npm run build
```

After the initial dependency resolution, commit the generated `package-lock.json` in a follow-up change and switch CI to `npm ci`. The first scaffold uses `npm install` because a lockfile could not be generated in the authoring environment.

## Git workflow

Each milestone is implemented in a feature branch and opened as a pull request against `main`. Review checks and changes before merging. The default branch should remain working and deployable.
