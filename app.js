/* =========================================================
   Alfonso Zabaleta — Portfolio
   App JS: smooth scroll, reveals, projects from Supabase
   ========================================================= */

(() => {
  // ===================================================================
  // SUPABASE CONFIG — reemplazá con los valores de tu proyecto
  // ===================================================================
  const SUPABASE_URL = 'https://TU_PROYECTO.supabase.co';
  const SUPABASE_KEY = 'TU_ANON_KEY';
  // ===================================================================

  // ---------- Smooth scroll (lerp) ----------
  const content = document.querySelector("#smooth-content");
  let targetScroll = 0;
  let currentScroll = 0;
  const LERP = 0.085;

  function setBodyHeight() {
    document.body.style.height = content.getBoundingClientRect().height + "px";
  }
  setBodyHeight();
  new ResizeObserver(setBodyHeight).observe(content);
  window.addEventListener("load", setBodyHeight);
  window.addEventListener("scroll", () => { targetScroll = window.scrollY; }, { passive: true });

  function raf() {
    currentScroll += (targetScroll - currentScroll) * LERP;
    if (Math.abs(targetScroll - currentScroll) < 0.05) currentScroll = targetScroll;
    content.style.transform = `translate3d(0,${-currentScroll}px,0)`;

    document.querySelector(".nav")?.classList.toggle("scrolled", currentScroll > 30);

    parallaxItems.forEach(([el, speed]) => {
      const base = el.dataset._top !== undefined
        ? parseFloat(el.dataset._top)
        : (el.dataset._top = el.getBoundingClientRect().top + currentScroll, parseFloat(el.dataset._top));
      el.style.transform = `translate3d(0,${(currentScroll - base) * speed}px,0)`;
    });

    requestAnimationFrame(raf);
  }

  const parallaxItems = [];
  document.querySelectorAll("[data-parallax]").forEach(el => {
    parallaxItems.push([el, parseFloat(el.dataset.parallax) || 0.05]);
  });

  requestAnimationFrame(raf);

  // ---------- Anchor smooth scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + currentScroll - 90, behavior: "smooth" });
    });
  });

  // ---------- Reveal system ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      setTimeout(() => el.classList.add("in"), parseFloat(el.dataset.delay || 0));
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  function observeReveal(scope) {
    scope.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
  }
  observeReveal(document);

  // ---------- Hero word-by-word reveal ----------
  document.querySelectorAll(".heroline").forEach((line, lineIdx) => {
    const text = line.textContent;
    line.innerHTML = "";
    line.textContent.split; // noop
    text.split(/(\s+)/).forEach(w => {
      if (w.trim() === "") { line.appendChild(document.createTextNode(w)); return; }
      const s = document.createElement("span");
      s.className = "w";
      s.textContent = w;
      s.style.transitionDelay = (0.18 + lineIdx * 0.12) + "s";
      line.appendChild(s);
    });
  });

  document.querySelectorAll(".heroline .accent").forEach(a => {
    if (a.querySelector(".w")) return;
    const parts = a.textContent.split(/(\s+)/);
    a.innerHTML = "";
    parts.forEach(p => {
      if (p.trim() === "") { a.appendChild(document.createTextNode(p)); return; }
      const s = document.createElement("span");
      s.className = "w";
      s.textContent = p;
      a.appendChild(s);
    });
  });

  requestAnimationFrame(() => document.querySelector(".hero")?.classList.add("in"));

  // ---------- Number count-up ----------
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      (function step(t) {
        const e = Math.min(1, (t - start) / 1600);
        const eased = e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
        el.textContent = prefix + (target % 1 === 0 ? Math.round(target * eased) : (target * eased).toFixed(1)) + suffix;
        if (e < 1) requestAnimationFrame(step);
      })(start);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  // ---------- Magnetic cards ----------
  document.querySelectorAll(".fcard").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.12;
      const y = (e.clientY - r.top - r.height / 2) * 0.12;
      card.style.transform = `translate(${x}px,${y - 4}px) scale(1.04)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });

  // ---------- Projects: fetch from Supabase ----------
  const grid = document.getElementById("portfolio-grid");

  async function loadProjects() {
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/projects?select=*&visible=eq.true&order=order_index.asc`,
        { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
      );
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const projects = await res.json();
      if (!projects.length) throw new Error("empty");
      renderProjects(projects);
    } catch (err) {
      grid.innerHTML = `<p class="projects-error">No se pudieron cargar los proyectos.</p>`;
      console.error("Supabase:", err);
    }
  }

  function renderProjects(projects) {
    grid.innerHTML = projects.map((p, i) => `
      <div class="project" data-reveal data-delay="${i * 120}"
        data-id="${esc(p.id)}"
        data-title="${esc(p.title)}"
        data-type="${esc(p.type || '')}"
        data-tag="${esc(p.tag || '')}"
        data-desc="${esc(p.description || '')}"
        data-link="${esc(p.link || '')}"
        ${p.img ? `data-img="${esc(p.img)}"` : ""}
        tabindex="0" role="button" aria-label="Ver proyecto: ${esc(p.title)}">
        <div class="project-img">
          ${p.img
            ? `<img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy">`
            : `<div class="placeholder"><div><div class="ico">▢</div>${esc(p.title)}</div></div>`}
        </div>
        <div class="project-meta">
          <h4>${esc(p.title)}</h4>
          <p class="sub">${esc(p.type || '')}</p>
          ${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ""}
        </div>
      </div>
    `).join("");

    observeReveal(grid);
    setBodyHeight();
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  loadProjects();

  // ---------- Project detail overlay ----------
  const overlay     = document.getElementById("proj-overlay");
  const overlayTag   = document.getElementById("proj-tag");
  const overlayTitle = document.getElementById("proj-title");
  const overlayType  = document.getElementById("proj-type");
  const overlayDesc  = document.getElementById("proj-desc");
  const overlayLink  = document.getElementById("proj-link");
  const overlayVisual = document.getElementById("proj-visual");
  const overlayCrumb = document.getElementById("proj-overlay-crumb");
  const overlayClose = document.getElementById("proj-close");

  function openProject(card) {
    const { title, type, tag, desc, link, img } = card.dataset;
    overlayTag.textContent   = tag   || "";
    overlayTitle.textContent = title || "";
    overlayType.textContent  = type  || "";
    overlayDesc.textContent  = desc  || "";
    overlayCrumb.textContent = title || "";
    overlayLink.href         = (link && link !== "#") ? link : "#";
    overlayLink.style.display = (link && link !== "#") ? "" : "none";

    overlayVisual.innerHTML = img
      ? `<img src="${img}" alt="${title}">`
      : `<div class="placeholder"><div><div class="ico">▢</div>${title}</div></div>`;

    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    history.pushState({ project: card.dataset.id }, "", `#${card.dataset.id}`);
    overlayClose.focus();
  }

  function closeProject() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (location.hash) history.pushState(null, "", location.pathname);
  }

  // Event delegation — funciona aunque el grid se re-renderice
  grid.addEventListener("click", e => {
    const card = e.target.closest(".project");
    if (card) openProject(card);
  });
  grid.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".project");
      if (card) { e.preventDefault(); openProject(card); }
    }
  });

  overlayClose.addEventListener("click", closeProject);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeProject();
  });
  window.addEventListener("popstate", () => {
    if (overlay.classList.contains("open")) closeProject();
  });

  // ---------- Contact form ----------
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const btn = form.querySelector(".btn-primary");
      const original = btn.innerHTML;
      btn.innerHTML = "<span>¡Mensaje enviado!</span>";
      btn.style.background = "#1f6d75";
      setTimeout(() => { btn.innerHTML = original; btn.style.background = ""; form.reset(); }, 2400);
    });
  }
})();
