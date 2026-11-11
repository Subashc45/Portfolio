import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = "home";
      navLinks.forEach((n) => {
        const el = document.getElementById(n.toLowerCase());
        if (el && el.getBoundingClientRect().top < 140) cur = n.toLowerCase();
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#home" className="logo">Subash<span>.</span></a>
        <nav className={`links ${open ? "open" : ""}`}>
          {navLinks.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? "active" : ""} onClick={() => setOpen(false)}>{n}</a>
          ))}
          <a href="#contact" className="btn btn-primary talk" onClick={() => setOpen(false)}>Let's Talk</a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
