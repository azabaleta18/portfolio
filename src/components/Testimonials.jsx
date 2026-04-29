// Testimonials: 3 cards.
function Testimonials() {
  const items = [
    {
      quote: 'En tres semanas tenía mi sitio nuevo y un agente IA contestando consultas mientras dormía. Vendí más en un mes que en todo el trimestre anterior.',
      name: 'María Acosta',
      role: 'Boutique Nordeste',
      initials: 'MA',
      grad: 'linear-gradient(135deg, #00D4FF 0%, #9B51E0 100%)',
    },
    {
      quote: 'Alfonso piensa el negocio antes de tocar una herramienta. Diseñó procesos que nos ahorraron 12 horas a la semana sin contratar a nadie más.',
      name: 'Sebastián Rocha',
      role: 'Director, Logística Sur',
      initials: 'SR',
      grad: 'linear-gradient(135deg, #22D3AF 0%, #00D4FF 100%)',
    },
    {
      quote: 'El landing convirtió un 8% desde la primera semana. Lo que más valoro es que entiende qué tiene que decir un sitio para que la gente compre.',
      name: 'Lucía Fernández',
      role: 'Co-founder, Estudio Lince',
      initials: 'LF',
      grad: 'linear-gradient(135deg, #9B51E0 0%, #00D4FF 100%)',
    },
  ];
  return (
    <section className="relative" style={{ padding: '140px 32px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <div className="label-mono" style={{ marginBottom: 16 }}>— Testimonios</div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 780 }}>
            Clientes que volvieron a <em style={{ color: 'rgba(240,246,255,0.7)' }}>elegirme</em>.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1} className="glass relative" style={{
              padding: 32, borderRadius: 20, minHeight: 320,
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <span className="quote-mark">"</span>
              <div className="flex gap-1" style={{ position: 'relative', zIndex: 1 }}>
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="star" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .8-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.5L2 9.8 9 9z"/></svg>
                ))}
              </div>
              <p style={{ position: 'relative', zIndex: 1, fontSize: 15.5, lineHeight: 1.65, color: 'rgba(240,246,255,0.9)', flex: 1 }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3" style={{ position: 'relative', zIndex: 1, paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 600, fontSize: 13, color: '#050A14',
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div className="font-mono" style={{ fontSize: 11, letterSpacing: '0.04em', color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
