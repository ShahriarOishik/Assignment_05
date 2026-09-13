# Dev Stack Builder

Dev Stack Builder is a responsive React application for exploring modern development technologies and assembling a custom project stack. It presents useful details about each tool, prevents duplicate selections, and keeps the selected technologies together in an interactive sidebar.

## Live Preview

- Production: `https://ShahriarOishik.github.io/Assignment_05/` (GitHub Pages, deploys on push to `main` via `.github/workflows/deploy.yml`)
- Local: run `npm run dev` and open the Vite URL

> If Pages shows 404 briefly after the first push, enable Pages in repository Settings → Pages → Source: GitHub Actions, then re-run the workflow.

## Technologies Used

- React 19
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- React-Toastify
- JSON

## Key Features

1. **Technology directory:** Browse 12 frontend, backend, database, language, styling, and DevOps technologies loaded from a JSON file.
2. **Interactive stack builder:** Add technologies, prevent duplicate entries, remove individual selections, or clear the complete stack.
3. **Responsive experience:** Use the site comfortably on mobile, tablet, and desktop with a sticky desktop sidebar and accessible mobile navigation.

Additional highlights include loading and error states, image fallbacks, toast notifications, keyboard-visible focus styles, and a shared orange-to-pink-to-violet brand gradient.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/ShahriarOishik/Assignment_05.git
cd Assignment_05
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Check the source with ESLint
```

## Project Structure

```text
assets/                     Brand and hero artwork
public/data/technologies.json
src/components/             Reusable interface components
src/App.jsx                 Data loading and stack state
src/index.css               Theme and responsive styling
```

## Common FAQ

### 1. Where can we deploy the site?

Anywhere you like — Netlify, Vercel, Cloudflare Pages, or any other host. There is no fixed platform. This project is deployed on GitHub Pages at `https://shahriaroishik.github.io/Assignment_05/`.

### 2. Do we have to use TypeScript?

No. You can use TypeScript or JavaScript. This project is built entirely in plain JavaScript (ES6+), which is completely fine.

### 3. Can we change the title, logo, and colors?

Yes. The project title, logo, and color scheme are all yours to change — just keep them relevant to the project. Don't use random or gobindo colors and don't put an unrelated title or logo.

### 4. Where do we get the technology logos/icons?

You can use image URLs from Google or from anywhere you like. A good source with clean, ready-to-use tech logos is [techicons.dev](https://techicons.dev/) — copy the icon URL from there and put it in your JSON data.

## Author

[Shahriar Oishik](https://github.com/ShahriarOishik)
