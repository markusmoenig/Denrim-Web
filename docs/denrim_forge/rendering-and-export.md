---
sidebar_position: 6
---

# Rendering and export

Enable **Studio/PBR** in the viewport display strip. Renderer Options controls tone mapping, exposure, environment lighting, reflections, ambient occlusion, bloom, and still-image rendering. Closing or switching the preview does not delete geometry, layers, or animation.

## Authored scene lighting and cameras

In the top **Scene** workspace, use **Add** to create Directional, Point, Spot, or Area Lights and cameras. Enable **Use Scene Lights** for authored lighting in Studio; each light also has its own Enabled and Cast Shadows controls. Environment illumination remains available alongside scene lights. Camera View selects the shot; Editor Camera returns to the inspection view. Camera/light transforms and properties can be animated separately. Follow the [Scene tutorial](./scene-cameras-and-lights.md) for the complete workflow.

## Studio lighting and ambient occlusion

Turn on Environment for environment-map lighting, then open the slider-shaped **Renderer Options** control. Choose a built-in map, including Neutral Studio, or use **Import HDR…** for a Radiance HDR file retained in your Forge library. Exposure, intensity, and rotation help judge materials under different lighting. HDR reflections controls the map's appearance in reflective response.

Enable Smooth normals and adjust Smooth angle to keep hard breaks while smoothing curved surfaces. Studio lighting refines while the viewport is idle; navigating or painting restarts the refinement. The quick interactive view can therefore differ from the settled preview.

**AO radius** controls the reach of ambient occlusion and **AO strength** controls its darkening. New projects start with AO off. Older projects keep their saved AO appearance until radius or strength changes migrate that calculation. This live display effect is separate from **Bake AO**, which writes an editable paint layer.

For an image, use Renderer Options → Path Tracing, samples per pixel, Width, Height, and **Render Image**. Rendering an image and exporting a model are separate operations.

## Units in Forge 1.6.38 and newer

**Geometry is stored in meters. Project units change measurement display and numeric input only.** Switching units never resizes the model or changes its exported physical size. The default cube is always 2 m wide. A cube scaled by 0.1 measures 0.2 m, 20 cm, 200 mm, or approximately 7.874016 inches.

Open **Import and Export** to inspect Project units and the current guidance. For the numeric tutorials in this manual, select **Meters** before entering values, unless a lesson explicitly gives another displayed unit.

[![Forge 1.6.39 Import and Export popover stating that project units affect display and input, with meter-based OBJ and STL export guidance.](/img/docs/forge/v1.6/export-units.webp)](/img/docs/forge/v1.6/export-units.webp)

**OBJ, STL, GLB, and USDZ export meter coordinates.** The earlier OBJ/STL export-unit selector has been removed. Do not switch the unit preference to compensate for a size mismatch. Imports convert their declared or chosen source unit to meters once; inspect the result before applying another scale.

To correct geometry that was previously scaled to compensate for old exports, use **Transform → Detail → Scale factor**:

1. Measure the current size and decide the desired size in the same unit.
2. Calculate **desired size ÷ current size**. For 2 m to 0.2 m, use 0.1.
3. Select the intended objects, enter that factor, and choose **Apply scale** once.
4. Recheck dimensions. The undoable edit scales the selection uniformly, including assembly spacing.

Existing saved coordinates are retained. Some exports from older nonmeter projects consequently differ from the old export scale; fix an intentionally compensated model rather than altering its display units.

## Choose an export format

| Format | Use it for / what to check |
| --- | --- |
| **STL** | Visible evaluated geometry in meters, including the current Sub-D preview. Many slicers assume millimeters for unitless files: use an explicit meter import or prefer 3MF. |
| **3MF** | Printing with declared units and supported painted colors; this does not preserve PBR materials. |
| **OBJ texture bundle** | Geometry plus linked MTL and baked paint textures. Keep all files together. Coordinates use meters. |
| **OBJ vertex colors** | Per-vertex RGB workflows. Choose Preserve Topology, Triangulate with sharp color boundaries, or Triangulate (welded) according to the receiver. Welded output keeps shared indices but OBJ's one-color-per-vertex interpolation limit still applies. |
| **GLB** | Hierarchy, PBR textures, and object transform animation in meters. Compatible clips also produce an All Items take. |
| **USDZ** | Supported geometry/materials for Apple viewing and sharing, in meters. |
| **Viewport PNG / Render Image** | Presentation images. Use Render Image for the renderer's still settings. |

Ping-pong GLB clips contain the forward-and-reverse cycle. Visible objects retain their hierarchy and pivots. A normal mesh export is not a substitute for the editable Forge document: retain the source for Boolean stacks, layers, UVs, and future edits.

## Before delivery

- Inspect topology and normals. Use targeted repairs or Cleanup Mesh where needed.
- Decide whether Boolean operations should remain editable in the source. Apply them before final UV mapping; the exported asset uses evaluated geometry.
- Inspect UVs, materials, and paint in a settled Studio view.
- Check visible objects and hierarchy; a selection alone does not define the entire export scope.
- Import the result into the receiving application and measure a known dimension. Check colors, textures, and animation there as well.

Follow [Export and check a game asset](./export-a-game-asset.md) for a delivery checklist.
