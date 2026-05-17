import React from "react";
import { Briefcase, Code, MessageCircle, Mail, ArrowRight, Sparkles } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    { emoji: "⚡", text: "7+ years building production-grade frontends" },
    { emoji: "🏆", text: "Tech Lead at Infinite Computer Services" },
    { emoji: "🎓", text: "MCA — Pondicherry University, 9.1 CGPA" },
    { emoji: "🌍", text: "Worked across IBM, Tech Mahindra & startups" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 flex items-center justify-center px-6 lg:px-8 py-20 relative overflow-hidden">

      {/* background blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT */}
        <div className="space-y-8">
          <div className="animate-fade-in-down flex items-center gap-3">
            <div className="h-[2px] w-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full" />
            <span className="text-xs font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent uppercase tracking-[0.22em]">About Me</span>
          </div>

          <h3 className="animate-fade-in-up text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1]" style={{ animationDelay: "0.1s" }}>
            Building the web,{" "}
            <span className="italic text-pink-600 block">one line at a time.</span>
          </h3>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a passionate <strong className="text-slate-800">Tech Lead & Frontend Engineer</strong> with 7+ years of experience architecting scalable React.js applications in Microfrontend environments.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              From mission-critical banking apps at <strong className="text-slate-800">IBM</strong> to large-scale B2B platforms at <strong className="text-slate-800">Tech Mahindra</strong>, I bring both technical depth and leadership to every project.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {highlights.map((h, i) => (
              <div
                key={i}
                style={{ animationDelay: `${0.35 + i * 0.08}s` }}
                className="animate-slide-in-left flex items-center gap-3 glass rounded-2xl px-4 py-3 border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-xl">{h.emoji}</span>
                <span className="text-sm font-semibold text-slate-700">{h.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full" />
            <span className="text-xs font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent uppercase tracking-[0.22em]">Reach Me</span>
          </div>

          <div className="grid gap-4">
            <ContactCard
              icon={<Briefcase size={18} />}
              label="LINKEDIN"
              value="supriya-kumari-139039128"
              href="https://www.linkedin.com/in/supriya-kumari-139039128"
              delay="0.25s"
            />
            <ContactCard
              icon={<Code size={18} />}
              label="GITHUB"
              value="supriyakumarikeshri"
              href="https://github.com/supriyakumarikeshri"
              delay="0.32s"
            />
            <ContactCard
              icon={<MessageCircle size={18} />}
              label="WHATSAPP"
              value="+91 8789852317"
              href="https://wa.me/918789852317"
              delay="0.39s"
            />
            <ContactCard
              icon={<Mail size={18} />}
              label="GMAIL"
              value="supriyakumari2393@gmail.com"
              href="mailto:supriyakumari2393@gmail.com"
              delay="0.46s"
            />
          </div>

          {/* Quote card */}
          <div className="animate-fade-in-up glass rounded-2xl p-6 border border-pink-100" style={{ animationDelay: "0.55s" }}>
            <Sparkles className="text-pink-400 mb-3" size={20} />
            <p className="text-slate-600 italic text-sm leading-relaxed">
              "Clean code, scalable architecture, and pixel-perfect UI — that's the standard I hold every sprint to."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon, label, value, href, delay,
}: {
  icon: React.ReactNode; label: string; value: string; href: string; delay: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ animationDelay: delay }}
    className="animate-fade-in-up gradient-border group flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:shadow-pink-100 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-pink-50 text-pink-500 rounded-xl group-hover:bg-pink-100 group-hover:text-pink-600 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase">{label}</p>
        <p className="text-sm font-bold text-slate-700">{value}</p>
      </div>
    </div>
    <ArrowRight className="text-slate-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-200" size={18} />
  </a>
);

export default About;
