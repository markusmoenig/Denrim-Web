# Forge documentation visuals

Screenshots are captures of the native macOS SwiftUI app, v1.5.30, taken in disposable example models. The 30-pixel macOS title bar is cropped from every screenshot; all remaining interface pixels are unchanged. They are not generated mockups. The before/after pair retains the same camera.

Tool PNGs use the SF Symbol names in Sources/DenrimForgeCore/Editing/ForgeActions.swift. They are displayed beside their corresponding tool descriptions; color is normalized for readability, not a tool-state indicator. Keep heading text and IDs unchanged when updating symbols so incoming help links continue to work.

When updating a walkthrough: capture the real app, show the selection mode and relevant controls, document the starting values, verify the result, and state whether edits commit immediately or require Apply/Done. Keep captions, alt text, app version, and images in sync. Do not reuse a screenshot for a different tool state.

## Additional walkthroughs

Mac v1.5.30 captures: face-selection, inset-preview, extrude-preview, panel-result; bevel-preview, bevel-result, array-preview, array-result; uv-pack-controls, uv-packed, paint-face. These use separate disposable default-cube documents. Inset is 0.25; Extrude 0.75; Bevel 0.20 with 3 segments; Array Count 4 with offset (3, 0, 0); Smart UV 66 degrees followed by Pack All with normalization, rotation, and 4 px margins; painting uses Face scope and Clay. Only the macOS title bar was cropped; no retouching or synthetic interface images were used.

Selection-mode labels in the tool reference were checked against ForgeActionCatalog. Operation-specific restrictions remain in the text. When application behavior changes, update the lesson's commit lifecycle as well as the screenshots.

For future captures, exclude the macOS title bar and its screen-control indicator while keeping the complete application toolbar and modeling controls visible. Apply the same crop to paired before/after images.

`brush-painting.png` replaces the outdated grid-block painting illustration on the Paint, materials, and UVs page. Captured in Mac v1.5.30 using Brush scope, Gold, and a 40 px brush to draw continuous strokes on the cube. The macOS title bar is cropped; the application pixels are otherwise unchanged.

## Window and interface audit captures

Window sequence: default cube scaled (2, 1.5, 0.25), positioned (0, 1.5, 0), Front view; four Knife corners define a 2 by 1.5 region; Apply Cut yields 10 faces; Cut Through yields 16 faces with four tunnel faces. Full captures exclude the 30-pixel title bar. Control details are lossless crops. Numbered callouts are HTML overlays; they are not baked into or presented as application pixels. Current animation and Studio/PBR screenshots replace old instructional interface imagery. The historical RoboCat video is retained only as an explicitly labeled model showcase.

`symmetry-controls.png` shows the current Live Symmetry popover with Local selected. No mirror or symmetry operation was applied for this reference capture.

## Seam-to-brush prop lesson

`prop-seam.png`, `prop-uv-face.png`, and `prop-painted.png` were captured in the Mac SwiftUI app v1.5.30 on 2026-09-20. Fresh default cube; one upper edge marked, Unwrap All, Pack All with Normalize/Rotation enabled and 4 px margin; single-face UV inspection; Charcoal Object paint and Gold Brush paint at 40 px. Only the 30 px title bar is cropped. Numbered markers are HTML overlays.

## Hinge animation lesson

Six `hinge-*.png` captures from Mac SwiftUI v1.5.30 on 2026-09-20 show panel setup, origin reset, hierarchy, closed/open poses, and GLB export. Native captures cropped only by 30 px at the top; callouts are HTML overlays. Door rotation keys: frame 0 = 0°, frame 30 = −45° Y; frame 15 was verified as −22.5°. Handle follows as a child. Exported sample lives at `/downloads/forge/hinged-door.glb`; binary inspection confirmed hierarchy and animation channels. No external viewer interoperability test was performed.

## Game asset export check

`game-painted.png` and `game-motion.png`: native v1.5.30 captures with 30 px title-bar crops. `game-units.png`: unmodified close-up of Preferences Units. `game-export-base-color.png`: embedded PNG extracted byte-for-byte from the tested GLB, not a screenshot. The initial export exposed a mixed legacy/atlas fallback bug. The published texture and `/downloads/forge/painted-door.glb` now come from the corrected Swift exporter; Rust output was verified pixel-identical for both base-color and metallic/roughness textures.

`beginner-start.png`: fresh Mac v1.5.30 File → New document, captured during the 2026-09-20 usability walkthrough; only the 30 px title bar is cropped. HTML markers identify the Model workspace, Object selection, Actions, Detail, and Replace Selection.
