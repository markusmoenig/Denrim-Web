---
sidebar_position: 3.8
---

import DocScreenshot from '@site/src/components/DocScreenshot';

# Make a window through a wall

Use **Knife** to define a window region, then **Cut Through** to open it through the wall. The result includes the inside faces of the opening, not just a missing front face.

This lesson uses a fresh default cube in the **Model** workspace of the Mac SwiftUI app, v1.5.30. Start in Object mode. Screenshots show the real operation, with the macOS title bar cropped. Click an image to enlarge it; numbered markers are documentation callouts, not app controls.

New to the controls? [Match the starting state and learn selection/number entry](./before-you-start.md) before continuing.

**Current numeric setup:** In Forge 1.6.38+, select **Import and Export → Project units → Meters** before entering this lesson’s position/length values. The old screenshots retain their capture version; changing display units does not rescale geometry.

## 1. Turn the cube into a wall

Choose **Transform** in Actions and expand **Detail**. Set these values, pressing Return after editing each field:

| Row | X | Y | Z |
| --- | --- | --- | --- |
| Position | 0 | 1.5 | 0 |
| Scale | 2 | 1.5 | 0.25 |
| Rotation | 0 | 0 | 0 |

The default cube is 2 units wide, so these scale factors produce a wall **4 wide × 3 high × 0.5 thick**. Position Y = 1.5 places its base at ground level. Choose **Front** on the View Cube to frame the wall straight on.

<DocScreenshot src="/img/docs/forge/window-setup.png" alt="Front view of the wall with Position 0, 1.5, 0 and Scale 2, 1.5, 0.25 visible in Transform Detail." markers={[{x:77,y:46,label:'1'},{x:77,y:53,label:'2'}]} />

1. **Position** places the wall; these are coordinates.
2. **Scale** changes its proportions; these are multipliers, not final dimensions.

[![Close-up of Transform Detail showing the wall's Position, Scale, and Rotation values.](/img/docs/forge/window-transform-detail.png)](/img/docs/forge/window-transform-detail.png)

*Control close-up. Read each row left to right as X, Y, Z.*

## 2. Draw the window outline

1. Choose **Face** mode in the bottom toolbar and **Replace Selection** near the bottom right.
2. Click the wall's front face. Check that the status display says **Face: 1**.
3. Choose **Knife** in Actions under Mesh Edit. Scroll down the panel if necessary.
4. Click four points inside the face in order: top left, top right, bottom right, bottom left. Keep every point inside the wall boundary and trace around the perimeter without crossing the lines.
5. Inspect the rectangular preview. The example makes a centered opening approximately 2 wide × 1.5 high. Grid snapping can shift a clicked point onto a nearby snap position.

<DocScreenshot src="/img/docs/forge/window-knife.png" alt="Knife preview with four yellow corners inside the wall and Apply Cut, Undo Point, and Cancel Cut visible in Actions." markers={[{x:27,y:43,label:'1'},{x:76,y:46.5,label:'2'}]} />

1. **Window outline:** four corners define the new inner region. Use **Undo Point** if the latest corner is wrong, or drag a point to adjust it.
2. **Apply Cut:** commits the surface cut. **Cancel Cut** abandons the current cut instead.

[![Close-up of Knife's Apply Cut, Undo Point, and Cancel Cut buttons.](/img/docs/forge/window-knife-controls.png)](/img/docs/forge/window-knife-controls.png)

*Knife has its own commit controls. It does not use the Apply/Done pair shown in the Inset lesson.*

## 3. Commit the surface cut

Click **Apply Cut once**. Knife returns to Transform and the new inner face remains selected.

[![After Apply Cut, the rectangular inner face is selected in yellow but still fills the window region.](/img/docs/forge/window-region.png)](/img/docs/forge/window-region.png)

*This is not a hole yet. The front face has been divided into an inner region and the surrounding wall.*

If the selection was cleared, click the inner rectangle in Face mode before continuing. Do not select the entire wall object or add the surrounding faces.

## 4. Open the wall with Cut Through

Choose **Cut Through** under Mesh Edit in Actions. It runs immediately; there is no additional Apply button. In this example, the command creates **four tunnel faces** around the opening.

[![Cut Through result from the front, with the dark opening visible and Cut Through in the right Actions panel.](/img/docs/forge/window-through.png)](/img/docs/forge/window-through.png)

Use **Deselect All**, then drag the View Cube slightly to inspect the thickness from an angle:

[![Completed wall with a rectangular through-opening, visible inner sill and side faces, and the ground grid visible through the window.](/img/docs/forge/window-result.png)](/img/docs/forge/window-result.png)

*The wall remains 0.5 units thick. You can see through the opening, and its inside faces connect the front and back of the wall.*

## Troubleshooting

| What happened? | What to check |
| --- | --- |
| Knife is missing | Select a face in Face mode, then scroll Actions to Mesh Edit. |
| The outline is a line instead of a rectangle | Two points make a straight split. Use four distinct corners for this lesson. |
| The window shape is crossed or invalid | Place corners in perimeter order and keep them inside one face. Use Undo Point or Cancel Cut. |
| The rectangle is still filled after Apply Cut | This is expected. Now run Cut Through on that inner face. |
| Other tools are dimmed while drawing | Complete Knife with Apply Cut, or abandon it with Cancel Cut. |
| Cut Through does not make the intended opening | Start with the closed box from this lesson and select only the new inner region. Check the command's status message. |
| The front surface vanished but no tunnel was built | Undo the deletion and use Cut Through instead of Delete. |

For a recess that does not pass through the wall, use a small negative **Extrude** on the inner face instead. See [the raised/recessed panel lesson](./make-a-raised-panel.md).

## Keep a cutter adjustable instead

Knife and Cut Through edit the wall topology directly. For a rounded socket or a cutout you want to move later, use [editable Boolean subtraction](./boolean-socket.md). Keep its operand as a separate source, revise its transform, and apply only before final UV mapping. Join and deleting a face do not create the same solid cutout workflow.
