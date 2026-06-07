import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import { navLinks } from "../data/siteData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" aria-label="ShreeStack Digital Solutions home">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:text-sky-400 transition">
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-300 transition lg:inline-flex"
        >
          Start Project
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden">
          <div className="grid gap-4 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-sky-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-sky-400 px-5 py-3 text-center font-semibold text-slate-950 hover:bg-sky-300 transition"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
