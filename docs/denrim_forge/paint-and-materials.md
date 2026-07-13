---
sidebar_position: 4
---

# Paint, materials, and UVs

Forge lets you finish a model in the same workspace where you created it. In **Paint** mode, choose a palette material and use brush, face, or object scope depending on the kind of detail you need.

> **Native for macOS and iPadOS.** Paint, materials, and UV tools are part of the same Forge workflow on both platforms.

![Face painting in Denrim Forge](/img/screenshots/forge/forge_mac_paint.png)

## Materials and paint

- **Apply Material** assigns the active material to selected faces or objects.
- **Clear Material** removes a face-level material override without deleting the material from the palette.
- Brush paint stores detail on adaptive per-face grids, making it useful for pixel-style markings and small color patches.
- **Clear Paint** resets the brush pattern while leaving the mesh intact.
- Use **Clear All** to remove both paint and material overrides from the selection.

Face and object paint scopes support lasso and box painting. **Ignore Back Faces** controls whether those gestures stop at visible surfaces or paint through the model.

## UV tools

Selected faces show a lightweight UV grid and axis overlay in the viewport. Use **Rotate UV 90**, **Flip U**, **Flip V**, **Reset UV**, and **Fit UV To Face** to repair or orient the mapping. **Copy UV** and **Paste UV** speed up repeated parts with matching face layouts.

Paint and UV data are retained for supported exports, including textured OBJ and GLB workflows.
