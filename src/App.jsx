import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Components from "./pages/Components";
import Docs from "./pages/Docs"; 

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/docs" element={<Docs />} /> {/* ✅ ADD THIS */}
      </Routes>
    </div>
  );
}

export default App;