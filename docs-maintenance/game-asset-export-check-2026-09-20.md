# Painted GLB check — 2026-09-20

Native Mac app v1.5.30, existing hinged-door lesson. Door 2×3×0.2 units; set document units to meters. Door is parent of Handle. Animation 1: 30 FPS, 90 frames, keys at 0 and 30, Y rotations 0 and −45 degrees. Paint Door with Charcoal Object scope, then Gold Brush scope at 40 px, three drags forming F. Viewport shows continuous strokes. Export GLB Scene.

## Results

- File: `/private/tmp/forge-game-door.glb.glb` (save panel appended extension); 98,920 bytes.
- Correct Door bounds in meters, hierarchy, UV attribute, two embedded PNGs, and rotation samples 0°, −22.5°, −45° at 0, 15, 30.
- Appearance fails: base-color PNG shows five separate gold patches (1,280 gold pixels), not the continuous F visible in Forge. Door export contains 36 indices / 12 triangles, so geometry does not encode stroke detail.
- Direct PNG extraction is published in the lesson as evidence. The failed GLB is not distributed as a finished sample.
- No external engine playback test, application changes, or Swift/Rust parity fix performed in this documentation task.

## Follow-up investigation

Reproduce with the current compiled build and source before deciding the cause. Trace full-resolution brush atlas synchronization into the document/export snapshot, and the active-UV export path versus legacy paint-grid fallback. Do not assume the mere presence of PNG textures proves brush fidelity. Any product fix must cover Swift, Rust, and Apple AI editing behavior where applicable under repository rules.

## Resolved in development source

Swift `makeActiveUVExport` and Rust texture `bake` now prepare export-local UV/atlas copies only for incompatible legacy objects in mixed scenes. An unpainted companion no longer forces brush-painted objects onto the legacy paint-grid path. The source document is unchanged. Shared GLB, textured OBJ, USDZ, and Apple AI file-output routes receive the fix.

The saved native reproduction was exported through Swift's Apple AI GLB API and Rust's GLB exporter. Both produced 2048×1024 base-color and PBR textures with exactly identical RGBA bytes and the complete F. Door size remains 2×3×0.2 meters, Handle remains a child, and Y samples at frames 0/15/30 remain 0/−22.5/−45 degrees. The corrected GLB and extracted texture are now published as local site assets. Older screenshots retain their capture provenance. No external viewer test was performed.
