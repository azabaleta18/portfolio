// Marquee horizontal infinito con pausa en hover.
function Marquee() {
  const items = [
    'Diseño Web',
    'Automatización IA',
    'Agentes IA',
    'Landing Pages',
    'Make / n8n / Zapier',
    'Chatbots',
    'Dashboards',
    'UI / UX',
  ];
  // duplicar para loop seamless
  const all = [...items, ...items];
  return (
    <section className="relative marquee-wrap" style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="overflow-hidden">
        <div className="marquee-track flex items-center gap-3 whitespace-nowrap" style={{ width: 'max-content' }}>
          {all.map((it, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 font-mono" style={{
              padding: '10px 22px',
              border: '1px solid var(--border)',
              borderRadius: 999,
              fontSize: 13,
              letterSpacing: '0.04em',
              color: 'rgba(240,246,255,0.85)',
              background: 'rgba(13,31,45,0.4)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Marquee = Marquee;
