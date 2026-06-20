import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./reusable_components/Navbar";
import Footer from "./reusable_components/Footer";

import Home from "./pages/Home";
import Research from "./pages/Research/Research";
import Resources from "./pages/Resources";
import UCMPPaleobotany from "./pages/UCMP";
import ScrollToTop from "./reusable_components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ucmp" element={<UCMPPaleobotany />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;
