import React from "react";
import { Briefcase, Code, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="h-5 w-5" />,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    glow: "hover:shadow-pink-100",
    accent: "from-pink-500 to-rose-400",
    skills: ["React.js", "Next.js", "TypeScript", "Javascript", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap", "Ant Design"],
  },
  {
    title: "Backend",
    icon: <Briefcase className="h-5 w-5" />,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    glow: "hover:shadow-rose-100",
    accent: "from-rose-500 to-orange-400",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    glow: "hover:shadow-orange-100",
    accent: "from-orange-500 to-amber-400",
    skills: ["MongoDB", "Mongoose", "Atlas"],
  },
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    glow: "hover:shadow-pink-100",
    accent: "from-pink-400 to-orange-300",
    skills: ["Git", "Docker", "Postman", "VS Code", "Claude Code", "ChatGPT", "Github Copilot"],
  },
];

const SkillsPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 px-6 lg:px-8 py-20 relative overflow-hidden">

      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="mb-14 animate-fade-in-down">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Skills &{" "}
            <span className="italic text-pink-600">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl">
            7+ years of hands-on experience across the full stack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              className={`animate-fade-in-up gradient-border group glass rounded-[22px] p-6 hover:shadow-2xl ${cat.glow} hover:-translate-y-2 transition-all duration-400`}
            >
              {/* Icon */}
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${cat.iconBg} ${cat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>

              {/* Title with gradient accent bar */}
              <div className="mb-2 flex items-center gap-2">
                <div className={`h-[3px] w-6 rounded-full bg-gradient-to-r ${cat.accent}`} />
                <h3 className="text-xl font-serif font-bold text-slate-900">{cat.title}</h3>
              </div>

              <p className="text-xs text-slate-400 mb-5">{cat.skills.length} technologies</p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={skill}
                    style={{ animationDelay: `${0.2 + i * 0.1 + j * 0.03}s` }}
                    className="animate-fade-in rounded-full border border-pink-200 bg-white/80 px-3 py-[5px] text-[12px] font-semibold text-pink-700 hover:bg-pink-50 hover:border-pink-400 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 animate-fade-in-up text-center glass rounded-3xl p-10 border border-pink-100" style={{ animationDelay: "0.5s" }}>
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Available for opportunities</h3>
          <p className="text-slate-500 text-base">Full-time · Remote · Contract · PAN India</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
