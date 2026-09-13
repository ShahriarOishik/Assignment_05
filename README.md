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
- Lucide React
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

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like elements inside JavaScript. React uses it because it makes a component's structure and dynamic values easier to read and maintain.

### 2. What is the difference between props and state?

Props are values a parent passes to a child component. State is data owned by a component that can change while the application is running.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores values that can change and causes React to render the updated interface. This project uses it for the technology data, selected stack, loading and error status, retry counter, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. It is used here to fetch the technology JSON when the application starts and whenever the user retries a failed request.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list item was added, removed, or changed. That lets React update the correct element efficiently without mixing up component state.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different interface elements based on current data. The stack panel shows an empty message when nothing is selected and shows the selected technology list when the count is greater than zero.

### 7. How do you pass data from a parent to a child, and how does a child send something back to the parent?

A parent passes data to a child through props. A child sends an action back by calling a callback prop; for example, each technology card calls `onAdd(technology)` so `App` can update the selected stack.

## Author

[Shahriar Oishik](https://github.com/ShahriarOishik)
