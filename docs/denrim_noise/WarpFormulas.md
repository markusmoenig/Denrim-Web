---
title: "Warp Formulas"
id: warp_formulas
sidebar_position: 2
---

# Domain Warping Formulas

Mathematical formulas showing how each warp mode transforms coordinates.

## Simple Warp

Single-pass domain warping using the warp noise layer.

```
W(p) = N_warp((p + O) × S)

p' = p + W(p) × strength

result = N_base(p')
```

Where:
- `p` = input position (uv coordinates)
- `O` = (offset_x, offset_y)
- `S` = scale
- `N_warp` = warp noise function
- `N_base` = base noise function
- `strength` = warp_strength

**Effect:** The warp noise pushes and pulls the base noise sampling coordinates, creating smooth flowing distortions.

---

## Dual Warp

Two sequential warp passes applied one after another.

```
W₁(p) = N_warp((p + O₁) × S₁)

p' = p + W₁(p) × strength

W₂(p') = N_warp((p' + O₂) × S₂)

p'' = p' + W₂(p') × n_strength

result = N_base(p'')
```

Where:
- `O₁` = (offset_x, offset_y)
- `S₁` = scale
- `O₂` = (n_offset_x, n_offset_y)
- `S₂` = n_scale
- `n_strength` = secondary warp strength

**Effect:** Compound distortions where the second warp adds detail within the first warp's flow. Use different scales for primary (large flows) and secondary (fine detail).

---

## Chained Warp

The warp noise itself is warped before being used to distort the base noise.

```
W_pre(p) = N_warp((p + O₁) × S₁)

p_warp = (p + O₂) + W_pre(p) × n_strength

W(p) = N_warp(p_warp × S₂)

p' = p + W(p) × strength

result = N_base(p')
```

Where:
- `O₁` = (offset_x, offset_y) - pre-warp offset
- `S₁` = scale - pre-warp scale
- `O₂` = (n_offset_x, n_offset_y) - main warp offset
- `S₂` = n_scale - main warp scale
- `n_strength` = how much pre-warp distorts main warp

**Effect:** Creates extremely organic patterns where the warp itself has internal structure. The warp varies across space, producing natural marble veining and flowing liquid effects.

---

## Parameter Summary

**Common to all modes:**
- `warp_strength` - Overall warp intensity
- `offset_x, offset_y` - Primary warp offset
- `scale` - Primary warp scale/frequency

**Dual & Chained modes:**
- `n_offset_x, n_offset_y` - Secondary warp offset
- `n_scale` - Secondary warp scale/frequency  
- `n_strength` - Secondary warp intensity

**Key Difference:**

- **Dual**: Warps are applied sequentially to the base noise coordinates
  ```
  base_noise(warp1(warp2(uv)))
  ```

- **Chained**: First warp distorts the second warp, then result distorts base noise
  ```
  base_noise(warp2(uv + warp1(uv)))
  ```
