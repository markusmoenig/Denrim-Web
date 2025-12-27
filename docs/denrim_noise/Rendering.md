---
title: "Rendering"
id: rendering
sidebar_position: 3
---

# Warping, Coloring & Shading Guide

## Domain Warping

Imagine bending and twisting your noise like taffy. Domain warping doesn't change the noise itself - it distorts where you sample it, creating flowing, liquid-like patterns impossible with basic noise.

### How It Works

Instead of reading noise straight at position (x, y), we generate a second "warp" noise that pushes and pulls those coordinates around before sampling. Add a second warp pass and things get really interesting - swirls within swirls, organic marble patterns, flowing lava.

### Key Controls

**Warp Strength (0.0 - 2.0)**

How much the distortion affects your pattern.
- **0.5** - Good starting point, subtle organic flow
- **1.0** - Strong swirling effects
- **1.5+** - Extreme, abstract distortions

**Primary Scale (0.1 - 5.0)**

The "size" of the warp distortions.
- **Low (0.5-1.5)** - Large, sweeping flows
- **High (2.0-5.0)** - Fine, detailed warps

**Secondary Warp**

Add a second layer of warping for compound effects. Use different scales from your primary warp for the best results - try primary at 1.0 and secondary at 3.0.

### Quick Recipes

**Natural Terrain** - Strength: 0.6, Primary Scale: 1.5, Secondary: 0.7

**Flowing Water** - Strength: 1.2, Primary Scale: 0.8, Secondary: high influence

**Marble** - Strength: 0.4, Primary Scale: 3.0, Secondary: subtle

**Abstract Chaos** - Strength: 1.8, mix extreme scale values

---

## Color & Gradients

Your noise starts as grayscale. Time to paint it.

### The 4-Color Gradient

Map noise values to colors using four gradient stops:
- **Color 1** → Darkest areas (0.0)
- **Color 2** → Dark-mid tones (0.33)
- **Color 3** → Light-mid tones (0.66)
- **Color 4** → Brightest areas (1.0)

Click any color button to choose your palette.

### Adjustment Controls

**Contrast** - Punch it up or soften it down
- Default: 1.0
- < 1.0 for gentle, dreamy looks
- \> 1.0 for dramatic, bold patterns

**Brightness** - Shift the whole image lighter or darker
- Range: -1.0 to 1.0
- Fine-tune the overall exposure

**Saturation** - From grayscale to ultra-vivid
- 0.0 for pure black and white
- 1.0 for natural colors
- 1.5+ for eye-popping intensity

### Inspiring Palettes

**Terrain** - Brown → Tan → Green → White (earthy realism)

**Ocean** - Deep Blue → Blue → Cyan → White (aquatic depth)

**Lava** - Black → Red → Orange → Yellow (molten intensity)

**Sunset** - Purple → Orange → Pink → Yellow (warm atmosphere)

**Monochrome** - Pick one hue, vary its brightness across all four stops

---

## 3D Rendering

Flat colors are nice, but what if your noise had *depth*?

### Render Modes

**Flat** - Pure 2D color. What you see is what you get. Use for final textures, wallpapers, or when exporting for other software.

**Bump Mapping** - Your noise becomes a height map with realistic lighting. Watch your patterns come alive with shadows, highlights, and surface detail.

### Lighting Setup

**Light Height (-5.0 - 5.0)**

Where's your light source?
- **-1.0** - Low, dramatic side lighting (long shadows)
- **1.0** - Good default (balanced illumination)
- **3.0+** - Overhead (flatter, softer)

Try negative values for unusual, artistic effects.

### Material Properties

**Bump Strength (0.0 - 1.0)**

How "tall" are the bumps?
- **0.05** - Start here for subtle texture
- **0.3** - Good default for visible relief
- **0.7+** - Extreme, exaggerated depth

**Shininess (1.0 - 50.0)**

Surface reflectivity - but backwards! Higher = less shiny.
- **5-10** - Metallic, glossy (large highlights)
- **15-25** - Balanced (default)
- **35-50** - Matte, rough (tiny highlights)

### Environment

Choose your ambient lighting mood:
- **Studio** - Neutral, even lighting
- **Outdoor** - Natural daylight
- **Sunset** - Warm, golden glow
- **Night** - Cool, dramatic shadows

### Quick Setups

**Stone** - Bump: 0.4, Shininess: 35, Light: 1.0, Outdoor

**Metal** - Bump: 0.15, Shininess: 8, Light: 1.5, Studio

**Terrain** - Bump: 0.3, Shininess: 28, Light: 0.8, Outdoor

---

## Workflow Tips

### The Basic Recipe

1. Pick a noise type (OpenSimplex 2 is always solid)
2. Set frequency around 20, add 4-6 octaves
3. Enable warping at strength 0.5-0.8
4. Choose a color palette
5. Switch to bump mapping and tweak lighting
6. Iterate until it looks amazing

### Smart Combinations

**Heavy warping?** Works best in Flat mode - all that flow and detail shows up clearly.

**Lots of octaves?** Use less bump strength or it gets noisy.

**High contrast colors?** Pair with moderate shininess (15-20) for balance.

**Creating textures for 3D?** Use Flat mode, square aspect, enable tiling.

### Export Smart

**For Games/3D** - Flat mode, 1:1 aspect, power-of-2 resolution (1024, 2048, 4096)

**For Wallpapers** - Bump mode looks great, match your screen's aspect ratio (16:9), go 2048px or higher

**For Print** - Flat mode, PNG format, 4096px+, high resolution

---

## Experiment!

These are guidelines, not rules. The best patterns come from experimentation. Crank that warp to 2.0. Try weird color combos. Put the light below the surface. See what happens.

That's the beauty of procedural generation - infinite variations, instant preview, full undo. So go ahead, break some "rules" and create something unique.
