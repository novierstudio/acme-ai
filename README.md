# Acme AI — landing page variations

React + Vite app with three landing page directions for Acme AI and a picker page.

- `/` picker
- `?v=a` variant A · Ledger: warm paper, serif headlines, one vermilion signal
- `?v=b` variant B · Signal: dark console, monospace labels, one mint signal
- `?v=c` variant C · Warm: sand surfaces, rounded cards, a calm green signal

## Structure

- `src/App.jsx` picks the variant from `?v=`
- `src/Picker.jsx` the picker page
- `src/variants/` one React component per variant
- `src/styles/` per-variant CSS, each scoped under its root class (`.ledger`, `.signal`, `.warm`)

## Notes

- All copy, names, quotes and company details are placeholders. Replace them before launch.
- The email forms are not connected to a backend. Submitting does nothing yet.
- Motion respects `prefers-reduced-motion`. Focus rings are visible on every control.

## Develop

```sh
npm install
npm run dev
```

## Build and hosting

```sh
npm run build    # outputs dist/
npm run preview  # serves dist/ locally
```

GitHub Pages deploys `dist/` from `main` through `.github/workflows/pages.yml`. The Vite `base` is `/acme-ai/` in `vite.config.js`.
