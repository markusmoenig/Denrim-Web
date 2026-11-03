# v1.6 tutorial screenshot audit — 2026-11-03

Scope: Boolean socket, Shape and snap, Paint in layers, Procedural brush, Scene cameras/lights, and the ellipse extension to Round and repeat. All 16 original v1.6 WebPs were visually reviewed in two contact sheets and decoded-pixel hashes checked. No exact duplicates were found; similar framing and tiny controls caused several images to communicate very little at page size.

| Lesson | Finding | Correction |
| --- | --- | --- |
| Boolean socket | Four near-identical full-window views; off/on geometry differences too small. Off capture does show a solid top on close inspection. Initial verbal assessment that it still had a hole was incorrect. | Keep full source-selection context, crop enabled and disabled results, remove redundant fourth view. |
| Shape and snap | Grab image showed an undeformed cube. Snap settings image showed one subdivided cube, not the two-object exercise. | Capture an actual Grab stroke with changed silhouette and dimensions; crop snapping controls and explicitly identify this as settings evidence, not a completed snap. |
| Paint in layers | Yellow Panel and named layers are present, but controls/Atlas are small; mask image does not prove that an Erase stroke respected protection. | Keep contextual views, add readable layer/Atlas crops, explicitly limit the mask caption and accompanying text. |
| Procedural brush | Empty slot demonstrated none of the recipe or painted result. | Execute Ring creation and a real Pencil stroke; capture tile parameters and result; rewrite lesson to match exact setup and values. |
| Scene | Camera and light inspector frames are valid keyframe evidence but both use nearly identical neutral cube editor views. | Add actual camera view and fixed-camera warm light Intensity 1/8 comparison with environment off; explain which captures show controls versus lighting results. |
| Ellipse extension | Preview shows eight positions, result shows committed copies with seven selected. | Retain distinct preview/result pair; no misleading result identified. |

New direct captures: output/docs-v1.6/audit-2026-11-03 in DenrimForge. Each new capture visually checked; only title-bar crop, proportional resize, and WebP encoding used. No generated UI, AI headers, or invented instructional overlays. Source documents were created as separate unsaved Untitled documents; existing user projects not overwritten.

Verification limits: this audit is not a full regression test of every tutorial operation. A completed vertex/midpoint snap, protected Erase before/after, Smooth/Relax result, Boolean bake, and multi-item Scene playback were not re-executed in this pass. The pages no longer present their settings images as proof of those operations. The procedural Ring stroke and Grab stroke, scene-camera framing, and authored-light color/intensity comparison were executed in the native app.
