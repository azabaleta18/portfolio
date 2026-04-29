// Hero: video de fondo en loop ping-pong, fallback gradiente, overlay oscuro.
function Hero({ heroVideoSrc }) {
  const videoRef = React.useRef(null);
  const [loaded, setLoaded] = React.useState(false);
  const [reverse, setReverse] = React.useState(false);

  // Ping-pong: al terminar, invertir playbackRate
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let raf;
    const onMeta = () => setLoaded(true);
    v.addEventListener('loadeddata', onMeta);

    // ping-pong manual: cuando llega cerca del final, reversar; cuando llega a 0, normalizar
    const tick = () => {
      if (v && v.duration) {
        if (!reverse && v.currentTime >= v.duration - 0.05) {
          setReverse(true);
        } else if (reverse) {
          v.currentTime = Math.max(0, v.currentTime - 0.033);
          if (v.currentTime <= 0.05) {
            setReverse(false);
            v.play().catch(() => {});
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      v.removeEventListener('loadeddata', onMeta);
      cancelAnimationFrame(raf);
    };
  }, [reverse]);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reverse) v.pause();
    else v.play().catch(() => {});
  }, [reverse]);

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* fallback gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, #102030 0%, #050A14 60%, #02060C 100%)',
          opacity: loaded ? 0 : 1,
          transition: 'opacity 0.8s ease',
          zIndex: 0,
        }}
      />
      {/* video */}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: 'cover',
          opacity: loaded ? 0.55 : 0,
          transition: 'opacity 1.2s ease',
          zIndex: 0,
        }}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      {/* dark overlay + vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,10,20,0.65) 0%, rgba(5,10,20,0.45) 40%, rgba(5,10,20,0.95) 100%)',
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(5,10,20,0.6) 90%)',
          zIndex: 1,
        }}
      />

      {/* content */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-12 w-full text-center" style={{ zIndex: 2, paddingTop: 120, paddingBottom: 60 }}>
        <Reveal delay={0} className="inline-flex items-center gap-3 glass" style={{
          padding: '8px 16px', borderRadius: 999, marginBottom: 36,
        }}>
          <span className="dot-pulse" />
          <span className="font-mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,246,255,0.85)' }}>
            Disponible para nuevos proyectos
          </span>
        </Reveal>

        <Reveal delay={0.1} as="h1" className="font-serif" style={{
          fontSize: 'clamp(56px, 8vw, 120px)',
          fontWeight: 700,
          lineHeight: 0.96,
          letterSpacing: '-0.025em',
          marginBottom: 32,
        }}>
          <span style={{ display: 'block' }}>Diseño que convierte.</span>
          <span style={{ display: 'block', fontStyle: 'italic', color: 'rgba(240,246,255,0.78)' }}>Sistemas que trabajan solos.</span>
        </Reveal>

        <Reveal delay={0.2} as="p" className="mx-auto" style={{
          maxWidth: 560,
          fontSize: 17,
          lineHeight: 1.6,
          color: 'var(--muted)',
          marginBottom: 44,
        }}>
          Diseño y desarrollo páginas web que venden, y construyo flujos de automatización con IA
          para que tu negocio funcione sin que tengas que estar encima.
        </Reveal>

        <Reveal delay={0.3} className="flex flex-wrap items-center justify-center gap-4" style={{ marginBottom: 80 }}>
          <a href="#contact" className="btn-primary">
            Empezar un proyecto
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#projects" className="btn-ghost">
            Ver proyectos
          </a>
        </Reveal>

        <Reveal delay={0.45} className="grid grid-cols-3 gap-6 max-w-2xl mx-auto" style={{ paddingTop: 36, borderTop: '1px solid var(--border)' }}>
          {[
            { n: '20+', l: 'Proyectos' },
            { n: '100%', l: 'Satisfacción' },
            { n: '3×', l: 'ROI promedio' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif" style={{ fontSize: 44, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.n}</div>
              <div className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>
                {s.l}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="absolute left-1/2" style={{ bottom: 32, transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div className="scroll-line" />
        <span className="font-mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
