import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import Preview from "../components/layout/Preview";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0e0e11] text-zinc-100 overflow-hidden">

      {/* subtle warm background lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(249,115,22,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.04),transparent_40%)]" />

      <Navbar />
      <Hero />

      {/* 🔥 ADD THIS */}
      <Features />
      <Preview />

    </div>
  );
}