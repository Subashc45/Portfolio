# Subash Chidambaram – Portfolio

React + Vite portfolio. Only dependencies: react, react-dom, lucide-react.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview
```

## Customize (all in `src/data.js`)
- Set `email`, `github`, `linkedin` – social icons and the contact form activate once filled (empty links are hidden, never faked).
- Put your resume at `public/resume.pdf` for the Download Resume button.
- Per project: add `github`, `demo` (buttons appear when set) and `image` (e.g. `/projects/cloudfit.png`, file in `public/projects/`).

## Structure
```
src/
  App.jsx, main.jsx, data.js
  components/  Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Socials, Reveal, SectionTitle
  styles/      base.css (theme, buttons, navbar), sections.css (sections)
```
