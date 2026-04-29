// Contact: 2 cols. Izq: links. Der: form.
function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ nombre: '', email: '', mensaje: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  const links = [
    { icon: '✉️', label: 'Email', value: 'hola@alfonsozabaleta.com', href: 'mailto:hola@alfonsozabaleta.com' },
    { icon: '💬', label: 'WhatsApp', value: '+598 99 123 456', href: '#' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/azabaleta', href: '#' },
  ];

  return (
    <section id="contact" className="relative" style={{ padding: '140px 32px' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <Reveal>
          <div className="label-mono" style={{ marginBottom: 16 }}>— Contacto</div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 28 }}>
            Hagamos algo <em style={{ color: 'rgba(240,246,255,0.7)' }}>juntos</em>.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
            Contame qué necesitás. Si calza con lo que hago, te respondo en menos de 24 horas con una propuesta concreta.
          </p>
          <div className="flex flex-col gap-3">
            {links.map((l, i) => (
              <Reveal key={l.label} delay={0.1 + i * 0.08}>
                <a href={l.href} className="link-row">
                  <span style={{ fontSize: 20 }}>{l.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>{l.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{l.value}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--muted)' }}>
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="glass" style={{ padding: 36, borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <label className="field-label">Nombre</label>
              <input type="text" placeholder="Cómo te llamás" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
            </div>
            <div>
              <label className="field-label">Email</label>
              <input type="email" placeholder="tu@correo.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="field-label">Mensaje</label>
              <textarea placeholder="Contame el proyecto, el problema o el plazo" required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
            </div>
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
              {submitted ? '✓ Mensaje enviado' : 'Enviar mensaje'}
              {!submitted && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

window.Contact = Contact;
