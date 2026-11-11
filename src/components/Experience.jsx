import { timeline } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionTitle title="Learning Journey" sub="How I got here." />
      <ol className="timeline">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 80}>
            <li><span className="node" /><div className="glass card"><h3>{t.title}</h3><p>{t.text}</p></div></li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
