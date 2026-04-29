// Automation: layout 2 cols. Izq: lista numerada. Der: diagrama de nodos absolutos.
function Automation() {
  const features = [
    { n: '01', title: 'Captura de leads automática', desc: 'Formularios, WhatsApp y email se sincronizan con tu CRM en segundos, sin perder un dato.' },
    { n: '02', title: 'Agentes IA conversando 24/7', desc: 'Califican consultas, agendan reuniones y escalan al humano sólo cuando hace falta.' },
    { n: '03', title: 'Reportes y tareas sin tocarlos', desc: 'La IA arma reportes diarios, mueve datos entre herramientas y te avisa lo importante.' },
  ];

  // posiciones de nodos (relativas en %)
  const nodes = [
    { id: 'a', label: 'Gmail / Outlook', icon: '📧', top: 4, left: 6, delay: 0 },
    { id: 'b', label: 'WhatsApp / Telegram', icon: '💬', top: 4, left: 60, delay: 0.6 },
    { id: 'c', label: 'Agente IA', icon: '🤖', top: 38, left: 32, delay: 1.2, highlight: 'cyan' },
    { id: 'd', label: 'Google Sheets', icon: '📊', top: 70, left: 2, delay: 1.8 },
    { id: 'e', label: 'CRM / Notion', icon: '🗂️', top: 70, left: 56, delay: 2.4 },
    { id: 'f', label: 'Tarea completada', icon: '✅', top: 90, left: 30, delay: 3.0, highlight: 'green' },
  ];

  // líneas: connect by index
  const lines = [
    { from: 'a', to: 'c' }, { from: 'b', to: 'c' },
    { from: 'c', to: 'd' }, { from: 'c', to: 'e' },
    { from: 'd', to: 'f' }, { from: 'e', to: 'f' },
  ];

  return (
    <section id="automation" className="relative" style={{ padding: '140px 32px' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div className="label-mono" style={{ marginBottom: 16 }}>— IA & Automatización</div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
            Tu negocio, <em style={{ color: 'rgba(240,246,255,0.7)' }}>en piloto automático</em>.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
            Diseño workflows con Make, n8n, Zapier y modelos GPT-4 para que las tareas repetitivas dejen de ser tu trabajo.
          </p>
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <Reveal key={f.n} delay={0.1 + i * 0.1} className="flex gap-5 items-start">
                <span className="num-circle">{f.n}</span>
                <div>
                  <h4 className="font-serif" style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 6 }}>{f.title}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="relative" style={{ height: 540, minHeight: 480 }}>
          {/* lines (svg) */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(0,212,255,0.0)" />
                <stop offset="50%" stopColor="rgba(0,212,255,0.6)" />
                <stop offset="100%" stopColor="rgba(0,212,255,0.0)" />
              </linearGradient>
            </defs>
            {lines.map((l, i) => {
              const a = nodes.find(n => n.id === l.from);
              const b = nodes.find(n => n.id === l.to);
              const x1 = `${a.left + 12}%`;
              const y1 = `${a.top + 6}%`;
              const x2 = `${b.left + 12}%`;
              const y2 = `${b.top + 6}%`;
              return (
                <line key={i} className="flow-line" x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="url(#flowGrad)" strokeWidth="1.5" strokeDasharray="4 5"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              );
            })}
          </svg>

          {nodes.map((n) => {
            const highlight = n.highlight === 'cyan'
              ? { border: '1px solid rgba(0,212,255,0.5)', background: 'rgba(0,212,255,0.08)', boxShadow: '0 0 32px -8px rgba(0,212,255,0.5)' }
              : n.highlight === 'green'
              ? { border: '1px solid rgba(34,211,175,0.5)', background: 'rgba(34,211,175,0.08)', boxShadow: '0 0 32px -8px rgba(34,211,175,0.5)' }
              : {};
            return (
              <div
                key={n.id}
                className="flow-node glass absolute"
                style={{
                  top: `${n.top}%`,
                  left: `${n.left}%`,
                  padding: '12px 16px',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  zIndex: 2,
                  animationDelay: `${n.delay}s`,
                  minWidth: 160,
                  ...highlight,
                }}
              >
                <span style={{ fontSize: 18 }}>{n.icon}</span>
                <span className="font-mono" style={{ fontSize: 12, letterSpacing: '0.04em', color: n.highlight ? 'var(--text)' : 'rgba(240,246,255,0.85)' }}>
                  {n.label}
                </span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

window.Automation = Automation;
