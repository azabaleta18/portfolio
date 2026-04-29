// useInViewAnimation: añade clase "in-view" cuando el elemento entra en viewport.
// Se ejecuta una vez (triggers once) con threshold 0.1.
const { useEffect, useRef } = React;

function useInViewAnimation(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// Helper component para envolver bloques con fadeInUp y delay.
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useInViewAnimation(0.1);
  const style = { ...(rest.style || {}), '--delay': `${delay}s` };
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest} style={style}>
      {children}
    </Tag>
  );
}

window.useInViewAnimation = useInViewAnimation;
window.Reveal = Reveal;
