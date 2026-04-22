function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM CLICKED 🔥");

    await fetch("http://localhost:5001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        contact: e.target.contact.value,
        message: e.target.message.value,
      }),
    });

    alert("Message sent 🔥");
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 16px",
        background: "#212529",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>
        Get Your Free Estimate
      </h2>

      <p style={{ marginBottom: "25px", maxWidth: "500px" }}>
        Call us directly or send a quick message and we’ll get back to you.
      </p>

      {/* buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <button
          style={{ flex: "1", minWidth: "140px" }}
          onClick={() => (window.location.href = "tel:9802142129")}
        >
          Call Now
        </button>

        <button
          style={{ flex: "1", minWidth: "140px" }}
          onClick={() =>
            document
              .getElementById("quote-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get a Quote
        </button>
      </div>

      {/* form */}
      <form
        id="quote-form"
        onSubmit={handleSubmit}
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          style={{ padding: "12px", borderRadius: "6px", border: "none" }}
        />

        <input
          name="contact"
          placeholder="Phone or Email"
          style={{ padding: "12px", borderRadius: "6px", border: "none" }}
        />

        <textarea
          name="message"
          placeholder="Project details..."
          rows="4"
          style={{ padding: "12px", borderRadius: "6px", border: "none" }}
        />

        <button type="submit" style={{ width: "100%" }}>
          Submit Request
        </button>
      </form>
    </section>
  );
}

export default Contact;