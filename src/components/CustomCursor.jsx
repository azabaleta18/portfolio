// Cursor personalizado: dot 8px + ring 40px, ring se agranda en hover sobre interactivos.
const { useEffect: useEffectCursor, useState: useStateCursor } = React;

function CustomCursor() {
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);

  useEffectCursor(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const handleOver = (e) => {
      const t = e.target;
      if (t.closest('a, button, [data-hover], input, textarea, .proj-card')) {
        ring.classList.add('hover');
        dot.classList.add('hover');
      }
    };
    const handleOut = (e) => {
      const t = e.target;
      if (t.closest('a, button, [data-hover], input, textarea, .proj-card')) {
        ring.classList.remove('hover');
        dot.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

window.CustomCursor = CustomCursor;
