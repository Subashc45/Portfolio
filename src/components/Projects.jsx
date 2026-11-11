
import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionTitle
        title="Projects"
        sub="A selection of things I've built and explored."
      />

      <div className="proj-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <a
              href={p.demo || undefined}
              target={p.demo ? "_blank" : undefined}
              rel={p.demo ? "noopener noreferrer" : undefined}
              className="project-card-link"
              onClick={(e) => {
                if (!p.demo) e.preventDefault();
              }}
              aria-label={`Visit ${p.title} website`}
            >
              <article className="glass card proj">
                <div className="shot">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="shot-ph">
                      <div className="dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>{p.title.split(" ")[0]}</span>
                    </div>
                  )}
                </div>

                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <ul className="tags">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
