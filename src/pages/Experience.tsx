import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Tech Lead",
    company: "Infinite Computer Services",
    location: "Bangalore",
    period: "05/2025 – Present",
    tag: "Current",
    bullets: [
      "Leading frontend development of Vicertify — a device certification platform for set-top boxes, Wi-Fi routers, and mesh systems and logs management in I-Lac in Microfrontend Architecture",
      "Architecting scalable React.js and TypeScript solutions with Node.js, Express.js, and MongoDB",
      "Conducting daily code reviews, mentoring team members, and defining frontend best practices",
      "Implementing Tailwind CSS design system ensuring consistent UI across all modules",
      "Collaborating with stakeholders to translate business requirements into technical specifications",
    ],
  },
  {
    title: "Sr Software Engineer",
    company: "Tech Mahindra",
    location: "Bangalore",
    period: "02/2024 – 03/2025",
    tag: null,
    bullets: [
      "Developed multiple modules for Ingram Micro B2B platform: Help Center, Growth Track, Ultra AI, UI-lib, in Microfrontend Architecture",
      "Built reusable component library (ui-lib) using React.js, TypeScript, and Material UI used across multiple teams",
      "Implemented unit testing using Jest achieving 80%+ code coverage",
      "Collaborated with UX designers for pixel-perfect Figma-to-code implementation",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nailbiter Research Pvt Ltd",
    location: "Remote",
    period: "10/2022 – 01/2024",
    tag: null,
    bullets: [
      "Developed AT&T e-commerce platform — large-scale telecom application serving millions of customers",
      "Implemented Server Side Rendering using Next.js improving SEO and Core Web Vitals performance",
      "Built features for mobile phone sales, SIM cards, TV subscriptions, device upgrades, and bill payment",
      "Used React.js, TypeScript, SCSS, and Next.js to build responsive and performant UI components",
    ],
  },
  {
    title: "System Engineer",
    company: "IBM",
    location: "Bangalore",
    period: "04/2021 – 10/2022",
    tag: null,
    bullets: [
      "Developed CCC — mission-critical banking application managing complete customer data for all internet banking",
      "Built complex data tables and forms using React.js, Redux, TypeScript, and SCSS",
      "Handled multi-currency account information, upstream and downstream application integrations",
      "Maintained zero critical production bugs over 6-month period ensuring high system reliability",
    ],
  },
  {
    title: "Software Engineer",
    company: "Senseforth AI Research Pvt Ltd",
    location: "Bangalore",
    period: "06/2020 – 04/2021",
    tag: null,
    bullets: [
      "Built Aware — an AI chatbot creation platform with create, edit, delete, and deploy functionality",
      "Implemented chatbot theme customization, logo selection, and Q&A configuration features",
      "Developed embeddable chatbot script deployable on any website using React.js and TypeScript",
    ],
  },
  {
    title: "Software Engineer",
    company: "Mapbloc eSystems Pvt Ltd",
    location: "Bangalore",
    period: "07/2018 – 06/2020",
    tag: null,
    bullets: [
      "Developed Cityinfo (CREJ) — a real estate asset management platform with advanced search",
      "Built NB Console using Angular for client management and platform access assignment",
      "Implemented Impulse Tracker for FNCG product analytics using React.js, Ant Design, and Google Analytics",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-orange-50 to-pink-100 px-6 py-20 lg:px-16 relative overflow-hidden">

      <div className="absolute top-10 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <div className="mb-14 animate-fade-in-down">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Career Journey
            </span>
          </div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Work{" "}
            <span className="italic text-pink-600">Experience</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">7+ years · built for millions of users</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-400 via-orange-300 to-transparent ml-[11px] hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                className="animate-fade-in-up md:pl-12 relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-orange-500 shadow-lg shadow-pink-200 group-hover:scale-125 transition-transform duration-300">
                  <Briefcase className="h-3 w-3 text-white" />
                </div>

                {/* Card */}
                <div className="gradient-border glass rounded-[20px] p-6 hover:shadow-2xl hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                        {exp.tag && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-pink-600 to-orange-500 text-white px-2.5 py-0.5 rounded-full animate-pulse">
                            {exp.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-bold text-pink-700">{exp.company}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white border border-pink-100 rounded-full px-3 py-1.5 whitespace-nowrap self-start shadow-sm">
                      <Calendar className="h-3 w-3 text-pink-400" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] leading-6 text-slate-600">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
