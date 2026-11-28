---
sidebar_position: 2.2
---

# Customize the toolbar

Forge stores separate toolbar layouts for **Model** and **Scene**. The examples here use Model and a selected object.

## Add a button or a menu

1. Open **Preferences** from the gear button and choose **Customize Toolbar**.
2. Search for a command such as **Size** or **Rotate**. Click **Add Button** beside the command to put it directly on the top toolbar.
3. To group commands, choose **New Menu** and name it. Find another command and choose **Add to Menu**, then pick your menu.
4. Use the up and down arrows to reorder toolbar entries. Choose **Done** and try the button or menu on your selection.

## Find commands in the overflow

The Model toolbar shows your first two custom entries directly. Forge automatically puts later entries in the **⋯** overflow menu. For example, if **Size** and **Rotate** are your first two custom buttons and you add **Transform** and **Delete**, the two new buttons appear under **⋯**. Move an entry up in Customize Toolbar to show it directly.

Use **New Menu** when you want a group with its own name. A named menu counts as one toolbar entry and can also appear inside **⋯**.

## Assign a keyboard shortcut

Right-click a tool button or action with a mouse, or long-press it on a touch device with a hardware keyboard attached. On a touch device, choose **Assign Shortcut**. Press the desired key combination when the capture window opens.

You can also select a command by name in **Customize Toolbar** and edit its **Shortcut** field. Selecting that row opens its settings. Use **Add Button** to put it on the toolbar.

If the editor reports a conflict, choose another combination or change the existing assignment first. **Reset to Default** in the shortcut dialog removes that command's override. **Reset to Default** at the top of Customize Toolbar resets the toolbar configuration. See [Keyboard shortcuts](./keyboard-shortcuts.md) for the default bindings.

## Use Transform, Move, Size, and Rotate

Select an object in **Object** mode. **Transform** offers move arrows, size handles, and rotation rings in one gizmo. **Move** shows the axis arrows, **Size** shows the scale handles, and **Rotate** shows the rotation rings. Drag a handle to edit the object. The active named tool also appears in the viewport info panel when it is enabled in Preferences.

Try these tools with a box or sphere. Click **Size** and drag one of its handles. Click **Rotate** and drag a ring. Choose **Transform** to return to the combined gizmo. The defaults are **M** for Transform, **S** for Size, and **R** for Rotate. Assign a shortcut for standalone Move in Customize Toolbar.
