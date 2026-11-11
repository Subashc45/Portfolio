// ✏️ Edit this file to configure your portfolio. Empty links are hidden automatically.
export const profile = {
  name: "Subash Chidambaram",
  email: "",     // e.g. "you@example.com" – enables email icon + contact form
  github: "",    // e.g. "https://github.com/your-username"
  linkedin: "",  // e.g. "https://www.linkedin.com/in/your-id"
  resume: "/resume.pdf", // put your resume at public/resume.pdf
};

export const roles = ["Frontend Developer", "UI Developer", "Web Developer"];

export const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export const highlights = ["Frontend Development", "UI Development", "Problem Solving", "Continuous Learning"];

// icon names map to lucide-react icons in Skills.jsx
export const skillGroups = [
  { title: "Frontend", items: [
    ["HTML5", "FileCode2"], ["CSS3", "Palette"], ["JavaScript", "Braces"],
     ["Responsive Web Design", "MonitorSmartphone"],  ] },
  { title: "Backend & Database", items: [
    ["Python", "Terminal"], ["Django", "Server"], ["Supabase", "Database"], ["REST API Integration", "Plug"] ] },
  { title: "Tools", items: [
    ["Git", "GitBranch"], ["GitHub", "Github"], ["VS Code", "Code2"], ["Cursor AI", "Send"] ] },
  // { title: "AI Tools", items: [
  //   ["ChatGPT", "MessageSquare"], ["GitHub Copilot", "Bot"], ["Cursor", "MousePointer2"], ["Google Gemini", "Sparkles"] ] },
];

// github / demo / image: add real values when ready (image e.g. "/projects/cloudfit.png" in public/)
export const projects = [
  {
    title: "KISEM",
    description: "A responsive web application developed using HTML, CSS, JavaScript, and Astro. Features interactive user interfaces, Supabase integration, database connectivity, and dynamic functionality to deliver a smooth user experience.",
    tech: ["HTML5", "CSS3", "Javascript", "Astro.js", "Supabase"],
    github: "",
    demo: "https://www.kisem.org",
    image: ""
  },
  {
    title: "Cosmo-verse",
    description: "A responsive web application developed using HTML, CSS, JavaScript, and React. Features interactive user interfaces, dynamic components, modern layouts, and smooth navigation to deliver an engaging user experience.",
    tech: ["HTML5", "CSS3", "Javascript", "React.js"],
    github: "",
    demo: "https://cosmo-verse-blond.vercel.app",
    image: ""
  },
  {
    title: "Nestora",
    description: "A responsive real estate website developed using HTML, CSS, and JavaScript. Features property listings, detailed property information, interactive navigation, and user-friendly layouts to deliver a smooth browsing experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "https://nestora-web-eight.vercel.app/index.html",
    image: ""
  },
];

export const timeline = [
  { title: "Bachelor of Engineering", text: "Graduated with an engineering degree, developing problem-solving and logical thinking skills." },
  { title: "Advanced Python Full Stack", text: "Currently pursuing advanced training in Python, Django, databases, and web technologies." },
  { title: "AI Learning & Exploration", text: "Currently learning AI technologies, AI tools, automation, and prompt engineering." },
  { title: "Professional Development", text: "Working as a Frontend Developer at Wraptron, building web applications using HTML, CSS, JavaScript, Astro, and Supabase." },
];
