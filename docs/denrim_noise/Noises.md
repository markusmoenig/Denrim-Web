---
title: "Noises"
id: noises
sidebar_position: 2
---

# Noise Types Guide

## OpenSimplex 2 (OS2)

Your go-to noise for almost everything. OpenSimplex 2 creates smooth, organic patterns without any visible artifacts or directional bias. Perfect for terrain, clouds, marble textures, and general-purpose procedural generation. When in doubt, start here.

**Try it for:** Terrain heightmaps, cloud formations, natural textures

---

## OpenSimplex 2S (OS2S)

A variant of OpenSimplex 2 with a slightly different character. Same quality, but the patterns feel subtly different at the same settings. Experiment with both to see which aesthetic you prefer, or layer them together for complex results.

**Try it for:** Variation on OS2, layering for added complexity

---

## Perlin

The classic noise algorithm that started it all. Perlin noise has been the industry standard for decades, producing smooth, natural-looking patterns. It has a slight diagonal bias, but that predictability can actually be useful for certain effects.

**Try it for:** Wood grain, water surfaces, classic procedural looks

---

## Value Noise

The simplest noise type with a distinctly blocky, less smooth appearance. It's fast and straightforward - think of it as the "pixel art" of noise algorithms. Great when you want that retro aesthetic or need something quick for prototyping.

**Try it for:** Retro/pixel art effects, rapid iteration, stylized looks

---

## Cellular (Voronoi)

Creates fascinating cell-like patterns based on distance to random points. Highly versatile with different distance functions and return types that dramatically change the output - from smooth organic cells to sharp cracked surfaces.

### Distance Functions
- **Euclidean:** Natural circular cells (most organic)
- **Manhattan:** Diamond-shaped cells (geometric)
- **Hybrid:** Blend of both styles

### Return Types
- **Cell Value:** Smooth fills within each cell
- **Distance:** Gradient from cell centers
- **Distance 2 Sub:** Sharp cell boundaries (great for cracks)
- **Distance 2 Mul:** Crackle patterns
- **Distance 2 Div:** Vein-like structures

**Try it for:** Animal patterns (reptile skin, giraffe spots), cracked earth, stone walls, stained glass

---

## Sinusoidal

Pure, regular wave patterns with perfect mathematical smoothness. Unlike random noise, this creates predictable oscillations that can layer into beautiful interference patterns. Extremely clean and geometric.

**Try it for:** Water ripples, wave patterns, geometric backgrounds, sound visualization

---

## Gabor

Advanced directional noise with a fingerprint-like quality. Gabor noise lets you control pattern direction and regularity, making it perfect for materials that have grain or weave. More computationally expensive, but worth it for the control.

**Try it for:** Fabric textures, brushed metal, fingerprints, directional wood grain

---

## Fractal Settings

### Octaves (1-8)
Stack multiple noise layers at different scales. More octaves = more detail, but 4-6 usually gives the best natural look.

### Lacunarity (1.0-4.0)
How much the frequency increases each octave. Default 2.0 doubles the frequency - higher values create more contrast between scales.

### Gain (0.0-1.0)
How much each octave's amplitude decreases. Default 0.5 creates balanced detail - lower values make fine details subtle, higher makes them prominent.

### Fractal Types

**FBM** - Standard layering, natural results, use for most cases

**Ridged** - Inverts and sharpens the noise into mountain ridges and lightning bolts

**Ping Pong** - Creates unusual oscillating patterns, great for alien/experimental looks

---

## Quick Tips

**Starting out?** Use OpenSimplex 2 with FBM fractal and 4-6 octaves.

**Want organic textures?** Try Cellular with Euclidean distance and Distance 2 Sub return type.

**Need sharp patterns?** Cellular with Ridged fractal creates dramatic cracked surfaces.

**Looking for something weird?** Gabor with Ping Pong fractal produces unique, otherworldly results.

**Retro vibes?** Value noise at low frequency with 2-3 octaves.
