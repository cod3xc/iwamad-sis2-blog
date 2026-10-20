# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype): / (posts-desktop) → /posts/:id (post-desktop, "Read more") → back; * (404-desktop)
Components → React files: PostCard → src/components/PostCard.tsx   Button → src/components/ui/Button.tsx   Tag → src/components/ui/Tag.tsx
Button variants → prop: variant = primary | secondary
PostCard layout: direction column  gap 16px  padding 24px  radius 12px
Breakpoint change: phone 1 column(s), desktop 3 columns; header stacked on phone, one row on desktop (min-width: 640px)
Tokens (all ten): color/primary = #1d4ed8, color/muted = #4b5563 (fixed from #9ca3af), color/surface = #ffffff, color/text = #111827, color/border = #e5e7eb, space/1 = 4px, space/2 = 8px, space/3 = 12px, space/4 = 16px, radius/card = 12px
