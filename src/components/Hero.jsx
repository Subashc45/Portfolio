
import { useEffect, useState } from "react";
import { Download, FolderGit2 } from "lucide-react";
import { roles } from "../data.js";
import Socials from "./Socials.jsx";

function useTyping(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];

    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));

        if (text.length + 1 === word.length) {
          setTimeout(() => setDel(true), 900);
        }
      } else {
        setText(word.slice(0, text.length - 1));

        if (text.length - 1 === 0) {
          setDel(false);
          setI(i + 1);
        }
      }
    }, del ? 40 : 85);

    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export default function Hero() {
  const role = useTyping(roles);

  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <p className="hello">Hi, I'm</p>

        <h1>
          Subash <br />
          <span className="grad">Chidambaram</span>
        </h1>

        <h3 className="role">
          {role}<b className="caret" />
        </h3>

        <p className="lead">
          I build modern, responsive and user-friendly web experiences
          by combining creative design with clean and efficient code.
        </p>

        <div className="cta">
          <a href="#projects" className="btn btn-primary">
            <FolderGit2 size={18} />
            View My Projects
          </a>

          <a
            href="/subash-cv.pdf"
            download="Subash_CV.pdf"
            className="btn btn-ghost"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <Socials />
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="card glass code-card">
          <div className="dots">
            <i /><i /><i />
          </div>

          <pre>{`const developer = {
  name: "Subash",
  role: "Frontend Developer",
  stack: ["React", "JavaScript", "CSS"],
  learning: true,
};

developer.build("something great");`}</pre>
        </div>

        <div className="chip glass c1">⚛ React</div>
        <div className="chip glass c2">{"</>"} Clean code</div>
        <div className="chip glass c3">✦ Responsive</div>
      </div>
    </section>
  );
}
