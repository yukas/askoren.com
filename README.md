# Oren

A static landing page MVP for validating demand for Oren, a relationship communication tool with a warmer, more human-centered positioning.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Host on GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings` → `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose `main` and `/root`, then save.

The waitlist form currently stores submissions in the visitor's browser with `localStorage`. Connect it to a form backend such as Formspree, Basin, Airtable, or a small serverless function before sending real traffic to the page.
