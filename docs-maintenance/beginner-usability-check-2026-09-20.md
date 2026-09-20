# Beginner usability walkthrough — 2026-09-20

Agent-led walkthrough, not a study with recruited first-time users. Mac SwiftUI v1.5.30 currently running; printing excluded by request. No application code or localization catalogs changed.

## Repeated from fresh documents in this pass

- File → New: one default cube, Object mode, Model workspace, Position 0/1/0, Scale 1/1/1. Existing getting-started instructions risked adding a duplicate cube immediately.
- Raised panel: first click hit gizmo and left Face:0; clicking clear top-surface space selected Face:1. Inset .25 Apply/Done, Extrude .75 Apply/Done produced 14 faces. Added explicit recovery for intercepted selection.
- Bevel/Array: fresh cube, .20 bevel with 3 segments produced 138 faces. Count4 / X3 / Y0 / Z0 gave 4 mesh objects plus organizational group, 3 selected copies, returned to Transform. Instructions now distinguish viewport zoom from panel scrolling.
- UV/Face paint: fresh cube, SmartUV66 + PackAll with Normalize/Rotation on, margin4, produced six square islands. Paint mode retained UV sidebar; toggling UV off exposed Paint. Face scope + Clay colored only the top face.
- Alignment: fresh cube set −3/1/0; additional box set 3/4/0. Front view framed only the selected upper box. Look At Center restored both boxes. Setting upper X to −3 preserved Y4/Z0 and lined up the centers. Added the previously missing construction steps and camera recovery.
- Separate fresh cube: Face mode with gizmo disabled allowed reliable face selection; status Face:1 and relevant tools returned. New document resets to a usable initial view.

## Documentation-only cross-check in this pass

Window/Knife, seam-to-brush, hinge animation, and GLB export were reviewed for starting-state and navigation dependencies, using their native walkthroughs and export verification already completed earlier in this task. Their full modeling sequences were not rerun during this pass. No Rust/iPad UI walkthrough, external engine test, or fresh install/profile reset was performed.

## Changes

Added a shared first-lesson setup page and labeled native screenshot; linked it from the independent lessons. Clarified fresh-document boundaries, default cube versus additional primitive, numeric replacement, gizmo obstruction, missing-panel recovery, distinct Scene controls, and camera reframing. Completed the alignment example's initial coordinates. Existing outcome screenshots retained because rerun results matched them.

## Remaining validation

Ask an actual first-time user to attempt the raised-panel and alignment lessons without assistance, record where they pause, and repeat on Rust desktop/iPad before claiming cross-platform usability coverage.
