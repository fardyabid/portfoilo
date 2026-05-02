This repository was converted to a simple static HTML + CSS site.

Files added:
- index.html — static single-page site.
- styles.css — simplified CSS (located at project root).

How to view locally:
1. Open `index.html` in a browser (double-click), or run a simple static server:

For PowerShell / Node (quick):

```powershell
# from project root
npx http-server -c-1 .
# then open http://localhost:8080
```

Notes:
- Images are referenced from the `public/` folder; `public/profile.jpg` is used by the hero.
- This is a minimal conversion from the original Next.js project and does not include interactive JS features or Tailwind utilities. Use the `index.html` and `styles.css` as a starting point for further refinement.
