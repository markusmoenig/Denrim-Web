---
sidebar_position: 4.2
---

import DocScreenshot from '@site/src/components/DocScreenshot';

# Texture a prop from seams to brush strokes

Give a simple box prop a charcoal base and a gold identification mark. You will mark a seam, unwrap and inspect the UVs, pack the layout, and paint directly on the surface.

The seam screenshots below retain the labeled v1.5.30 interface. For the current paint panels and a new illustrated layer exercise, see [Paint a prop in layers](./paint-in-layers.md).

**Start with:** a new document containing the default cube, in the **Model** workspace. Keep its default shape for this first pass. This lesson was performed in the Mac SwiftUI app, v1.5.30. Screenshots are real captures with the title bar cropped; click them to enlarge.

New to the controls? [Match the starting state and learn selection/number entry](./before-you-start.md) before continuing.

## 1. Choose where the texture can split

A **UV map** lays the model's surfaces flat on a texture. A **seam** allows that layout to split along a mesh edge. It does not cut the geometry or make a visible hole.

1. Choose **Edge** mode: the diagonal-line button in the bottom toolbar.
2. Click one of the cube's upper edges. The example selects the upper edge on the left side of the view. Check that the upper-left status says **Edge: 1**.
3. Open **UV** using the overlapping-rectangles button beside Paint in the bottom toolbar.
4. Under **Seams**, click **Mark Seam**. Leave **Show UV Seams** enabled.
5. Under **Unwrap**, click **Unwrap All**.

These commands take effect directly. There is no separate Apply or Done button.

<DocScreenshot src="/img/docs/forge/prop-seam.png" alt="One upper cube edge selected in Edge mode, with seam controls and a cross-shaped unwrapped UV layout." markers={[{x:79,y:72.5,label:'1'},{x:90,y:85.5,label:'2'},{x:88,y:31,label:'3'}]} />

**1 — Mark Seam. 2 — Unwrap All. 3 — Resulting UV layout.** In this example the six faces unfold into a cross of squares. The unwrap operation can introduce additional chart cuts; one authored seam is not a promise that every other edge stays connected.

For a finished prop, place seams along less conspicuous edges, such as the underside or back, and try to keep a logo area within one island. Avoid putting a seam through the middle of a surface that needs an uninterrupted marking. Different geometry and existing UV splits can produce a different layout.

## 2. Pack the layout

Scroll down **inside the UV panel** to **Packing**:

1. Enable **Normalize Islands** to make texture scale more consistent.
2. Enable **Allow Rotation** so islands may turn to fit.
3. Leave **Pack to Others** off; you are arranging the whole layout.
4. Set **Pixel Margin** to **4 px** for this exercise.
5. Click **Pack All**, then scroll back to the UV preview.

Packing arranges the existing islands; it does not choose better seams or repair a distorted unwrap. A layout that already fits may change very little. The margin here is a starting point for practice, not a universal export setting: small textures and distant views can need more separation to avoid color bleeding.

For a close view of these controls, see [the packing screenshot](./uv-and-first-paint.md#2-make-an-automatic-layout).

## 3. Check the mapping before painting

Switch to **Face** mode, click **Deselect All** (X square at the bottom right), then click one face away from the transform handles. Check **Face: 1** in the upper-left status display.

<DocScreenshot src="/img/docs/forge/prop-uv-face.png" alt="A single cube face selected in yellow, with its corresponding square highlighted at the bottom of the UV cross." markers={[{x:47,y:57,label:'1'},{x:85.5,y:40,label:'2'}]} />

**1 — Selected surface. 2 — Its UV square.** Selecting another surface lets you match it to the layout. On this unscaled cube, each square face should occupy a similarly sized square in UV space.

| Check | What to look for | What to do if it looks wrong |
| --- | --- | --- |
| Shape | Square cube faces remain square in the UV preview | Revisit seams and unwrap. Packing alone cannot remove stretching. |
| Relative size | Equal-size faces receive similar texture space | Try Normalize Islands before Pack All. |
| Overlap | Unrelated faces do not occupy the same texture area | Re-unwrap or use Smart UV, then pack. Shared UV space shares paint. |
| Boundaries | The layout stays inside the texture tile | Use Pack All and inspect again. |
| Placement | An important marking fits on a continuous surface | Move the seam away from that area and unwrap before detailed painting. |

For an easier alternative on a box, **Smart UV** can create separate face islands automatically. Follow [UVs and your first painted face](./uv-and-first-paint.md) for that route. It is an alternative layout, so do not expect its six separate squares to match this cross.

## 4. Apply the base material

In v1.6, select the prop and use **Layers → Add layer** first. Existing paint is preserved as Base Paint; fill the new active layer with the base color. Keep that layer separate from the identification mark.

1. Choose **Paint** using the bottom-toolbar paintbrush.
2. If UV controls remain visible, click the **UV** button again to reveal the Paint panel.
3. In the floating paint palette, choose **Object** scope: the cube icon beside Brush and Face.
4. Choose **Charcoal** in the **Material Library**. Confirm the active material name in the right panel.
5. Click the cube to give the whole prop a dark base.

The base material is applied immediately. If you color only a face or leave a small mark, check the separate paint-scope buttons. Object selection mode and Object paint scope are different controls.

## 5. Paint the identification mark

Add another layer and rename it **Marking**. Paint the strokes on this layer. Its eye, lock, opacity, and blend mode let you revise the marking without refilling the base. Choose **Pencil** for a continuous stroke; the square and cube icons are Fill face and Fill object.

1. Choose **Brush** scope: the pointed paintbrush in the floating palette.
2. Choose **Gold** in the Material Library.
3. Set **Brush Size** to **40 px**.
4. Drag a vertical stroke down the front-facing surface, then add two shorter strokes across it to form an F. Keep the strokes inside the face on this first attempt.
5. Use **Undo** to remove a mistaken stroke, then try it again with a smaller brush if needed.

<DocScreenshot src="/img/docs/forge/prop-painted.png" alt="Finished charcoal cube with a continuous gold F painted on its front-facing surface, Brush scope selected and Brush Size set to 40 px." markers={[{x:66.7,y:39,label:'1'},{x:71,y:47.5,label:'2'},{x:83,y:22,label:'3'}]} />

**1 — Brush scope. 2 — Brush Size. 3 — Active material.** Each drag paints continuously. Modeling grid spacing does not divide the stroke into blocks. A 40 px brush describes its texture footprint; zoom level and UV scale affect how large it looks on the model.

Orbit the cube to check that the mark stays on the intended surface. For a useful test of your own UV layout, paint a short temporary stroke near an edge, inspect the neighboring surface, then Undo it. Unexpected repeated marks can reveal overlapping UVs.

## 6. Save and inspect the finish

Save the editable Forge document with **File → Save**. Keep that source document so you can return to the geometry, UVs, and materials.

For a lighting check, enable **Studio/PBR** with the transparent-cube button near the top of the viewport, then enable **Environment**. Gold's metallic response depends on lighting; a dark or flat appearance alone does not mean the paint failed. See [rendering and export](./rendering-and-export.md) for the preview controls and supported output formats.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Mark Seam is disabled | Use Edge mode and select an edge. |
| The UV preview has no highlighted face | Use Face mode, clear the old selection, and click a surface. |
| The whole cube becomes gold | Switch from Object paint scope to Brush before dragging. Undo the unwanted assignment. |
| A click fills a whole face | Face paint scope is active. Choose the pointed brush. |
| Marks repeat on another face | Inspect UV overlaps before adding more detail. |
| Strokes look stretched or uneven | Inspect UV shape and relative face sizes; try a smaller brush after correcting the mapping. |
| Material colors are not visible | Enable Textures in the viewport toolbar. |
| Only UV controls are shown | Toggle the bottom-toolbar UV button off to return to Paint controls. |

Continue with [material properties and UV adjustments](./paint-and-materials.md), or choose another task in [Learn by example](./learn-by-example.md).

Continue with [Export and check a game asset](./export-a-game-asset.md) for unit, material, hierarchy, and animation checks, with a checked painted-door GLB example.

## Extend the finish in v1.6

Protect a small region with Mask Brush, rectangle, or lasso, then add wear on a separate layer. Clear Mask removes protection, not paint. Smooth blends the active layer; Erase reveals lower layers. Try Poly Haven on a new layer, using Use for painting before a stroke or Fill layer for a complete pass. Bake AO creates a separate color-only Multiply layer. Inspect it with its eye and opacity before saving. Follow [the current layer screenshots](./paint-in-layers.md) and [procedural brush exercise](./procedural-brush.md).
