import { Code2, LayoutDashboard, Puzzle, TrendingUp } from "lucide-react";
import { highlights } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

const icons = [Code2, LayoutDashboard, Puzzle, TrendingUp];

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle title="A Little About Me" />
      <div className="about-grid">
        <Reveal>
          <p className="about-text">I'm a Frontend Developer at Wraptron with a BE background and hands-on experience in building responsive, user-friendly web applications. I work with HTML5, CSS3, JavaScript, Astro, and Supabase to develop interactive user interfaces, integrate APIs, and connect applications with databases. I enjoy turning ideas into practical digital solutions, exploring AI-powered development tools, and continuously improving my technical skills. I'm passionate about frontend development and always eager to learn new technologies and take on challenging projects.</p>
        </Reveal>
        <div className="hl-grid">
          {highlights.map((h, i) => { const Icon = icons[i]; return (
            <Reveal key={h} delay={i * 80}><div className="glass card hl"><Icon size={26} /><span>{h}</span></div></Reveal>
          ); })}
        </div>
      </div>
    </section>
  );
}
