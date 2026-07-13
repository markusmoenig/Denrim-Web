---
sidebar_position: 3
---

# Modeling and mesh workflow

Forge is most effective when you move from silhouette to detail. A box can become a crate, a tower, a vehicle body, or the foundation of a figurine without leaving the direct viewport workflow.

> **Native for macOS and iPadOS.** Build your props and printable assets with Forge on either platform.

![A low-poly vehicle assembled in Denrim Forge](/img/screenshots/forge/forge_mac_car.png)

## Shape first

Start with a primitive, then use **Transform**, **Size**, and **Rotate** to set its proportion. For attached volume, choose **Extrude**. For a raised or recessed surface without creating a separate object, use **Push/Pull**. **Inset** creates borders, frames, panels, doors, windows, and recessed details.

**Arc**, **Knife**, **Cut Through**, and **Lathe** make more specific forms without introducing a separate modeling system. **Bevel** softens hard edges, while **Sub-D** gives you a reversible smooth preview over the original editable cage.

## Keep topology healthy

Use the selection helpers to reach the area you need: loops, edge rings, boundaries, connected components, coplanar faces, hard edges, and open edges. Commands such as **Connect**, **Bridge**, **Loop Cut**, **Edge Slide**, **Split Edge**, **Fill**, and **Merge** make targeted topology edits possible.

When a model has been heavily edited, use **Recalculate Normals**, **Weld**, **Remove Degenerates**, **Fill Holes**, or **Cleanup Mesh**. The viewport’s mesh-health overlays help locate open, non-manifold, or invalid regions.

## Symmetry and repeated parts

For a symmetrical prop or figurine, model one half then use **Mirror** or **Symmetrize** across the required local axis. **Duplicate** and **Array** are useful for repeated beams, planks, bolts, fence posts, wheels, and other modular details.

See the [tool reference](./tool-reference.md) for every command’s selection requirements and practical notes.
