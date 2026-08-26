# Comptoir — Restaurant / Café / Ice Cream Menu

A single, searchable menu covering a restaurant, café, and ice cream counter — built as a portfolio piece with React + Tailwind CSS v4. Includes light/dark mode, live search, and category filtering.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/data/menuData.js` — all menu items, categories, and courses. Edit this to swap in your own menu.
- `src/hooks/useTheme.js` — dark/light mode, persisted to localStorage and defaulting to the OS preference.
- `src/components/` — Header, SearchBar, CategoryTabs, MenuGrid, MenuCard (the ticket-style price card), Footer, ThemeToggle.
- `src/index.css` — design tokens (colors, fonts) as CSS variables, swapped via the `.dark` class.

## Customizing

- Colors, fonts, and the ticket-stub styling live in `src/index.css` as CSS variables (`--paper`, `--ink`, `--stamp`, `--gold`, `--pistachio`, etc.) — change them there to reskin the whole site.
- Add or edit items in `src/data/menuData.js`; the grid automatically groups by `course` and respects search/category filters.

---

<details>
<summary>Original Vite template notes</summary>

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
</details>
