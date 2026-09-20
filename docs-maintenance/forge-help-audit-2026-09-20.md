# Forge help audit — 2026-09-20

Scope: all Forge manual Markdown pages and their linked screenshots, checked against the current Apple app (v1.5.30) and repository implementation. Documentation-only changes; no Swift/Rust editing behavior, AI API, localization catalogs, or product versions changed. Website locale remains English.

## Corrections

- Getting started: removed v1.0.6 castle interface screenshot; replaced standalone Size/Rotate directions with Transform handles and Detail fields; replaced Render-mode instruction with Studio/PBR.
- Interface: distinguished the top Model/Scene workspaces from bottom Scene selection/Outliner; corrected Studio/PBR behavior and renderer entry point.
- Symmetry: verified the Live Symmetry popover, Local/World origin choices, and Object-mode Mirror availability; added a current capture and direct navigation instructions.
- Modeling: replaced older car interface image with the verified panel result; corrected Transform terminology; added window lesson.
- Tool reference: Size/Rotate are rejected as standalone actions by ForgeActionDefinition.isApplicable; retained their URL anchors but redirected guidance to Transform. Removed legacy paint-grid wording and clarified Knife's Apply Cut/Undo Point/Cancel Cut and direct Cut Through behavior.
- Rendering/export: replaced old chest modeling screenshot, which did not depict rendering controls, with current Studio/PBR and Renderer Options captures; documented disabled Environment Map dependency and separate Render Image/model-export entry points.
- Animation: added current timeline and close-up; clarified distinct rename, track-removal, and clip-deletion controls. Removed obsolete RoboCat poster; labeled the retained historical video as a showcase rather than a current UI reference.
- Painting/UV: reviewed current full-resolution brush and Face-material instructions and images; linked the face-color lesson to continuous brush painting.
- Existing alignment, raised-panel, rounded-array, and selection lessons: reviewed current captures, values, supported modes, and commit lifecycles; retained verified examples and added task navigation.

## Evidence

ForgeActions.swift: applicability, modes, Knife/Cut Through descriptions and behavior. ForgeDocumentModel.swift: stopActiveTool, array generation and grouping, Push/Pull and material operations. ContentView.swift: Transform detail fields, explicit tool commit controls, renderer strip/options, Model/Scene controls. RenderSettings.swift: six built-in environments, Studio Small 01 default, 70-degree smooth-normal default. Existing export/animation documentation reviewed against the corresponding core implementation; no claim of exhaustive interoperability testing.

Native UI checks: executed Knife/Apply Cut/Cut Through from a fresh wall; inspected the four created tunnel faces and final opening; created a clip and inspected current timeline controls; toggled Studio/PBR and Environment and opened Renderer Options. Earlier current-session lessons verified Inset/Extrude, Bevel/Array, UV packing, and brush/face painting.

## Maintenance rule

Use current screenshots for instructions. Older artwork/video may remain only when labeled as a historical model showcase. Crop title bars; keep control text and results legible; verify every numbered callout against the original capture. Recheck help when control names or Apply/Done/Cancel behavior changes. This audit does not certify every export format, every topology edge case, or every platform UI.
