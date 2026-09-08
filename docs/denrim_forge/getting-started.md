---
sidebar_position: 1
---

import AppStoreBadge from '@site/src/components/AppStoreBadge';

# Getting started

Denrim: Forge is a focused 3D modeler for making game props, stylized figurines, logos, animated objects, and practical assets for 3D printing. Start with simple forms or imported SVG artwork, shape the model directly in the viewport, create UVs and paint textures, animate object transforms, then export when the asset is ready.

> **Native for macOS and iPadOS.** Work on the platform that fits your process, with document-based projects and iCloud-backed library support.

**Available now on the App Store.**

<AppStoreBadge
  href="https://apps.apple.com/app/denrim-forge/id6767993560"
  productName="Denrim: Forge"
/>

![A castle prop made in Denrim Forge](/img/screenshots/forge/forge_mac_castle.png)

## Your first prop

1. Create a **Box**, **Cylinder**, **Sphere**, **Capsule**, or **Torus** from the action panel.
2. In **Object** mode, use **Transform**, **Size**, and **Rotate** to establish the overall silhouette.
3. Switch to **Face** mode for major shape changes. **Push/Pull**, **Extrude**, **Inset**, and **Bevel** cover most prop-modeling work.
4. Open the **UV** workspace when the asset needs a texture layout. Mark seams, unwrap the object, and pack its islands.
5. Use **Paint** mode to apply PBR materials, face-level color, or brush-painted texture details.
6. For an articulated or moving asset, organize its parts with **Parent** and **Unparent**, then open **Animation** to key position, rotation, and scale.
7. Inspect the result in **Render** mode, then export an OBJ, GLB, USDZ, STL, or PNG rendering.

## Start from SVG artwork

Choose **Import SVG** from Import and Export to turn filled vector artwork into solid mesh objects. Set the target width, extrusion depth, and curve quality before importing. **Combine paths into one object** keeps a multi-path design together while preserving its individual path materials; turn it off when you want separate editable objects.

Filled paths, shapes, transforms, holes, and solid colors are supported. Convert text and strokes to outlines in the vector editor before importing them into Forge.

## Learn in the app

Forge is designed to be learned while working. Turn on contextual help from the toolbar, then select a tool or command to see what it does, when to use it, and any selection requirements. Tool-specific controls also describe their purpose directly in the interface.

For a guided overview, start with [the interface and navigation](./interface-and-navigation.md), continue with [animation](./animation.md) when an asset needs motion, then use the [tool reference](./tool-reference.md) whenever you need a particular operation.

## A few useful habits

- Begin with large, simple forms. Add detail only after the silhouette reads well.
- Choose the document's **Units** before precision work. Units change how measurements are interpreted and exported without rescaling existing geometry.
- Keep the grid snap active for clean proportions, and use **Offset** when a selection must move by an exact signed distance.
- Use organizational **Groups** for scene structure and **Parent** relationships when a child should follow another object's transform.
- Use **Sub-D** as a reversible smooth preview; use **Freeze Sub-D** only when you need real editable faces.
- Run **Cleanup Mesh** before export if you have made several topology changes.
- Use **STL** for printable geometry, and OBJ, GLB, or USDZ for broader asset pipelines.
