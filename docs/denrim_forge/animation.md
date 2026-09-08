---
sidebar_position: 5
---

# Animation

Forge animates ordinary scene objects by keying their position, rotation, and scale. Parent-child hierarchy evaluation makes this useful for segmented characters, articulated props, vehicles, and mechanical assemblies without requiring a skeletal rig, skinning, or vertex deformation.

<video
  autoPlay
  controls
  loop
  muted
  playsInline
  preload="metadata"
  poster="/img/screenshots/forge/forge_mac_robocat.png"
  aria-label="An articulated RoboCat walking with object animation in Denrim Forge"
  style={{ display: 'block', width: '100%', borderRadius: '8px' }}
>
  <source src="/img/screenshots/forge/forge_cat_walk_h264_v2.mp4" type="video/mp4" />
</video>

*RoboCat uses ordinary parented objects with keyed position, rotation, and scale—no skeletal rig or skinning required.*

## Open the animation workspace

Select the film button in the top toolbar to open **Animation**. The timeline replaces the lower modeling controls while it is active, and the Outliner stays available for choosing the item whose animation you want to edit.

Closing Animation returns the normal modeling controls. It does not delete clips or keys.

## Create and manage clips

Animation clips belong to animated items. Select an object, create or choose a clip, then use the separate pencil and trash actions to rename or remove that object's track. **Clip Settings** controls frame rate, duration, and the interpolation assigned to newly created keys.

Deleting the selected object's animation removes only that object's track. **Delete Entire Clip…** is a separate confirmed command that removes animation for every object in the scene clip.

## Add transform keys

Forge records position, rotation, and scale as independent animation channels.

- **Add Transform Key** writes all three transform channels for the selected object at the current frame. Move to the required frame, pose the object, then add a key to record the pose explicitly. A key already present on the same channel and frame is replaced.
- **Auto Key** writes position, rotation, and scale keys automatically when the selected object is transformed on another frame. Auto Key needs an active clip and does not add anything until the transform changes.

Multi-object keying keeps a separate track for every transformed selected item. Parent-child transforms are evaluated together, while each object's local transform remains independent.

## Navigate and preview

The playback controls move through frames and keyed poses, play or pause the clip, and stop at its beginning. The outer buttons jump to the clip ends, the key buttons move between keyed poses, and the frame buttons provide precise one-frame steps. Transport changes the preview frame; it does not create or move keys.

Drag the main scrubber or any transform-channel track to inspect a pose at a specific frame. Scrubbing pauses playback without changing existing keys.

### Preview all animated items

**Preview All Items** plays the chosen clip for every animated item together in the viewport on one playback clock. Each item remembers its chosen clip, keeps its own clip timing and playback behavior, and contributes to the correctly resolved parent-child pose. Disable Preview All Items to isolate the active clip.

## Select and edit keys

Each diamond on a Position, Rotation, or Scale track represents one keyed value. Tap a diamond to select its key and frame, or drag it horizontally to retime it. Transform channels have independent keys and interpolation settings.

The key-selection controls can select all transform keys at the current frame, select every key for the active object, or clear the selection. Changing key selection does not alter animation data.

With keys selected, you can:

- Use minus or plus to move them one frame earlier or later. Movement stays inside the clip duration and preserves spacing within a multi-key selection.
- Enter a **Frame** number when the selected keys share one frame to move them together to an exact destination.
- Choose **Stepped** for a held value, **Linear** for constant change, or **Ease In**, **Ease Out**, and **Ease In/Out** for gradual acceleration. Interpolation is stored per channel key and can be edited for multiple selected keys.
- **Cut**, **Copy**, **Paste**, or **Delete** selected keys. Paste begins at the current frame, preserves channel, interpolation, and relative spacing, and replaces keys on the same channel and frame.

Key editing is undoable. Deleting keys affects only the selected keys on the active object's track; other objects and unselected keys remain intact.

## Continue motion outside keyed ranges

**Channel Behavior** controls how Position, Rotation, and Scale continue before their first key and after their last key. Choose separate **Pre** and **Post** modes for each transform channel:

| Behavior | Result |
| --- | --- |
| **Constant** | Holds the first or last keyed value. |
| **Repeat** | Repeats the keyed cycle. |
| **Oscillate** | Repeats the cycle while reversing direction each time. |
| **Offset Repeat** | Repeats the cycle and accumulates its value change on every repetition. |

Channel behavior is evaluated procedurally across the clip timeline without creating additional keys.

## Animate a parent-child assembly

1. Switch to **Scene** mode and select the intended children plus their intended parent.
2. Make the intended parent the active object, then choose **Parent**.
3. Place each object's origin where it should rotate. Enable **Show Pivots** in Preferences when you need to inspect the local axes.
4. Open **Animation**, select an item in the Outliner, and create a clip.
5. Set the first pose, move to another frame, and use Auto Key or Add Transform Key for the next pose.
6. Repeat for the other animated items, then enable **Preview All Items** to inspect the complete assembly.

Use **Unparent** when an item should return to the scene root. Its world transform and descendants are preserved.

## Export animation to GLB

Choose **GLB** when the animation should continue into a compatible game engine, renderer, or 3D viewer. Forge exports visible objects as individual hierarchy nodes and writes each clip's position, rotation, and scale channels with the correct object pivots and project-unit scaling.

Ping-pong clips export as a complete forward-and-reverse cycle. Compatible per-item clips are combined into an **All Items** take so standard viewers can play the complete project together, while the original individual takes remain available.
