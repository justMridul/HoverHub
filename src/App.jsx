import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Components from "./pages/Components";

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
