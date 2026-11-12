# Development roadmap

The smallest useful unit of progress is a reviewed pull request that leaves the website in a working state. Every visual milestone should include a browser screenshot/GIF in the PR and, when deployed, a preview link.

| Release | Goal | Visible result | Acceptance gate |
| --- | --- | --- | --- |
| v0.1 | Foundation | Empty, correctly sized 3D viewport | Next.js + TypeScript + R3F scene boots; lint/build pass |
| v0.2 | Card geometry | Centered, front-facing, level, static card | Proper proportions, thin edge, front/back faces; no tilt or idle movement |
| v0.3 | Materials and light | Convincing floating cardstock | Fixed soft key light, subtle fill, restrained reflections |
| v0.4 | Horizontal dragging | Turn card over with pointer | Unlimited Y-axis spins; zero X/Z tilt; deceleration with no snap-back |
| v0.5 | Phase 1 release | Polished desktop/mobile experience | Texture artwork, responsive framing, keyboard and static fallbacks |
| v0.6 | Card navigation | Links on bottom of card front | About / Experience / Projects / Contact work; drag doesn't accidentally navigate |
| v1.0 | Portfolio launch | Full working portfolio website | Page content, metadata, performance/accessibility testing, production deployment |

## Workflow

1. Create a narrowly scoped GitHub issue with checkable acceptance criteria.
2. Branch from `main` using `feat/<topic>`, `fix/<topic>`, or `docs/<topic>`.
3. Make small, descriptive commits (`feat:`, `fix:`, `docs:`).
4. Open a pull request linking the issue, describing changes and including a screenshot/GIF when appropriate.
5. Run CI and review the preview deployment; merge to `main`.
6. When the release milestone is complete, tag the commit and publish a short GitHub release note. Add a snapshot to `docs/progress/`.

## First implementation issue: v0.1

- [ ] Initialize the Next.js App Router application with TypeScript.
- [ ] Add `three`, `@react-three/fiber`, and `@react-three/drei`.
- [ ] Create the client-only Canvas component with a centered, head-on camera.
- [ ] Set a neutral full-viewport background without UI clutter.
- [ ] Add placeholders for About / Experience / Projects / Contact routes.
- [ ] Add GitHub Actions checks for lint and production build.
- [ ] Confirm a local production build and attach a screenshot to the PR.

**Do not** add card geometry, drag rotation, or embedded navigation to v0.1. Those belong in later, independently reviewable milestones.
