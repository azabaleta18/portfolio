function App() {
  return (
    <>
      <CustomCursor />
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero heroVideoSrc="src/assets/heroVideoSrc.mp4" />
        <Marquee />
        <Services />
        <Projects />
        <Automation />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
