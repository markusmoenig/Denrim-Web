---
sidebar_position: 4
---

# Paint, materials, and UVs

Forge 1.6 combines editable paint layers, PBR materials, pixel protection, and UV tools. Use **Paint** in the bottom toolbar to enter painting; **Outliner**, **Materials**, **Atlas**, and **Procedural** select the right sidebar. The Layers panel and floating paint tools remain available while switching tabs.

Follow [Paint a prop in layers](./paint-in-layers.md) for a complete current-interface exercise. The older [seam-to-brush lesson](./texture-a-prop.md) remains useful for UV planning and now includes the layer workflow.

## Layers, folders, and material channels

Select the object to paint. **Add layer (+)** preserves existing paint as **Base Paint** on first use and creates a new active layer above it. Click a layer name to select it; the pencil renames it. Eye and lock controls change visibility and paint eligibility. Hidden or locked layers cannot receive paint.

Layer opacity changes the contribution of the entire layer. **Normal**, **Multiply**, **Screen**, and **Overlay** determine how it blends with lower paint. Layer material mixing and channel controls determine which surface properties contribute; inspect Color, Roughness, Metallic, Height, and other available channels rather than treating every layer as a color-only overlay.

Use the folder menu to organize layers or group them all. Folders preserve separate editable paint. Reorder within a folder or move a layer into another folder; these edits participate in Undo and save with the document. The final layer cannot be deleted.

[![Forge 1.6.39 with separate Base Paint, Layer 1, and Panel paint layers, an emissive face, and material controls.](/img/docs/forge/v1.6/paint-layers-panel.webp)](/img/docs/forge/v1.6/paint-layers-panel.webp)

## Brush, fill, erase, and smooth {#paint-continuous-brush-strokes}

| Tool or control | What it changes |
| --- | --- |
| **Pencil** | Paints a stroke on the active layer; overlapping dabs stay within Brush Opacity |
| **Airbrush** | Builds up paint while held; Flow sets build-up speed and Opacity caps strength |
| **Erase** | Removes active-layer paint to reveal lower layers or the underlying surface |
| **Smooth** | Blends neighboring active-layer paint and coverage; hold Shift while brushing on desktop for temporary smoothing |
| **Fill face** | Fills one surface on the active layer, respecting the paint mask |
| **Fill object** | Fills the object on the active layer, respecting the paint mask |
| **Eyedropper** | Picks the visible painted material and layer; this can change the active layer |

Choose the brush tool separately from the Face/Object fill buttons. They are not the bottom-toolbar mesh selection modes. Rectangle and Lasso with brush painting fill clipped texture regions; they are not limited to complete polygons. **Ignore Back Faces** restricts selection to visible surfaces; disable it deliberately for through selection. Live symmetry mirrors supported painting in object space.

**Size**, **Hardness**, and **Opacity** shape a stroke. Airbrush starts with zero hardness and remembers its own setting. **Screen Size** keeps viewport brush diameter consistent as you zoom. Size and opacity pressure switches are independent; mouse/finger input uses the configured full size. Atlas painting uses texture sizing.

## Protect texture pixels

Use **Mask Brush**, rectangle, or lasso to protect texture pixels across all layers. This is different from a face restriction. The dark protection overlay is an editing aid and is excluded from exported materials. Mask edits support Undo and persist through saving and texture resizing.

Use **Clear Mask** to remove pixel protection and clear the face restriction; it does not delete paint layers. If a stroke does nothing, inspect the mask, back-face option, layer visibility, lock, and opacity before repainting.

[![Pixel-mask brush controls active while painting an independent panel layer in Forge 1.6.39.](/img/docs/forge/v1.6/paint-pixel-mask.webp)](/img/docs/forge/v1.6/paint-pixel-mask.webp)

## Atlas and texture resolution

The **Atlas** tab shows the object's paint texture. Paint with Pencil, Airbrush, or Erase using the active layer and protection. Toggle UV Outlines to inspect island edges. Reset View restores the texture framing.

**Texture Resolution** offers 512, 1024, 2048, or 4096 pixels per side. It resizes all layers without moving UVs and is undoable. Enlarging existing paint does not invent detail. Availability depends on authored layer memory; mobile 4K also requires sufficient device headroom. Conversion runs in the background.

[![Atlas tab showing the active texture, UV outlines, and the 1024 by 1024 Texture Resolution selector.](/img/docs/forge/v1.6/paint-atlas-resolution.webp)](/img/docs/forge/v1.6/paint-atlas-resolution.webp)

## Poly Haven materials

Open **Poly Haven** from Materials or the globe on a layer. Search by name, tags, or category, select a preview, and choose a texture resolution. **Use for painting** selects the material without repainting existing work. **Fill layer** fills the active layer in one undoable edit while preserving the others and protection. Downloads require a connection; imported maps are embedded in the saved Forge project.

Studio and path rendering can use the imported color, roughness, metallic, opacity, and normal maps. A simple matte swatch and an image-backed PBR material are different kinds of input; check the active material before painting.

## Bake ambient occlusion

**Bake AO** runs in the background and adds self-occlusion as a new **color-only Multiply layer**. It prepares an unpainted object's UV atlas if needed, preserves existing layers/resolution, and discards a result if its source changed during the bake. It does not change mesh geometry, roughness, or metallic values. Adjust the AO layer's opacity or toggle its eye to compare. A convex cube can show very little self-occlusion; cavities and adjoining parts give a clearer example.

Viewport AO in Renderer Options is a separate live display effect. It has radius and strength controls and is not the same as baking a paint layer.

## Procedural brushes

Choose a saved slot in **Procedural**, then use **Add Tile** to build its graph. Shapes, repetition, noise/distress, imported stamps, and combination operators create reusable masks or surface channels. Click a tile to edit its settings and channel outputs; valid changes save into the project without an extra Apply step. Filled shapes in the preview show coverage, and transparent areas leave gaps. Selecting a slot binds it to the active unlocked layer. Deleting a slot removes its bindings; Undo restores it.

Follow [Create a procedural brush](./procedural-brush.md) for a small exercise, then test strokes on a separate layer before applying a pattern to finished work.

## UV maps and automatic layouts

Open **UV** beside Paint. An object can have multiple named maps; choose, add, duplicate, rename, or delete them using the map controls. Keep the intended map active for painting and export.

For deliberate seams, use Edge mode and select the cuts, then **Mark Seam** or **Mark Edge Loop**. Clear Seam stitches selected imported splits as appropriate; Clear All Seams removes authored marks. **Show UV Seams** hides the overlay without changing the stored cuts. **Select UV Island** expands a component selection to its seam-delimited island.

**Unwrap Selection / All** use seams or selection boundaries. **Auto Generate UVs** creates separated, packed charts for the whole object, reprojects existing paint, and supports Undo. Planar, Box, Cylinder, Sphere, and Smart UV provide alternative projections.

**Pack Selection / All** arrange islands in the texture tile. Normalize Islands, Allow Rotation, Pixel Margin, and Pack to Others control that arrangement. Rotate 90, Flip U/V, Reset, Fit, Copy, and Paste adjust UVs. Prefer finishing topology and applying Boolean results before detailed mapping and paint.

## Export the finish

Textured OBJ, GLB, and USDZ retain the supported active UV layout and baked material textures. 3MF exports painted color for printing, not the full PBR shading model. Keep the editable Forge document to retain paint layers, masks, and procedural settings. See [Rendering and export](./rendering-and-export.md).
