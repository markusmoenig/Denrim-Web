---
sidebar_position: 6
---

# Rendering and export

Render mode turns the editable scene into a clean presentation view. It supports real-time studio rendering and path-traced presentation output, with controls for ambient occlusion, bloom, textures, environment lighting, reflections, tone mapping, exposure, floor, and background.

> **Native for macOS and iPadOS.** Inspect, render, and export Forge projects from either platform.

![A rendered chest prop in Denrim Forge](/img/screenshots/forge/forge_mac_chest.png)

## Environment and shading

Choose an **Environment Map** in Renderer Options to light the model with one of six built-in HDR environments. Environment intensity and rotation adjust how that map illuminates the asset, while HDR reflections control whether it appears in reflective material response. Environment choices are stored per document; existing documents continue to use Studio Small 01 by default.

Use **Import HDR…** to add a Radiance HDR environment to the Forge library. Imported maps appear by filename in the Environment Map menu and remain available across documents and launches. Selecting a custom map changes the current document's environment without altering its geometry or materials.

Enable **Smooth normals** for interpolated viewport shading, then use **Smooth angle** to set the maximum angle across which normals are blended. Lower values preserve crisp hard-surface breaks; higher values smooth across broader curvature. The default is 70°.

## Export formats

| Format | Best for |
| --- | --- |
| **STL** | Printable geometry and fabrication workflows. The export uses visible evaluated geometry, including Sub-D preview, and converts project units to millimeters. |
| **OBJ texture bundle** | Broad DCC and game-art workflows. It exports geometry, material data, and a baked paint texture atlas. |
| **OBJ vertex colors** | Slicers and pipelines that prefer per-vertex RGB data. |
| **GLB** | Portable animated assets for game engines and viewers, with object hierarchies, transform clips, PBR materials, texture atlases, metallic/roughness, glass, and emissive data where available. Geometry and animated positions are converted to meters. |
| **USDZ** | Apple-oriented 3D viewing and sharing workflows, with geometry converted to meters. |
| **PNG** | A presentation snapshot using the current scene, camera, and render settings. |

OBJ coordinates remain in the selected project unit, and the exported file identifies that unit. Changing the unit preference does not rescale the scene itself.

GLB preserves visible objects as individual hierarchy nodes and exports translation, rotation, and scale animation channels with their object pivots. Ping-pong clips become complete forward-and-reverse cycles. Compatible per-item clips are also combined into an **All Items** take for viewers that play the first animation, while the individual takes remain available.

## Before exporting

1. Inspect the model for open boundaries, intersecting faces, or normal issues.
2. Use **Cleanup Mesh** or the targeted repair tools when needed.
3. Check the active UV map and pack its islands before exporting a textured asset.
4. Hide any scene objects you do not want to export; hidden objects are skipped by OBJ export.
5. Confirm the document's Units setting, especially before STL, GLB, or USDZ export.
6. For a smoothed result, use Sub-D preview or freeze it into editable geometry if the next workflow needs the dense mesh itself.

For 3D printing, favor clean closed geometry and use STL. For game props and textured visual assets, OBJ or GLB will usually be the better starting point.
