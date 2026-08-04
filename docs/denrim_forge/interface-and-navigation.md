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

## Action panel layouts

The action-panel header cycles through three layouts:

- **Full** shows tool names, descriptions, options, and detail controls.
- **Names** keeps icons and names while omitting descriptions to preserve viewport space.
- **Icons** provides the narrowest rail for maximum viewport room.

The responsive bottom toolbar rearranges controls only when the available width requires it, making the same commands practical on narrow iPad and Mac windows.

## Viewport

Use the camera controls to orbit, pan, and zoom. Forge supports perspective and isometric views, framing the selection or the full scene, material and solid display, wireframe overlays, and a normals diagnostic mode.

The viewport can show selected components, face normals, open boundaries, non-manifold edges, UV seams, and mesh-health warnings. These overlays make it easier to catch a problem before exporting a game asset or a printable model.

Use the visibility menu to **Hide Selected**, **Hide Unselected**, or **Reveal All**. In Object mode it works on objects and preserves selected hierarchies when isolating them; in Face mode it works on faces. Visibility changes are undoable.

## Grid and transforms

Grid subdivisions range from 1 to 64, and the active snap affects many direct tools, including transforms, Offset, extrusion, inset, cuts, lathing, bevel, and solidify. Modeling sliders that operate in world space use the current grid step while typed numeric values remain exact.

The transform gizmo moves components and can move, size, or rotate selected objects. Choose the axis orientation that matches the task:

- **World** follows the scene axes.
- **Local** follows the object's axes.
- **Selection** follows the active face, edge, or vertex, with local orientation as the Object-mode fallback.
- **View** keeps horizontal and vertical axes aligned with the screen and points the depth axis toward the viewer.

Choose **Origin**, **Selection**, or **Active** for the transform center. Reset bakes object rotation and scale without changing its world-space shape, then places the origin at the selected component in Vertex, Edge, or Face mode, or at world zero in Object or Scene mode.

## Scene and project controls

**Scene** mode opens the Outliner, where you can select, rename, group, ungroup, hide, and reorder objects. Project metadata and the library live in the Project Database. Undo and redo are available throughout the editing workflow.

Each document has a **Units** setting for millimeters, centimeters, meters, or inches. Changing it does not rescale scene geometry; it determines how Forge displays measurements and how supported exports interpret the scene.

Reference images can be imported from **Photos** or **Files**, shown or hidden, locked, resized, recentered, replaced, or removed. They are saved with the project so a visual guide remains available the next time you open the model.
