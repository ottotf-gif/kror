import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { company } from '../data/company';

const links = [
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#omdomen', label: 'Omdömen' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-sand-100/90 backdrop-blur-md border-b border-ink/10' : ''
      }`}
    >
      <div className="wrap flex items-center justify-between py-4">
        <a href="#top" className="font-display font-extrabold text-2xl tracking-tightest text-marine">
          K<span className="text-copper">-RÖR</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft hover:text-marine transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={company.phoneHref} className="btn-primary py-2.5 px-5 text-sm">
            <Phone size={15} />
            {company.phone}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink p-2 -mr-2"
          aria-label="Meny"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden wrap pb-5">
          <nav className="flex flex-col gap-1 bg-white rounded-lg border border-ink/10 p-3 shadow-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-ink-soft hover:bg-sand-200 hover:text-marine transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href={company.phoneHref} className="btn-primary mt-1">
              <Phone size={16} />
              {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}