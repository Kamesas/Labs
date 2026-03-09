# Todo App — Figma Design Reference

Figma: https://www.figma.com/design/Q1q1Wo2LQ6JSFlRPKvib2S/Todo-App--Community-?node-id=27-47

---

## Colors

### Background

- Page gradient: `from-[#1253AA] to-[#05243E]` (top to bottom)
- Overlay on gradient: `bg-gradient-to-b from-[rgba(217,217,217,0.4)] to-[rgba(217,217,217,0.1)]` with `backdrop-blur-[1px]`

### Surface

- Task card bg: `bg-[rgba(255,255,255,0.97)]`
- Search bar bg: `bg-[rgba(16,45,83,0.8)]`
- Input / textarea bg: `bg-[#05243E]`
- Bottom sheet bg: `bg-white`

### Brand

- Primary blue (button, border): `#0EA5E9` → Tailwind `sky-500`
- Dark navy: `#05243E`

### Text

- White primary: `text-white`
- White muted (placeholder): `text-[rgba(255,255,255,0.6)]` or `text-white/60`
- Black primary: `text-black`
- Black muted: `text-[rgba(0,0,0,0.9)]`
- Input text muted: `text-[rgba(255,255,255,0.8)]` or `text-white/80`
- Cancel button text: `text-[#05243E]`

---

## Typography

Font: **Poppins** (add to Next.js via `next/font/google`)

- weights needed: 400 (Regular), 500 (Medium)

| Element            | Size | Weight  | Tracking |
| ------------------ | ---- | ------- | -------- |
| Task title         | 14px | Medium  | 1.26px   |
| Task subtitle      | 10px | Regular | 0.9px    |
| Search placeholder | 12px | Medium  | 1.08px   |
| Section heading    | 16px | Regular | 1.44px   |
| Form labels        | 16px | Regular | 1.44px   |
| Button text        | 16px | Medium  | 1.44px   |

Tailwind tracking values closest to Figma:

- `tracking-[1.26px]` — use arbitrary value
- `tracking-wider` ≈ 1.44px tracking — close enough for labels/buttons

---

## Border Radius

| Element      | Value            | Tailwind           |
| ------------ | ---------------- | ------------------ |
| Task card    | 5px              | `rounded-[5px]`    |
| Search bar   | 5px              | `rounded-[5px]`    |
| Inputs       | 5px              | `rounded-[5px]`    |
| Bottom sheet | 20px top corners | `rounded-t-[20px]` |
| Buttons      | 10px             | `rounded-[10px]`   |

---

## Spacing & Sizing

### Container

- Width: 411px (mobile) — use `max-w-[411px] mx-auto` or just `w-full` on mobile

### Padding

- Horizontal page padding: 29px — `px-[29px]`

### Search bar

- Height: 42px — `h-[42px]`
- Width: full width minus padding — `w-full`

### Task card

- Height: 64px — `h-16`
- Gap between cards: 22px — `gap-[22px]`
- Border radius: 5px

### Bottom sheet

- Top position: ~287px from top (slides up over content)
- Corner radius: 20px top only — `rounded-t-[20px]`

### Form inputs

- Task input height: 42px — `h-[42px]`
- Description textarea height: 159px — `h-[159px]`
- Date / Time inputs height: 42px — `h-[42px]`
- Date input width: ~170px (half width minus gap)
- Time input width: ~169px (half width minus gap)

### Buttons (cancel / create)

- Height: ~46px — `h-[46px]`
- Width: ~166px each (half width minus gap)
- Create: filled `bg-[#0EA5E9]`
- Cancel: outlined `border-2 border-[#0EA5E9]`

### Bottom navigation bar

- Icon size: 33x30px
- Top position: 670px from top

---

## Layout Structure

```
┌─────────────────────────────┐
│  [gradient background]      │
│                             │
│  [search bar]        top: 45px
│                             │
│  Tasks List          top: 157px
│  [task cards]        top: 210px
│                             │
│  [+ FAB button]      bottom right
│                             │
│  ┌─────────────────────┐    │
│  │  [bottom sheet]     │ top: 287px
│  │  task input         │    │
│  │  description        │    │
│  │  date | time        │    │
│  │  cancel | create    │    │
│  └─────────────────────┘    │
│  [bottom nav bar]    top: 670px
└─────────────────────────────┘
```

---

## Shadows

- Todo List nav icon: `shadow-[0px_4px_4px_0px_rgba(118,213,234,0.25)]`

---

## Notes

- The design is mobile-only (411px wide)
- Bottom sheet appears to be a modal/drawer — consider whether to show it by default or toggle with the + button
- Icons are SVG images in the Figma file — you can use a library like `react-icons` or `lucide-react` as replacements
- Poppins is not currently in your project — add it in `layout.tsx` alongside Geist
