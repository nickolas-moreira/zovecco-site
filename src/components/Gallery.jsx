import kitchen from "../assets/flooring1.jpg";
import bathroom from "../assets/living_room.jpg";
import flooring from "../assets/flooring3.jpg";
import trim from "../assets/carpet_wood.jpg";

function Gallery() {
  const images = [kitchen, bathroom, flooring, trim];

  return (
    <section>
      <h2>Our Work</h2>
      <p>Recent remodeling projects by Zovecco</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="project"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;