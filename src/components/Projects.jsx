// Projects: header + filtros + grid asimétrico (12 cols).
function Projects() {
  const [filter, setFilter] = React.useState('all');
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Diseño Web' },
    { id: 'ia', label: 'IA & Automatización' },
  ];

  // span + rowSpan basados en CSS grid
  const projects = [
    { id: 1, type: 'web', label: 'E-commerce', name: 'Boutique Online', desc: 'E-commerce con +240% conversiones',
      span: 8, h: 420, accent: 'cyan' },
    { id: 2, type: 'ia', label: 'Agente IA', name: 'Asistente IA 24/7', desc: 'Chatbot que atiende 300 consultas/mes',
      span: 4, h: 420, accent: 'purple' },
    { id: 3, type: 'web', label: 'Dashboard', name: 'Panel Analytics', desc: 'Dashboard SaaS tiempo real',
      span: 6, h: 320, accent: 'cyan' },
    { id: 4, type: 'ia', label: 'Workflow', name: 'Flujos de Negocio', desc: 'Automatización retail –12h/semana',
      span: 6, h: 320, accent: 'teal' },
    { id: 5, type: 'web', label: 'Landing', name: 'Landing Page Pro', desc: 'CRO optimizada · 8.4% conversión',
      span: 8, h: 360, accent: 'cyan' },
    { id: 6, type: 'ia', label: 'CRM', name: 'CRM Personalizado', desc: '500+ contactos gestionados auto',
      span: 4, h: 360, accent: 'purple' },
  ];

  const visible = (p) => filter === 'all' || p.type === filter;

  return (
    <section id="projects" className="relative" style={{ padding: '140px 32px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="label-mono" style={{ marginBottom: 16 }}>— Proyectos seleccionados</div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Trabajos <em style={{ color: 'rgba(240,246,255,0.7)' }}>recientes</em>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="font-mono"
                style={{
                  padding: '10px 18px',
                  borderRadius: 999,
                  fontSize: 12,
                  letterSpacing: '0.05em',
                  border: filter === f.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: filter === f.id ? 'rgba(0,212,255,0.12)' : 'transparent',
                  color: filter === f.id ? 'var(--accent)' : 'rgba(240,246,255,0.7)',
                  transition: 'all 0.25s ease',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={0.05 + i * 0.07}
              className={`proj-card ${visible(p) ? '' : 'hidden-filter'}`}
              style={{
                gridColumn: `span ${p.span}`,
              }}
            >
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const accentColors = {
    cyan: '#00D4FF',
    purple: '#9B51E0',
    teal: '#22D3AF',
  };
  return (
    <a href="#" className="proj-card glass block" style={{
      padding: 14,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      gap: 16,
      transition: 'border-color 0.35s ease, transform 0.35s ease',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      <div className="proj-media media-stripes" style={{ height: p.h - 100, minHeight: 180 }}>
        <div className="placeholder absolute inset-0 flex items-center justify-center">
          <ProjectVisual project={p} accent={accentColors[p.accent]} />
        </div>
        <div className="overlay">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 16px', borderRadius: 999,
            background: 'var(--accent)', color: 'var(--dark)',
            fontWeight: 600, fontSize: 13,
          }}>
            Ver caso
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M9 7h8v8"/></svg>
          </div>
        </div>
      </div>
      <div style={{ padding: '4px 10px 10px' }}>
        <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
          {p.label}
        </div>
        <h3 className="font-serif" style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: 6 }}>
          {p.name}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.55 }}>{p.desc}</p>
      </div>
    </a>
  );
}

// Mini visual mock por tipo de proyecto (placeholder, no asset real)
function ProjectVisual({ project, accent }) {
  const t = project.type === 'ia' ? 'ia' : 'web';
  if (project.label === 'E-commerce') {
    return (
      <div style={{ width: '85%', maxWidth: 420 }}>
        <div className="glass" style={{ padding: 12, borderRadius: 12, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[0,1,2,3,4,5].map(i => (
            <div key={i} style={{ aspectRatio: '1/1.2', borderRadius: 8, background: `linear-gradient(135deg, rgba(0,212,255,${0.06 + (i%3)*0.04}) 0%, rgba(13,31,45,0.9) 100%)`, border: '1px solid var(--border)' }} />
          ))}
        </div>
      </div>
    );
  }
  if (project.label === 'Dashboard') {
    return (
      <div style={{ width: '85%', maxWidth: 380, padding: 14, borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className="flex justify-between items-end" style={{ height: 80, gap: 6 }}>
          {[40, 65, 35, 80, 55, 90, 72, 60, 85].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(180deg, ${accent} 0%, rgba(0,212,255,0.2) 100%)`, borderRadius: 3 }} />
          ))}
        </div>
        <div style={{ marginTop: 14, height: 1, background: 'var(--border)' }} />
        <div className="flex gap-2 mt-3">
          <div style={{ width: 50, height: 6, background: 'rgba(0,212,255,0.5)', borderRadius: 2 }} />
          <div style={{ width: 30, height: 6, background: 'var(--border)', borderRadius: 2 }} />
        </div>
      </div>
    );
  }
  if (project.label === 'Landing') {
    return (
      <div style={{ width: '85%', maxWidth: 420, padding: 18, borderRadius: 12, background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div style={{ width: 60, height: 8, background: accent, borderRadius: 2, marginBottom: 12 }} />
        <div style={{ width: '90%', height: 18, background: 'rgba(240,246,255,0.5)', borderRadius: 3, marginBottom: 8 }} />
        <div style={{ width: '70%', height: 18, background: 'rgba(240,246,255,0.3)', borderRadius: 3, marginBottom: 16 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 80, height: 24, background: accent, borderRadius: 999 }} />
          <div style={{ width: 80, height: 24, border: '1px solid var(--border)', borderRadius: 999 }} />
        </div>
      </div>
    );
  }
  if (project.label === 'Agente IA' || project.label === 'CRM') {
    return (
      <div style={{ width: '85%', maxWidth: 280 }}>
        <div className="glass" style={{ padding: 12, borderRadius: 12, marginBottom: 8, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: accent, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🤖</div>
          <div style={{ flex: 1 }}>
            <div style={{ height: 6, background: 'rgba(240,246,255,0.6)', borderRadius: 2, marginBottom: 4, width: '80%' }} />
            <div style={{ height: 6, background: 'rgba(240,246,255,0.3)', borderRadius: 2, width: '60%' }} />
          </div>
        </div>
        <div className="glass" style={{ padding: 12, borderRadius: 12, marginLeft: 32, background: `${accent}20`, border: `1px solid ${accent}55` }}>
          <div style={{ height: 6, background: 'rgba(240,246,255,0.6)', borderRadius: 2, marginBottom: 4, width: '70%' }} />
          <div style={{ height: 6, background: 'rgba(240,246,255,0.3)', borderRadius: 2, width: '50%' }} />
        </div>
      </div>
    );
  }
  if (project.label === 'Workflow') {
    return (
      <div style={{ width: '85%', maxWidth: 380, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {['📥', '⚙️', '🤖', '✅'].map((emo, i, arr) => (
          <React.Fragment key={i}>
            <div className="glass" style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{emo}</div>
            {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, var(--border), ${accent}, var(--border))`, margin: '0 4px' }} />}
          </React.Fragment>
        ))}
      </div>
    );
  }
  return <div style={{ width: 60, height: 60, background: accent, borderRadius: 12 }} />;
}

window.Projects = Projects;
