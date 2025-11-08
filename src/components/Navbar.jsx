import React from 'react';
import { Rocket, Star, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#how', label: 'How' },
    { href: '#serve', label: 'Who' },
    { href: '#plan', label: 'Plan' },
    { href: '#why', label: 'Why' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-cyan-100">
          <Star className="h-5 w-5 text-cyan-400" />
          <span className="font-semibold">Aircel x Starlink</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-cyan-100/80 transition hover:text-cyan-100">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_25px_rgba(6,182,212,0.6)] transition hover:bg-cyan-400">
            <Rocket className="h-4 w-4" />
            Join
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu className="h-6 w-6 text-cyan-100" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-1 text-sm text-cyan-100/90">
                {l.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-black">
              <Rocket className="h-4 w-4" />
              Join
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
