import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data.js";
export default function Socials() {
  const list = [
    ["GitHub", profile.github, Github],
    ["LinkedIn", profile.linkedin, Linkedin],
    ["Email", profile.email && `mailto:${profile.email}`, Mail],
  ].filter(([, href]) => href);
  return (
    <div className="socials">
      {list.map(([label, href, Icon]) => (
        <a key={label} href={href} aria-label={label} title={label} target={label === "Email" ? undefined : "_blank"} rel="noreferrer"><Icon size={20} /></a>
      ))}
    </div>
  );
}
