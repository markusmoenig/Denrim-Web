---
sidebar_position: 4
---

# Paint, materials, and UVs

Forge lets you finish a model in the same workspace where you created it. Create a reusable texture layout in the UV workspace, then choose a palette material in **Paint** mode and use brush, face, or object scope depending on the kind of detail you need.

> **Native for macOS and iPadOS.** Paint, materials, and UV tools are part of the same Forge workflow on both platforms.

![Face painting in Denrim Forge](/img/screenshots/forge/forge_mac_paint.png)

## Materials and paint

- **Apply Material** assigns the active material to selected faces or objects.
- **Clear Material** removes a face-level material override without deleting the material from the palette.
- Brush painting uses the object's full-resolution 1024² material atlas. **Brush Size** ranges from single-texel details to broad strokes, and fast Pencil or pointer input is interpolated into continuous lines.
- **Clear Paint** resets the brush pattern while leaving the mesh intact.
- Use **Clear All** to remove both paint and material overrides from the selection.

Face and object paint scopes support lasso and box painting. **Ignore Back Faces** controls whether those gestures stop at visible surfaces or paint through the model.

When live symmetry is enabled, brush strokes are mirrored across the active axes. Forge resolves the geometrically mirrored counterpart even on twisted and non-planar faces.

## UV maps

Each object can contain multiple named UV maps. Add a map, duplicate one as a variation, rename it, delete maps you no longer need, and choose which map is active for painting and export. Existing projects with legacy overlapping UVs remain compatible.

## Seams and islands

UV seams tell Forge where the surface may split during unwrapping.

1. Switch to Edge mode and select the edges where the texture should separate.
2. Use **Mark Seam**, or use **Mark Edge Loop** to expand the selected edges into complete loops and mark them at once.
3. Use **Clear Seam**, **Clear Edge Loop**, or **Clear All Seams** to revise the cuts.
4. Toggle **Show UV Seams** when you want to hide the viewport overlay without changing the stored seams.

**Select UV Island** expands the current vertex, edge, or face selection to every face in the same seam-delimited island.

## Unwrap and project

**Unwrap Selection** unfolds the selected faces using marked seams or the selection boundary. **Unwrap All** rebuilds the layout for the complete object. Seam-aware chart unfolding is the best general workflow for connected box-like and curved meshes.

Projection commands provide faster starting points for suitable forms:

- **Planar** for flat panels and surfaces viewed from one direction.
- **Box** for hard-surface and box-like objects.
- **Cylinder** for pipes, columns, and wrapped side walls.
- **Sphere** for rounded forms.
- **Smart UV** for automatic chart creation.

## Pack and adjust islands

Use **Pack Selection** or **Pack All** to arrange islands inside the texture tile. **Pack to Others** fits selected islands around the unselected layout. Set a **Pixel Margin** to leave safe spacing between islands, enable **Normalize Islands** for consistent texel scale, and use **Allow Rotation** when islands may turn for a tighter fit.

Selected faces show a live UV preview and axis overlay in the viewport. Use **Rotate 90**, **Flip U**, **Flip V**, **Reset**, and **Fit** to repair or orient the mapping. A multi-face 90-degree rotation uses one pivot for the complete selection, keeping the island together. **Copy** and **Paste** speed up repeated parts with matching face layouts.

The active UV layout and baked base-color/PBR textures are retained for textured OBJ, GLB, and USDZ exports.
