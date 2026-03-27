import { Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-espresso text-cream/70 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Coffee className="w-5 h-5 text-cream/50" />
        <span className="font-display text-lg text-cream">Bean & Bliss</span>
      </div>
      <nav className="flex gap-6 text-sm">
        {["Home", "Menu", "About", "Gallery", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-cream transition-colors">
            {l}
          </a>
        ))}
      </nav>
      <p className="text-xs text-cream/40">
        © {new Date().getFullYear()} Bean & Bliss. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
