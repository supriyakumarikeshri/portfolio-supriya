import React, { useEffect, useState } from "react";
import { Eye, Download, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roles = ["Tech Lead", "Frontend Architect", "React.js Expert", "MERN Stack Dev"];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const skills = [
    "React.js", "TypeScript", "Next.js", "Node.js",
    "MongoDB", "Express.js", "Redux", "Tailwind CSS", "REST APIs", "Microfrontend",
  ];

  const stats = [
    { label: "Years Exp", value: "7+", emoji: "⚡" },
    { label: "Companies", value: "6",  emoji: "🏢" },
    { label: "CGPA",      value: "9.1", emoji: "🎓" },
    { label: "Degree",    value: "MCA", emoji: "📚" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-rose-100 flex items-center justify-center px-6 lg:px-8 py-20 overflow-hidden relative">

      {/* Animated background blobs */}
      <div className="absolute top-16 -left-16 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
      <div className="absolute top-32 right-0 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-14 items-center relative z-10">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">

          {/* Badge */}
          <div className="animate-fade-in-down inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-5 py-2.5 shadow-sm shadow-pink-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-semibold text-slate-600">Open to opportunities · PAN India</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1]">
              Hi, I'm <br />
              <span className="shimmer-text">Supriya Kumari</span>
            </h1>
            <div className="flex items-center gap-2 h-9">
              <span className="text-2xl font-bold text-pink-600">{displayed}</span>
              <span className="inline-block w-[2px] h-7 bg-pink-500 animate-pulse rounded-full" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            6+ years building scalable frontends at <strong className="text-slate-800">IBM</strong>, <strong className="text-slate-800">Tech Mahindra</strong> & <strong className="text-slate-800">Infinite Computer Services</strong>.
            I turn complex requirements into fast, beautiful web experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => navigate("/experience")}
              className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:scale-105 transition-all duration-300"
            >
              <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View my work
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv/Supriya-Kumari-CV.pdf";
                link.download = "Supriya-Kumari-CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group flex items-center gap-2.5 px-8 py-4 bg-white border-2 border-pink-300 text-pink-600 font-bold rounded-2xl hover:bg-pink-50 hover:border-pink-500 hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              Download CV
            </button>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {skills.map((skill, i) => (
              <span
                key={skill}
                style={{ animationDelay: `${0.45 + i * 0.04}s` }}
                className="animate-fade-in px-4 py-1.5 glass text-pink-700 text-sm font-semibold rounded-full border border-pink-200 hover:bg-pink-100 hover:border-pink-400 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 space-y-5 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                className="animate-fade-in-up gradient-border group glass p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{stat.emoji}</span>
                <span className="text-3xl font-bold bg-gradient-to-br from-pink-600 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Available badge */}
          <div className="animate-glow-pulse glass rounded-2xl p-5 flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
            </div>
            <div>
              <p className="font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                Available for opportunities
              </p>
              <p className="text-slate-500 text-xs font-medium mt-0.5">Full-time · Remote · Contract · PAN India</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-bold rounded-2xl py-4 shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:scale-[1.02] transition-all duration-300"
          >
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Let's connect
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
