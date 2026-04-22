import kitchen from "../assets/flooring1.jpg";
import bathroom from "../assets/living_room.jpg";
import flooring from "../assets/flooring3.jpg";
import trim from "../assets/carpet_wood.jpg";

function Services() {
  return (
    <section id="services">
      <h2>Our Services & Work</h2>

      {/* Services */}
      <div
        style={{
          maxWidth: "900px",
          margin: "20px auto 40px",
          lineHeight: "2",
        }}
      >
        <p>Kitchen Remodeling</p>
        <p>Bathroom Renovations</p>
        <p>Flooring Installation</p>
        <p>Trim & Custom Woodwork</p>
        <p>Interior Painting</p>
      </div>

      {/* Work */}
      <h2>Our Work</h2>
      <p>Recent remodeling projects by Zovecco</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {[kitchen, bathroom, flooring, trim].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="work"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;