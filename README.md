# BonAcup

A basic React + Tailwind CSS template with Vite.

## Stack

- **React** 19
- **Vite** 7
- **Tailwind CSS** 4

## Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project structure

```
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main app component
│   ├── index.css    # Global styles (Tailwind import)
│   └── main.jsx     # Entry point
├── index.html
└── vite.config.js
```

## Pushing to GitHub

1. Create a new repository on GitHub (no README, .gitignore, or license).
2. Run:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/BonAcup.git
   git branch -M main
   git push -u origin main
   ```

Replace `YOUR_USERNAME` with your GitHub username.
