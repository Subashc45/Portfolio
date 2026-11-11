import * as Icons from "lucide-react";
import { skillGroups } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionTitle title="Technical Skills" sub="The technologies and tools I work with." />
      <div className="skill-grid">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 80}>
            <div className="glass card skill-group">
              <h3>{g.title}</h3>
              <div className="skill-items">
                {g.items.map(([name, icon]) => { const Icon = Icons[icon] || Icons.Code2; return (
                  <div className="skill" key={name}><span className="ico"><Icon size={20} /></span><span>{name}</span></div>
                ); })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
