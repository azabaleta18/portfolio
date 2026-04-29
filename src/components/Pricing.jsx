// Pricing: 2 cards.
function Pricing() {
  const cardA = {
    label: 'Proyecto único',
    price: 'A consultar',
    desc: 'Para una entrega específica: web, landing o automatización puntual.',
    features: [
      'Briefing y propuesta a medida',
      'Diseño + desarrollo + lanzamiento',
      'Hasta 2 rondas de revisión',
      '30 días de soporte post-launch',
    ],
    cta: 'Pedir cotización',
    primary: false,
  };
  const cardB = {
    label: 'Socio mensual',
    price: '$800',
    sub: 'USD / mes',
    desc: 'Diseño, IA y mejoras continuas. Como tener un equipo, sin contratarlo.',
    features: [
      'Iteraciones semanales priorizadas',
      'Mantenimiento de webs y agentes IA',
      'Nuevas automatizaciones cada mes',
      'Reuniones quincenales 1:1',
      'Slack compartido + soporte rápido',
    ],
    cta: 'Empezar el mes',
    primary: true,
  };

  const Card = ({ c }) => (
    <div className={`glass ${c.primary ? 'pricing-featured' : ''}`} style={{
      flex: 1, padding: 36, borderRadius: 22, position: 'relative',
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      {c.primary && (
        <span className="font-mono absolute" style={{
          top: -12, left: 32,
          padding: '6px 14px', borderRadius: 999,
          background: 'var(--accent)', color: 'var(--dark)',
          fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600,
        }}>Popular</span>
      )}
      <div>
        <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          {c.label}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span className="font-serif" style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1 }}>{c.price}</span>
          {c.sub && <span className="font-mono" style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em' }}>{c.sub}</span>}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.6, marginTop: 14 }}>{c.desc}</p>
      </div>
      <div style={{ height: 1, background: 'var(--border)' }} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {c.features.map((f) => (
          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 14.5, color: 'rgba(240,246,255,0.9)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.primary ? '#00D4FF' : 'rgba(240,246,255,0.5)'} strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
              <path d="M5 12l5 5L20 7" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={c.primary ? 'btn-primary' : 'btn-ghost'} style={{ justifyContent: 'center' }}>
        {c.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  );

  return (
    <section id="pricing" className="relative" style={{ padding: '140px 32px' }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="label-mono" style={{ marginBottom: 16 }}>— Cómo trabajamos</div>
          <h2 className="font-serif mx-auto" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 720 }}>
            Dos formas de <em style={{ color: 'rgba(240,246,255,0.7)' }}>arrancar</em>.
          </h2>
        </Reveal>
        <div className="flex flex-col md:flex-row gap-6" style={{ maxWidth: 900, margin: '0 auto' }}>
          <Reveal delay={0.1} style={{ display: 'flex', flex: 1 }}><Card c={cardA} /></Reveal>
          <Reveal delay={0.2} style={{ display: 'flex', flex: 1 }}><Card c={cardB} /></Reveal>
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
