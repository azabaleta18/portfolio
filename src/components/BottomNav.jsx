// Bottom nav flotante.
function BottomNav() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed left-1/2 z-50"
      style={{
        bottom: 24,
        transform: `translateX(-50%) translateY(${visible ? 0 : 80}px)`,
        opacity: visible ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '10px 10px 10px 22px',
        borderRadius: 999,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: 'rgba(13, 31, 45, 0.85)',
        border: '1px solid var(--border)',
        boxShadow: '0 24px 60px -20px rgba(0, 0, 0, 0.6)',
      }}
    >
      <span className="font-serif" style={{ fontSize: 16, fontWeight: 700, fontStyle: 'italic', whiteSpace: 'nowrap' }}>
        Alfonso Zabaleta
      </span>
      <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
        Hablemos
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  );
}

window.BottomNav = BottomNav;
