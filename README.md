# Utkarsh Aryan Mishra — DevOps Portfolio

A modern, dark-themed DevOps portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.tsx
├── App.tsx
├── index.css
├── pages/
│   └── Home.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Timeline.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── ui/           (shadcn/ui components)
├── hooks/
│   └── use-toast.ts
└── lib/
    └── utils.ts
```

## Customise

- **Timeline entries** → `src/components/Timeline.tsx` (TIMELINE_DATA array)
- **Projects** → `src/components/Projects.tsx` (PROJECTS array)
- **Skills** → `src/components/Skills.tsx` (SKILL_CATEGORIES array)
- **Contact info** → `src/components/Contact.tsx`
- **Theme colours** → `src/index.css` (CSS variables in :root)

