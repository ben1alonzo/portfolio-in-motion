# Architecture

## Product goal

Build a minimal portfolio homepage centered on a realistic, physical business card in an otherwise uncluttered 3D scene. The card sits dead center in the viewport, front-on and level at rest, with a fixed camera and stationary light. It does **not** bob, tilt, spin on its own, or translate during interaction. Dragging horizontally turns the card about the vertical (Y) axis, including complete rotations; vertical dragging does not tilt it.

Phase 1: convincing object, lighting, and horizontal-only drag interaction.  
Phase 2: small, clickable navigation links embedded along the lower front face, leading to standard content pages.

## Stack and responsibilities

| Layer | Choice | Responsibility |
| --- | --- | --- |
| Web application | Next.js App Router + TypeScript | Routes, metadata, content, server rendering |
| 3D rendering | Three.js + React Three Fiber | Canvas, geometry, camera, materials, lighting |
| R3F helpers | Drei | Environment lighting, optional 3D-anchored HTML |
| Interaction | Custom Pointer Events controller | Horizontal rotation, drag threshold, release damping |
| Navigation | Next.js Link + accessible DOM fallback | Page links remain accessible without WebGL |
| Delivery | GitHub + CI + Vercel | Pull-request checks, preview deployments, production deployment |

Use a dynamically imported client-only scene within a server-rendered homepage. Keep portfolio pages independent of the WebGL canvas.

## Proposed component boundaries

```text
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    experience/page.tsx
    projects/page.tsx
    contact/page.tsx
  components/
    3d/
      CardExperience.tsx      # Client-only canvas wrapper
      CardScene.tsx           # Camera, lighting, scene layout
      BusinessCard.tsx        # Mesh, bevel/edge, front/back surfaces
      CardLighting.tsx        # Fixed key and restrained fill/environment
      CardControls.tsx        # One-axis pointer rotation + damping
    navigation/
      CardNavigation.tsx      # Phase 2: card-anchored HTML links
      FallbackNavigation.tsx  # Non-WebGL / keyboard / mobile backup
  config/site.ts              # Shared navigation and content metadata
public/card/
  front.webp
  back.webp
docs/
  ARCHITECTURE.md
  ROADMAP.md
  progress/
```

Directories and component names may evolve as we implement.

## 3D invariants

- Card origin remains at `[0, 0, 0]`; camera looks straight at the front face.
- Resting rotation is `[0, 0, 0]`; only Y rotation changes through interaction.
- At rest, the card is rectangular, level, front-on, and centered both horizontally and vertically.
- No idle float, automatic rotation, or camera movement.
- One broad, soft key light stays fixed relative to the scene, with subtle fill for legibility.
- Card material resembles coated or satin cardstock, not glossy plastic.
- Front/back art uses separate swappable textures; side edges have visible but restrained thickness.
- On release, optional angular damping settles the rotation without restoring the starting angle.

## Drag and click behavior

The interaction layer records pointer-down location, captures pointer movement, and maps *horizontal* pixel delta to `rotationY`. Ignore vertical movement as a source of rotation. The controller distinguishes a click from a drag with a small movement threshold. For Phase 2, an actual click on a link navigates; a drag rotates instead.

Support mouse and touch; include a keyboard-accessible way to turn or reset the card, and provide links outside of the 3D scene as a fallback.

## Accessibility and performance

- Render readable profile and navigation content in HTML outside WebGL so the website is usable when canvas is unavailable.
- Respect reduced-motion preferences; avoid unnecessary animation and stop render-loop updates while idle where practical.
- Cap device pixel ratio, test mobile GPU performance, and preload/optimize card textures.
- Ensure card navigation never becomes the only way to access pages.
- Provide an image-based fallback if WebGL initialization fails.

## Phase 2 integration note

First evaluate Drei `Html` with `transform` and appropriate occlusion attached to the front surface. Verify positioning across screen sizes, links hiding when facing away, and click-vs-drag behavior. If DOM transforms/occlusion become brittle, consider an HTML navigation overlay synchronized with the 3D card or an interactive scene-text solution with a separate accessible DOM mirror. Do not make WebGL the sole source of semantic navigation.

## Project process

Every meaningful visual step should land through a small pull request, with an issue, screenshot or short GIF, acceptance criteria, and optionally a preview deployment. Tag major checkpoints as `v0.x`; keep `main` deployable.
