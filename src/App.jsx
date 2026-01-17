import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import WhyCalmcorner from "./pages/WhyCalmcorner";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/whycalmcorner" element={<WhyCalmcorner />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>

  );
}

export default App;
