import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CustomBuilds from "./components/CustomBuilds";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Hero />
          <Services />
          <Contact />
        </>
      )}

      {page === "custom" && <CustomBuilds />}
    </div>
  );
}

export default App;