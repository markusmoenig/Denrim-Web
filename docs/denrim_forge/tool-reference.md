---
sidebar_position: 6
---

# Tool reference

Every Forge action includes contextual guidance in the app. This reference brings together the same practical information: what the action does, when to reach for it, and the important constraint to remember.

> **Native for macOS and iPadOS.** Every tool documented here is part of the Forge workflow on both platforms.

> Selection matters. If an action is unavailable or has no effect, switch to the component type named in its notes and make the required selection first.

## Transform and shape

### Transform

Move, size, or rotate selected objects, or move selected components.

**Use it for:** Use Transform as the default modeling gizmo: drag arrows to move, side handles to size object selections, and rotation handles to rotate object selections.

**Notes:** Component selections currently use the move handles; size and rotate handles are available for object selections.

### Size

Scale the selected object with grid-aware handles.

**Use it for:** Use Size to set the broad proportions of boxes, cylinders, and joined objects before doing detailed edits.

**Notes:** Size works on object selections. Use Details for exact X, Y, and Z scale values.

### Rotate

Rotate selected objects around X, Y, and Z.

**Use it for:** Use Rotate to aim repeated parts, turn cutters for CSG, or align a primitive before joining or subtracting it.

**Notes:** Rotation values stay within one full turn. World/local gizmo mode changes the handle orientation.

### Flatten

Project the current selection onto a flat plane.

**Use it for:** Use Flatten to clean warped polygons, align edge loops, or make selected vertices share an X, Y, Z, or calculated best-fit plane.

**Notes:** Angle mode uses a best-fit plane through the selected world-space points. Axis modes flatten to the selection center on that world axis.

### Push/Pull

Move selected faces along their face normal.

**Use it for:** Use Push/Pull for architectural massing: raise panels, recess walls, or pull a face outward without creating a separate object.

**Notes:** The tool previews the offset. Apply from the sidebar or drag the normal handle.

### Extrude

Create new connected geometry from selected faces.

**Use it for:** Use Extrude when you need a new volume that remains attached, like a ledge, pillar, handle, or branch.

**Notes:** Apply Extrude commits one extrusion and keeps Extrude active, so repeated clicks continue from the newly selected faces.

### Inset

Create a smaller region inside selected faces.

**Use it for:** Use Inset before pushing a panel inward, making frames, lips, borders, doors, windows, or recessed details.

**Notes:** Use Inset per face for separate panels, or turn it off to inset connected coplanar faces as one region.

### Arc

Round a selected quad face into a segmented arch.

**Use it for:** Use Arc for arched doorways, rounded tops, and simple curved silhouettes while staying low-poly.

**Notes:** Works best on a single quad face. Segment and height controls shape the curve.

### Knife

Draw a knife polygon on the selected face.

**Use it for:** Use Knife to place windows, holes, panels, and custom face regions before using Cut Through, Push/Pull, or Inset.

**Notes:** Place points on the face, move points if needed, then Apply Cut or Cancel Cut.

### Lathe

Revolve a drawn profile into a radial object.

**Use it for:** Use Lathe for barrels, columns, bowls, vases, wheels, and other shapes that come from a side profile.

**Notes:** Draw points on the vertical plane. Segments, subdivisions, and cap toggles control the generated mesh.

### Cut Through

Turn a selected cut face into a tunnel through the object.

**Use it for:** Use Cut Through after Cut to make real openings like windows, vents, archways, and intersecting passages.

**Notes:** The command builds tunnel side faces and can merge with existing through-cuts.

### Bevel

Chamfer selected objects, edges, or face borders.

**Use it for:** Use Bevel on selected faces to round the border of the face island, or on selected edges and objects for direct edge chamfers.

**Notes:** Use low segment counts for interactive work. Preview shows the affected chamfer area.

### Solidify

Add thickness to selected faces.

**Use it for:** Use Solidify to turn planes, panels, roofs, and shell surfaces into real volume.

**Notes:** Selected faces are replaced by an offset surface plus clean side faces.

### Subdivide

Split selected faces into smaller faces.

**Use it for:** Use Subdivide when you need more editable regions before painting, cutting, beveling, or shaping local detail.

**Notes:** Child faces remain selected so you can continue editing immediately.

### Sub-D

Preview a smooth subdivision surface while keeping the original object editable.

**Use it for:** Select one or more objects, or keep editing vertices, edges, or faces, then use the Sub-D popover to choose Off or preview levels one through three.

**Notes:** Sub-D preview can be toggled while editing the original cage. Freeze is still a separate object-mode step for turning the smoothed result into real mesh faces.

### Freeze Sub-D

Bake the current Sub-D preview into ordinary editable mesh geometry.

**Use it for:** Use Freeze Sub-D after the preview level looks right and before exporting or doing detailed mesh edits on the smoothed result.

**Notes:** Freeze is undoable, but the generated mesh can be much denser than the original cage.

### Ruler

Measure the point-to-point distance between two selected vertices.

**Use it for:** Switch to vertex mode, select exactly two vertices, then click Ruler to show their world-space distance.

**Notes:** The viewport HUD formats the measurement using the unit preference in Preferences.

## Selection and visibility

### Select Loop

Extend two adjacent components into a loop.

**Use it for:** Select two neighboring vertices, edges, or faces, then use Select Loop before beveling, sliding, deleting, or transforming a continuous belt.

**Notes:** Most useful on quad-based topology. Face loops follow the strip through opposite quad edges.

### Select Edge Ring

Select opposite edges across a quad strip.

**Use it for:** Use Select Edge Ring to prepare a Loop Cut or to inspect evenly spaced structure through a mesh.

**Notes:** Works best on connected quad strips.

### Select Boundary

Select the boundary around selected faces.

**Use it for:** Use Select Boundary before filling, beveling a face perimeter, or inspecting the outline of a region.

**Notes:** Face mode converts to edge selection around the selected region.

### Select Connected

Select the connected island for the current component type.

**Use it for:** Use Select Connected to grab one detached part of a mesh without manually picking every face or edge.

**Notes:** Works in vertex, edge, and face modes.

### Select Coplanar

Select faces on the same plane as the current face.

**Use it for:** Use Select Coplanar to grab flat walls, floors, caps, and panels for material assignment or cleanup.

**Notes:** The command compares face planes, so curved or angled surfaces are excluded.

### Select Hard Edges

Select edges between sharply angled faces.

**Use it for:** Use Select Hard Edges to find bevel candidates or check where the model has strong silhouette breaks.

**Notes:** Requires edge mode and visible mesh topology.

### Select Open Edges

Select naked boundary edges.

**Use it for:** Use Select Open Edges to find holes, unfinished surfaces, and areas that may need Fill Holes.

**Notes:** Open edges are also highlighted by mesh-health overlays.

### Grow Selection

Expand the current component selection outward.

**Use it for:** Use Grow when your face, edge, or vertex selection is almost right and needs one more neighboring ring.

**Notes:** Works on component selections.

### Shrink Selection

Contract the current component selection inward.

**Use it for:** Use Shrink to remove the outer border from a selected region before applying a command.

**Notes:** Works on component selections.

### Hide Faces

Hide selected faces without deleting them.

**Use it for:** Use Hide Faces to clear obstructing polygons from the viewport while editing interior or back-side details.

**Notes:** Hidden faces remain part of the object and can be restored with Unhide Faces.

### Unhide Faces

Show hidden faces on the selected object.

**Use it for:** Use Unhide Faces after finishing the temporary edit that needed a clearer view.

**Notes:** The command is available in face mode when a selected object has hidden faces.

## Topology and repair

### Split Edge

Insert midpoint vertices on selected edges.

**Use it for:** Use Split Edge to add control points before filling, reshaping, or creating cleaner manual topology.

**Notes:** Works on edge selections and keeps the inserted vertices selected.

### Merge

Merge selected vertices, edges, or faces.

**Use it for:** Use Merge to collapse vertices, dissolve internal edges, or turn connected face groups into a larger n-gon.

**Notes:** The viewport previews mergeable selections before commit.

### Connect

Connect two selected vertices with a new edge path.

**Use it for:** Use Connect in vertex mode to draw topology across one face or a simple strip of faces.

**Notes:** Connect needs exactly two vertices on the same object and refuses ambiguous paths.

### Fill

Create a face from selected boundary vertices or edges.

**Use it for:** Use Fill after deleting faces, opening a mesh, or selecting one edge of an open boundary you want to cap.

**Notes:** When an open boundary edge is selected, Fill caps the whole boundary loop that contains it.

### Bridge

Create bridge faces between two compatible selections.

**Use it for:** Use Bridge on two edges to patch a gap, or on two matching faces to turn them into a connected tunnel.

**Notes:** Face bridges need two selected faces with the same vertex count.

### Loop Cut

Cut a quad strip through selected edges or adjacent faces.

**Use it for:** Use Loop Cut to add support edges, panel divisions, or places where Edge Slide can shape thickness.

**Notes:** Select edges, or select two adjacent quad faces to define direction. Use the Position slider before applying.

### Edge Slide

Slide selected edges along adjacent faces.

**Use it for:** Use Edge Slide to reposition a loop or support edge without changing the surrounding surface shape too much.

**Notes:** Best on edges with clear neighboring faces.

### Triangulate

Convert selected faces into triangles.

**Use it for:** Use Triangulate when exporting, debugging a troublesome n-gon, or preparing a face for simpler rendering.

**Notes:** Paint and UV information is carried onto the generated triangles.

### Flip Normals

Reverse selected face winding.

**Use it for:** Use Flip Normals when a face appears inside-out or renders from the wrong side.

**Notes:** Only selected faces are affected.

### Recalculate Normals

Orient face winding outward.

**Use it for:** Use Recalculate Normals after heavy edits, CSG, joins, or imported/handmade geometry cleanup.

**Notes:** Works on selected faces or selected objects.

### Weld

Merge vertices that occupy the same position.

**Use it for:** Use Weld after joins, mirror operations, or manual edits that leave overlapping vertices.

**Notes:** Object mode welds across selected objects; vertex mode welds the selected vertices.

### Remove Degenerates

Delete collapsed or invalid faces.

**Use it for:** Use Remove Degenerates when a mesh health warning points to tiny, repeated, or broken faces.

**Notes:** Useful after aggressive CSG or bevel experiments.

### Fill Holes

Fill simple open boundary loops.

**Use it for:** Use Fill Holes to repair accidental openings, cap simple deleted regions, or fill the open loop containing a selected boundary edge.

**Notes:** Complex or self-crossing holes may need manual cleanup first.

### Cleanup Mesh

Run a basic repair pass on selected objects.

**Use it for:** Use Cleanup Mesh after several topology operations to weld overlaps, remove degenerates, and recalculate normals.

**Notes:** This is a broad repair command, not a modeling replacement for deliberate topology work.

### Separate

Move selected faces into a new object.

**Use it for:** Use Separate when a detail should become its own object for transform, material, or CSG work.

**Notes:** The new object is selected after the command.

### Join

Join selected objects into the active object's mesh.

**Use it for:** Use Join to combine pieces after arranging modular parts or primitives.

**Notes:** Transforms are baked into the active object's local mesh.

## Symmetry and object operations

### Mirror X

Mirror selected object meshes across local X.

**Use it for:** Use Mirror X for symmetrical modeling around the object's local X axis.

**Notes:** Mirroring changes mesh geometry, not just object scale.

### Mirror Y

Mirror selected object meshes across local Y.

**Use it for:** Use Mirror Y to flip vertical forms or create matched top/bottom variants.

**Notes:** Mirroring changes mesh geometry, not just object scale.

### Mirror Z

Mirror selected object meshes across local Z.

**Use it for:** Use Mirror Z for front/back symmetry and mirrored cutters.

**Notes:** Mirroring changes mesh geometry, not just object scale.

### Sym +X

Force local X symmetry from the positive side.

**Use it for:** Use Symmetrize X after shaping one half of a model; it deletes the local -X half and mirrors local +X across the center plane.

**Notes:** Faces that cross the center plane are kept from the positive side and welded at the center.

### Sym -X

Force local X symmetry from the negative side.

**Use it for:** Use Sym -X when the modeled half is on local -X; it deletes the local +X half and mirrors local -X across the center plane.

**Notes:** Faces that cross the center plane are kept from the negative side and welded at the center.

### Sym +Y

Force local Y symmetry from the positive side.

**Use it for:** Use Symmetrize Y for top/bottom mirrored forms after modeling the upper half.

**Notes:** Faces that cross the center plane are kept from the positive side and welded at the center.

### Sym -Y

Force local Y symmetry from the negative side.

**Use it for:** Use Sym -Y when the modeled half is on local -Y; it deletes the local +Y half and mirrors local -Y across the center plane.

**Notes:** Faces that cross the center plane are kept from the negative side and welded at the center.

### Sym +Z

Force local Z symmetry from the positive side.

**Use it for:** Use Symmetrize Z for front/back mirrored forms after modeling the front half.

**Notes:** Faces that cross the center plane are kept from the positive side and welded at the center.

### Sym -Z

Force local Z symmetry from the negative side.

**Use it for:** Use Sym -Z when the modeled half is on local -Z; it deletes the local +Z half and mirrors local -Z across the center plane.

**Notes:** Faces that cross the center plane are kept from the negative side and welded at the center.

### Duplicate

Duplicate selected objects or faces.

**Use it for:** Use Duplicate for repeated parts like beams, planks, bolts, panels, and selected face details.

**Notes:** Object duplicates stay in place with new mesh IDs. Face duplicates become a separate object without removing the original faces.

### Array

Create repeated object or face copies.

**Use it for:** Use Array for evenly spaced parts like fence posts and grille slats, or radial wheel and hub details around a center.

**Notes:** Generated array copies are placed in one Array group in the Outliner so they stay organized while remaining editable.

### CSG Subtract

Subtract one selected object from the active object.

**Use it for:** Use CSG Subtract for object-shaped cutouts, holes, sockets, and large boolean edits before refining the result.

**Notes:** Select two objects. The active object is the target; the other object is removed as the cutter.

### Delete

Delete the current selection.

**Use it for:** Use Delete to remove objects or faces; in edge mode, use it to dissolve clean internal edges during retopology.

**Notes:** Boundary edges delete connected faces or refuse cleanly when a safe dissolve is not possible.

### Rotate X 90

Rotate selected objects 90 degrees around X.

**Use it for:** Use quick axis rotations to orient primitives and cutters without dragging the rotate gizmo.

**Notes:** Works in object mode.

### Rotate Y 90

Rotate selected objects 90 degrees around Y.

**Use it for:** Use quick axis rotations to turn repeated wall, cylinder, or cutter pieces into place.

**Notes:** Works in object mode.

### Rotate Z 90

Rotate selected objects 90 degrees around Z.

**Use it for:** Use quick axis rotations for top-down layout changes and sideways primitive alignment.

**Notes:** Works in object mode.

## Materials and UVs

### Apply Material

Assign the active material to selected objects or faces.

**Use it for:** Use Apply Material after picking a palette color/material, especially for face-level accents or whole-object coloring.

**Notes:** In object mode it affects all faces on selected objects.

### Clear Material

Remove material overrides from selected objects or faces.

**Use it for:** Use Clear Material to return a region to the default material behavior before repainting or exporting.

**Notes:** This does not delete materials from the palette.

### Clear Paint

Remove brush paint grids from selected objects or faces.

**Use it for:** Use Clear Paint when a face-level paint pattern should be reset without changing the mesh.

**Notes:** Material overrides remain unless you also use Clear Material.

### Clear All

Remove material overrides and brush paint grids from selected objects or faces.

**Use it for:** Use Clear All when the selection should return to the default unpainted look.

**Notes:** This does not delete materials from the palette.

### Rotate UV 90

Rotate selected face UVs by 90 degrees.

**Use it for:** Use Rotate UV 90 to align checker or painted patterns across neighboring faces.

**Notes:** The viewport UV overlay shows the mapping direction.

### Flip U

Mirror selected face UVs horizontally.

**Use it for:** Use Flip U when a painted pattern is reversed left-to-right on a face.

**Notes:** Works on selected faces in Face or Paint mode.

### Flip V

Mirror selected face UVs vertically.

**Use it for:** Use Flip V when a painted pattern is upside down on a face.

**Notes:** Works on selected faces in Face or Paint mode.

### Reset UV

Reset selected face UVs to the default polygon layout.

**Use it for:** Use Reset UV when manual UV edits become confusing and you want a clean baseline.

**Notes:** After resetting, use Fit UV To Face for a projection matched to the face shape.

### Fit UV To Face

Fit selected face UVs to the face projection.

**Use it for:** Use Fit UV To Face after cutting, beveling, or CSG when a face needs a stable projected paint layout.

**Notes:** This is the general-purpose repair for most skewed face paint mapping.

### Copy UV

Copy UVs from the first selected face.

**Use it for:** Use Copy UV when one face has the correct texture orientation and you want to reuse it.

**Notes:** Paste requires target faces with the same vertex count.

### Paste UV

Paste copied UVs onto matching selected faces.

**Use it for:** Use Paste UV to quickly align repeated planks, panels, caps, or matching sides.

**Notes:** Only faces with the same vertex count receive the pasted UVs.

## Primitives

### Create Box

Add a new box primitive.

**Use it for:** Use boxes for blockouts, walls, floors, crates, and simple hard-surface forms.

**Notes:** New objects are selected immediately.

### Create Cylinder

Add a cylinder using the project cylinder resolution.

**Use it for:** Use cylinders for posts, wheels, barrels, pipes, and radial cutters.

**Notes:** Set the cylinder segment count from the primitive toolbar menu; it is independent from snap grid subdivision.

### Create Sphere

Add a sphere using the project sphere resolution.

**Use it for:** Use spheres for round parts or as CSG cutters for rounded cavities.

**Notes:** Set the sphere segment count from the primitive toolbar menu; it is independent from snap grid subdivision.
