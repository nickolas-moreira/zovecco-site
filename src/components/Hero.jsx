import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        padding: "0 16px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 16px",
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {/* content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>Zovecco Remodeling</h1>
        <p>High Quality Craftsmanship • Free Estimates</p>

        <button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Free Estimate
        </button>
      </div>
    </section>
  );
}

export default Hero;