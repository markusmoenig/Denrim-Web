---
sidebar_position: 2.1
---

# Keyboard shortcuts

These are the **default** v1.6 bindings, checked against the Swift and Rust action catalogs and keyboard handlers. Custom bindings stored on your device can override them. Tool shortcuts require an eligible selection and do not operate while a text field is accepting input. On iPad, use the visible controls or an attached keyboard where supported.

## Selection and display

| Key | Action |
| --- | --- |
| `1` | Vertex mode |
| `2` | Edge mode |
| `3` | Face mode |
| `4` | Object mode |
| `Space` | Cycle component selection modes |
| `P` | Paint mode |
| `Tab` | Toggle Studio/PBR; a custom Tab assignment takes precedence |
| `Escape` | Leave the active tool on Mac; use the tool's Done/Cancel controls to make its lifecycle explicit |

**Plain digits change selection mode; Ctrl+1–7 run topology selections.** Ctrl here means the actual Control key, including on Mac. `V` creates a Cylinder; `Shift+O` creates a Sphere. `O` collapses selected vertices to their center, while `G` runs Merge using its current merge setting. These are separate commands.

## Modeling actions

Uppercase letters in the table are key labels: `M` means the unmodified M key, while `Shift+M` means hold Shift. Punctuation describes the character to type; the physical keys required depend on your keyboard layout. Delete is the editor action; Windows/Linux also accept Backspace for geometry deletion.

| Action | Default key |
| --- | --- |
| Transform | `M` |
| Size | `S` |
| Rotate | `R` |
| Flatten | `Shift+F` |
| Push/Pull | `U` |
| Extrude | `E` |
| Inset | `I` |
| Arc | `A` |
| Knife | `C` |
| Lathe | `L` |
| Cut Through | `T` |
| Subdivide | `K` |
| Sub-D | `Shift+S` |
| Ruler | `9` |
| Split Edge | `J` |
| Select Loop | `Ctrl+1` |
| Select Edge Ring | `Ctrl+2` |
| Select Boundary | `Ctrl+3` |
| Select Connected | `Ctrl+4` |
| Select Coplanar | `Ctrl+5` |
| Select Hard Edges | `Ctrl+6` |
| Select Open Edges | `Ctrl+7` |
| Grow Selection | `+` |
| Shrink Selection | `_` |
| Hide Faces | `{` |
| Unhide Faces | `}` |
| Merge | `G` |
| Connect | `8` |
| Fill | `F` |
| Bridge | `N` |
| Loop Cut | `X` |
| Edge Slide | `:` |
| Triangulate | `Y` |
| Flip Normals | `Z` |
| Recalculate Normals | `Shift+N` |
| Weld | `W` |
| Remove Degenerates | `!` |
| Fill Holes | `?` |
| Cleanup Mesh | `~` |
| Separate | `;` |
| Join | `'` |
| Mirror X | `,` |
| Mirror Y | `.` |
| Mirror Z | `/` |
| Sym +X | `^` |
| Sym -X | `@` |
| Sym +Y | `&` |
| Sym -Y | `#` |
| Sym +Z | `*` |
| Sym -Z | `$` |
| Solidify | `H` |
| Apply Material | `Shift+M` |
| Clear Material | `Shift+C` |
| Clear Paint | `Shift+P` |
| Clear All | `Shift+A` |
| Rotate UV 90 | `Shift+R` |
| Flip U | `Shift+U` |
| Flip V | `Shift+V` |
| Reset UV | `0` |
| Fit UV To Face | `=` |
| Copy UV | `<` |
| Paste UV | `>` |
| Bevel | `-` |
| Create Box | `B` |
| Create Cylinder | `V` |
| Create Sphere | `Shift+O` |
| Create Capsule | `Shift+K` |
| Create Torus | `Shift+T` |
| Duplicate | `D` |
| Delete | `Del` |
| Rotate X 90 | `[` |
| Rotate Y 90 | `]` |
| Rotate Z 90 | `\` |

## File, history, and clipboard

Use **Command** on Mac and **Ctrl** on Windows/Linux for the modifier below. File-menu availability depends on the platform and document state. Clipboard shortcuts edit text while a text field has focus; outside text editing they operate on supported geometry selections.

| Keys | Action |
| --- | --- |
| Command/Ctrl+N | New document |
| Command/Ctrl+O | Open document |
| Command/Ctrl+S | Save |
| Command/Ctrl+Z | Undo |
| Command/Ctrl+Shift+Z | Redo |
| Command/Ctrl+X | Cut |
| Command/Ctrl+C | Copy |
| Command/Ctrl+V | Paste |

## Assign your own shortcut

Right-click a Model tool/action, or long-press it on a touch device, and choose the shortcut assignment action. Capture the desired keys using a hardware keyboard, resolve any reported conflict, and confirm. Reset to Default removes that override; Cancel leaves it unchanged. Toolbar customization also exposes shortcut configuration. Scene toolbar shortcuts are configured separately and have no shared default key table.

**Grab Brush, Booleans, Array, Offset, Circlify, Relax, and Freeze Sub-D have no default action shortcut.** Open them through their named controls or assign one. Do not assume a key shown in somebody else's customized toolbar is a default.

## When a shortcut does something unexpected

- Finish numeric entry with Return, then move focus out of the field or use the visible tool button.
- Check the selection mode and component count. An unavailable tool cannot run just because its key is pressed.
- Check your custom assignment and conflicts before resetting anything.
- In Paint, Shift while brushing temporarily smooths paint. Grab Brush's Smooth/Relax switch edits mesh geometry instead.
- Tool shortcuts act on the current Model context. The top Scene workspace and the Model Outliner are different controls.
