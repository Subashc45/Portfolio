import { navLinks } from "../data.js";
import Socials from "./Socials.jsx";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <div><strong>Subash Chidambaram</strong><p>Frontend Developer</p></div>
        <nav>{navLinks.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
        <Socials />
      </div>
      <p className="copy">© {new Date().getFullYear()} Subash Chidambaram. All rights reserved.</p>
    </footer>
  );
}
