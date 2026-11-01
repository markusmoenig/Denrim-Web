# Forge v1.6 manual audit — 2026-10-30

- Baseline: running native Mac Forge 1.6.39; Swift `ForgeActions.swift`, Apple command handlers, Rust `action_catalog.rs` and editor/file keyboard handlers; current shared changelog through 1.6.39.
- Compared 73 bound Swift actions with Rust definitions. The only representation difference is Delete: Apple maps its action key to Delete; Rust handles Delete/Backspace in editor input. Default topology selections use literal Ctrl+1–7 on both platforms. The retired SmartPoly enum has no exposed action and was deliberately not documented as a tool.
- Additions: keyboard reference, Boolean socket, Grab Brush/geometry snapping, layered-paint and procedural-brush lessons. Expanded existing array, UV, paint, setup, export, and workflow pages and command reference.
- Units: final 1.6.38+ meter geometry policy supersedes the older selectable OBJ/STL output-unit design. Removed current guidance that suggested changing display units to resize output. Legacy checked downloadable examples remain explicitly labeled.
- Fourteen new direct native app captures in `static/img/docs/forge/v1.6/`. Windowed captures have only the native title bar removed; images are proportionally resized and WebP-compressed. No AI images, invented UI, promotional headers, or annotation overlays.
- Captured app states: default workspace, two-object Boolean selection, live subtraction, selected hidden operand and effect off/on, Grab Brush on a 384-face cube, independent geometry snap toggles, paint layers/panel, pixel mask, Atlas resolution, procedural editor, ellipse preview/result, current export controls.
- Temporary working documents were used for staging; no public database upload or source project overwrite was performed.
- Checks: production build, broken links/anchors, local image existence, shortcut-source comparison, rendered browser review. Source captures and machine-readable shortcut comparison retained in the Forge checkout under `output/docs-v1.6/`.
