import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";
import Socials from "./Socials.jsx";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!profile.email) { setStatus("Add your email in src/data.js to enable the contact form."); return; }
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app…");
  };

  return (
    <section id="contact" className="section container">
      <Reveal>
        <div className="glass card contact">
          <div className="contact-info">
            <h2>Let's Build Something Together</h2>
            <p>I'm open to frontend developer opportunities, collaborations and exciting projects.</p>
            <Socials />
          </div>
          <form onSubmit={submit}>
            <input required placeholder="Name" value={f.name} onChange={set("name")} aria-label="Name" />
            <input required type="email" placeholder="Email" value={f.email} onChange={set("email")} aria-label="Email" />
            <input required placeholder="Subject" value={f.subject} onChange={set("subject")} aria-label="Subject" />
            <textarea required rows="5" placeholder="Message" value={f.message} onChange={set("message")} aria-label="Message" />
            <button className="btn btn-primary" type="submit"><Send size={18} /> Send Message</button>
            {status && <p className="status" role="status">{status}</p>}
          </form>
        </div>
      </Reveal>
    </section>
  );
}
