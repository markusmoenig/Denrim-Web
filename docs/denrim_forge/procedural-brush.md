---
sidebar_position: 4.4
---

# Create a procedural brush

Make a ring-shaped paint brush and test it on a separate layer. The images below show an actual Ring tile and the stroke it produced in Mac Forge **v1.6.39**.

## 1. Start a separate brush test

Start a fresh Model document with its default cube. Choose **Paint**, then **Add layer (+)**. Keep the new Layer 1 active and unlocked, above Base Paint. Choose a contrasting material; the screenshots use the brown Clay swatch on the unpainted gray cube. This is a separate test from the emissive Panel lesson.

## 2. Add a Ring tile

1. Open **Procedural** in the Paint sidebar.
2. Select an empty brush slot at the bottom. A plain circle can represent an empty slot.
3. Open **Add Tile → Shapes → Ring**. Confirm the row says **1. Ring**, its destination is **Brush Shape**, and the preview has a transparent center.
4. Click the tile row to open its settings. Start with **Size 0.60** and **Rounding / ring thickness 0.04**, as shown below.
5. Choose **Done** to close settings. Changes are already saved in the graph; Done is not a separate Apply command.

[![Ring tile settings with Size 0.60 and Rounding / ring thickness 0.04, above a stroke made with this brush.](/img/docs/forge/v1.6/procedural-ring-settings.webp)](/img/docs/forge/v1.6/procedural-ring-settings.webp)

The black ring in Brush Shape previews the coverage mask. It does not set the paint color; the active material supplies that.

## 3. Test the brush on the model

Select Pencil. Use **Brush Size 44**, **Hardness 50%**, and **Opacity 100%** for this test, with pressure toggles off so mouse and pen tests use the same maximum settings. Drag a short diagonal stroke on a visible cube face.

[![The Ring tile and saved slot show a hollow mask; a brown diagonal stroke on Layer 1 has open space between its painted sides.](/img/docs/forge/v1.6/procedural-ring-stroke.webp)](/img/docs/forge/v1.6/procedural-ring-stroke.webp)

The ring footprint leaves an open center. During a drag, successive rings overlap to form the two-sided mark shown here. A single dab should resemble a ring; a continuous stroke need not look like a row of isolated rings. Undo the stroke before changing the graph if you want to compare recipes on a clean surface.

## 4. Extend the recipe

After verifying the simple ring, try a Circle, rounded rectangle, or another shape in a different slot. Add **Repeat** for a pattern, starting with a low Number and a Size that leaves gaps. Inspect the preview after each change before testing another stroke.

Tile outputs can feed Brush Shape, Color, Roughness, Metallic, Height, or Source channels as available. A brush mask controls where paint lands; a material-channel output changes the surface response. Keep the first test on Brush Shape so those effects are easy to distinguish.

## 5. Keep the experiment reversible

- Hide Layer 1 to compare the painted mark with Base Paint, or reduce its opacity.
- Lock completed layers before painting another pass.
- Duplicate a saved brush slot before making a variant.
- Deleting a tile reconnects following tiles; deleting the last tile clears the slot. Undo restores it.
- Save the Forge document to retain brush slots and layers. Texture/model exports contain the supported resolved appearance, rather than an editable procedural graph for another app.

For image-backed materials, [Poly Haven](./paint-and-materials.md#poly-haven-materials) is a separate source of PBR textures. Continue with [Paint a prop in layers](./paint-in-layers.md) for masks and independent surface passes.
