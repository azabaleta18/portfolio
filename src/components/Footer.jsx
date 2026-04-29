// Footer simple.
function Footer() {
  const links = [
    { label: 'Servicios', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'IA', href: '#automation' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Contacto', href: '#contact' },
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '36px 32px', background: 'rgba(5, 10, 20, 0.6)' }}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <a href="#top" className="font-serif" style={{ fontSize: 22, fontWeight: 700, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
          Alfonso Zabaleta
        </a>
        <div className="flex flex-wrap gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,246,255,0.65)' }}>
              {l.label}
            </a>
          ))}
        </div>
        <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--muted)' }}>
          © 2026 · Montevideo, UY
        </span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
