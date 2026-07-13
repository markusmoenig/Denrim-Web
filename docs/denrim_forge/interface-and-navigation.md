---
sidebar_position: 2
---

# Interface and navigation

Forge keeps the core workflow visible: the viewport is where you model, the action panel provides the next relevant tools, and the toolbar controls modes, snapping, help, and project actions.

> **Native for macOS and iPadOS.** Forge provides the same focused modeling workflow on both platforms.

## Modes

- **Edit** is the modeling workspace. It includes selection, mesh tools, materials, paint, references, and the scene hierarchy.
- **Render** hides modeling overlays and focuses on the presentation of the current scene while retaining camera navigation.
- Selection modes include **Object**, **Vertex**, **Edge**, **Face**, **Paint**, **Camera**, and **Scene**. Choose the mode that matches the kind of thing you want to change.

## Viewport

Use the camera controls to orbit, pan, and zoom. Forge supports perspective and isometric views, framing the selection or the full scene, material and solid display, wireframe overlays, and a normals diagnostic mode.

The viewport can show selected components, face normals, open boundaries, non-manifold edges, and mesh-health warnings. These overlays make it easier to catch a problem before exporting a game asset or a printable model.

## Grid and transforms

Grid subdivisions range from 1 to 64, and the active snap affects many direct tools, including transforms, extrusion, inset, cuts, lathing, bevel, and solidify. The transform gizmo moves components and can move, size, or rotate selected objects. Use world or local axes, and choose a pivot at the world center, selection center, or active-object center.

## Scene and project controls

**Scene** mode opens the Outliner, where you can select, rename, group, ungroup, hide, and reorder objects. Project metadata and the library live in the Project Database. Undo and redo are available throughout the editing workflow.

Reference images can be imported, shown or hidden, locked, resized, recentered, replaced, or removed. They are saved with the project so a visual guide remains available the next time you open the model.
