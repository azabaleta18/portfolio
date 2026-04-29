// Services: 3 cards, icono + tags
function Services() {
  const items = [
    {
      icon: '🎨',
      bg: 'rgba(0, 212, 255, 0.12)',
      border: 'rgba(0, 212, 255, 0.3)',
      title: 'Diseño & Desarrollo Web',
      desc: 'Sitios web y landing pages diseñadas para vender. Performance, SEO, conversión y una identidad que se diferencia.',
      tags: ['Webflow', 'React', 'UI/UX', 'E-commerce'],
    },
    {
      icon: '🤖',
      bg: 'rgba(155, 81, 224, 0.12)',
      border: 'rgba(155, 81, 224, 0.3)',
      title: 'Automatización con IA',
      desc: 'Agentes de IA y workflows que atienden clientes, califican leads y mueven datos entre tus herramientas 24/7.',
      tags: ['Make', 'n8n', 'GPT-4', 'Zapier'],
    },
    {
      icon: '⚡',
      bg: 'rgba(34, 211, 175, 0.12)',
      border: 'rgba(34, 211, 175, 0.3)',
      title: 'Sistemas & Procesos',
      desc: 'Conectamos tu CRM, base de datos y herramientas internas. Procesos claros, sin tareas repetitivas.',
      tags: ['CRM', 'Notion', 'Airtable', 'APIs'],
    },
  ];
  return (
    <section id="services" className="relative" style={{ padding: '140px 32px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="label-mono" style={{ marginBottom: 16 }}>— Servicios</div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 720 }}>
              Tres formas de <em style={{ color: 'rgba(240,246,255,0.7)' }}>multiplicar</em> tu negocio.
            </h2>
          </div>
          <p style={{ maxWidth: 320, color: 'var(--muted)', fontSize: 15, lineHeight: 1.6 }}>
            Cada proyecto se piensa como un sistema: diseño, automatización y procesos trabajando en conjunto.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.1} className="glass" style={{
              padding: 32, borderRadius: 20,
              display: 'flex', flexDirection: 'column', gap: 20,
              minHeight: 380,
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: s.bg, border: `1px solid ${s.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28,
              }}>
                {s.icon}
              </div>
              <h3 className="font-serif" style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.15 }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, flex: 1 }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
