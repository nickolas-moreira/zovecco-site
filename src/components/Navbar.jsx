import logo from "../assets/zovecco_logo_Zwhite.png";

function Navbar({ setPage }) {
  const buttonStyle = {
    all: "unset",
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: "60px",
    padding: "0 8px",
    transition: "0.2s ease",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        background: "#212529",
        color: "white",
        height: "80px",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="Zovecco Logo"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        style={{
          height: "80px",
          cursor: "pointer",
          objectFit: "contain",
        }}
      />

      {/* NAV BUTTONS */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <button
          style={buttonStyle}
          onClick={() => {
            setPage("home");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 0);
          }}
        >
          Home
        </button>

        <button
          style={buttonStyle}
          onClick={() => {
            setPage("home");

            setTimeout(() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 0);
          }}
        >
          Our Services
        </button>

        <button
          style={buttonStyle}
          onClick={() => setPage("custom")}
        >
          Custom Builds
        </button>
      </div>
    </nav>
  );
}

export default Navbar;