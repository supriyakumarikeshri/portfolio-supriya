import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/",           label: "Home" },
  { to: "/about",      label: "About" },
  { to: "/skills",     label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/contact",    label: "Contact" },
  // { to: "/projects", label: "Projects" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-pink-100/50 border-b border-pink-100"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 tracking-tight"
        >
          Supriya Kumari
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(to)
                    ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-md shadow-pink-200"
                    : "text-slate-600 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-pink-50 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden animate-fade-in-down bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 py-4 space-y-2 shadow-lg">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive(to)
                  ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-sm"
                  : "text-slate-600 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
