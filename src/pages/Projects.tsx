import React from "react";
import { FolderGit2, Clock } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 px-6 py-20 lg:px-16 min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute top-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="mx-auto max-w-5xl w-full relative z-10">
        <div className="mb-12 animate-fade-in-down">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Featured{" "}
            <span className="italic text-pink-600">Projects</span>
          </h2>
        </div>

        <div className="animate-float flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-orange-100 border-2 border-pink-200 shadow-xl shadow-pink-100">
              <FolderGit2 className="h-10 w-10 text-pink-500" />
            </div>
            <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-orange-500 shadow-md">
              <Clock className="h-3.5 w-3.5 text-white" />
            </div>
          </div>

          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-3">
            Coming{" "}
            <span className="italic text-pink-600">Soon</span>
          </h3>
          <p className="text-slate-500 text-base max-w-sm leading-relaxed">
            Curating my best work — personal projects, open source contributions, and case studies. Check back soon!
          </p>

          <div className="mt-8 flex gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.3}s` }}
                className="animate-bounce-soft w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
