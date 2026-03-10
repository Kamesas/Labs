# CSS

## Clamp

`clamp(min, preferred, max)` — the browser uses the preferred value, but clamps it between min and max.

```css
font-size: clamp(28px, 2.8vw, 40px);
/* → 2.8vw, but never below 28px or above 40px */
```

---

### How to calculate the `vw` value

The goal: find a `vw` percentage such that the preferred value naturally hits your target size at a specific viewport width.

**Formula:**

```
vw = target_size / viewport_width
   = 40px / 1440px
   = 0.0278
   ≈ 2.8vw
```

**Sanity check:**

| Viewport | `2.8vw` result | Clamp outcome             |
| -------- | -------------- | ------------------------- |
| 1440px   | 40.3px         | capped at 40px (max)      |
| 1024px   | 28.7px         | ~28px min, passes through |
| < 1024px | < 28px         | clamped at 28px (min)     |

Between 1024px and 1440px, the value scales linearly.

---

### Need more precision? Use the two-part formula

If you need exact values at both ends (e.g. exactly 30px at 1024px and 40px at 1440px):

```
preferred = mx + b
  where:
    m = (max_size - min_size) / (max_vp - min_vp)
      = (40 - 30) / (1440 - 1024)
      = 10 / 416
      ≈ 0.024 → 2.4vw

    b = min_size - m × min_vp
      = 30 - 0.024 × 1024
      = 30 - 24.6
      ≈ 5.4px
```

```css
font-size: clamp(28px, 5.4px + 2.4vw, 40px);
```

This gives exactly 30px at 1024px and 40px at 1440px, with linear scaling in between.
