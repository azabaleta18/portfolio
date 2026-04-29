// Navbar fija con backdrop blur. Encoge padding al scrollear.
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'IA', href: '#automation' },
    { label: 'Precios', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 px-8 md:px-12 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
      style={{
        paddingTop: 22,
        paddingBottom: 22,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: 'rgba(5, 10, 20, 0.55)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight" style={{ fontStyle: 'italic', fontWeight: 700 }}>
          AZ
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'rgba(240,246,255,0.7)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(240,246,255,0.7)'}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary text-sm" style={{ padding: '10px 22px' }}>
          Hablemos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </nav>
  );
}

window.Navbar = Navbar;
