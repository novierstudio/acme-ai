# Acme AI — landing page variations

Three static landing page directions for Acme AI, plus a picker page.

- `index.html`: picker linking to each variation
- `variant-a-ledger/`: warm paper, serif headlines, one vermilion signal
- `variant-b-signal/`: dark console, monospace labels, one mint signal
- `variant-c-warm/`: sand surfaces, rounded cards, a calm green signal

## Notes

- All copy, names, quotes and company details are placeholders. Replace them before launch.
- The email forms are not connected to a backend. Submitting does nothing yet.
- No build step, no dependencies. Plain HTML and CSS.
- Motion respects `prefers-reduced-motion`. Focus rings are visible on every control.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server` in this folder.

## Hosting

GitHub Pages deploys from `main` through `.github/workflows/pages.yml`.
