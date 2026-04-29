# Alfonso Zabaleta — Portfolio & Studio

Landing page personal de Alfonso Zabaleta: diseñador web y especialista en automatización con IA.

---

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- lucide-react

---

## Fuentes

- **Fraunces** — display/títulos (Google Fonts)
- **Inter** — body (Google Fonts)
- **JetBrains Mono** — labels y tags (Google Fonts)

---

## Estructura

src/
├── App.tsx
├── index.css
├── hooks/
│   └── useInViewAnimation.ts
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Marquee.tsx
    ├── Services.tsx
    ├── Projects.tsx
    ├── Automation.tsx
    ├── Testimonials.tsx
    ├── Pricing.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── BottomNav.tsx

---

## Cómo correr el proyecto

npm install
npm run dev
npm run build

---

## Video hero

Colocá tu video exportado en:
public/hero.mp4

Y en App.tsx:
<Hero heroVideoSrc="/hero.mp4" />

El video debe ser:
- Formato: .mp4
- Duración: 7 segundos
- Loop: ping-pong (exportado desde Seedance/Higgsfield)
- Sin audio
- Resolución mínima: 1920x1080

---

## Agregar proyectos

Los proyectos están en src/components/Projects.tsx como un array:

const projects = [
  {
    id: 1,
    name: "Nombre del proyecto",
    type: "Diseño Web",
    cat: "web",
    desc: "Descripción breve",
    link: "https://...",
    media: "/projects/img.gif"
  },
]

Para agregar uno nuevo: copiás un objeto, completás los campos y agregás la imagen/gif en public/projects/.

---

## Agregar imágenes de proyectos

Guardá las imágenes o GIFs en:

public/
└── projects/
    ├── boutique.gif
    ├── chatbot.png
    └── ...

Formatos recomendados:
- GIF para demos animadas de la web
- MP4 para videos
- WebP para screenshots estáticos

---

## Deploy

Vercel (recomendado):
npm install -g vercel
vercel

Netlify:
npm run build
Subís la carpeta /dist a netlify.com

---

## Personalización rápida

Colores         → src/index.css (variables CSS)
Email/WhatsApp  → src/components/Contact.tsx
Precios         → src/components/Pricing.tsx
Testimonios     → src/components/Testimonials.tsx
Proyectos       → src/components/Projects.tsx

---

## Contacto

- Email: tu@email.com
- WhatsApp: +598 XX XXX XXX
- LinkedIn: linkedin.com/in/alfonsozabaleta

---

Alfonso Zabaleta · Montevideo, Uruguay · 2025