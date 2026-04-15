import { motion } from "framer-motion";
import { ArrowRight, Github, Star, Heart, Zap, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const floatingIcons = [
  { Icon: Github, x: "10%", y: "25%" },
  { Icon: Star, x: "80%", y: "30%" },
  { Icon: Heart, x: "20%", y: "75%" },
  { Icon: Zap, x: "70%", y: "70%" },
  { Icon: Send, x: "50%", y: "15%" },
];

export default function Hero() {
  const navigate = useNavigate();

  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full py-36 flex flex-col items-center text-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[140px] rounded-full -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.3 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2, opacity: 0.9 }}
          className="absolute pointer-events-auto cursor-pointer"
          style={{ left: x, top: y }}
        >
          <Icon className="w-16 h-16 md:w-20 md:h-20 text-zinc-500 hover:text-orange-400 transition" />
        </motion.div>
      ))}

      {/* 🔥 UPDATED HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative 
          text-4xl md:text-6xl lg:text-7xl
          font-semibold
          leading-tight
          tracking-tight
          text-zinc-100
        "
      >
        Design UI <br />

        <span
          className="
            bg-gradient-to-r from-orange-400 to-orange-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_12px_rgba(249,115,22,0.25)]
          "
        >
          That Feels Alive
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative mt-8 text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed"
      >
        A curated library of motion-powered UI components built with React and
        Framer Motion — ready to copy, paste, and ship.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="relative mt-10 flex gap-4 flex-wrap justify-center"
      >
        <button
          onClick={() => navigate("/components")}
          className="flex items-center gap-2 px-7 py-3 bg-orange-500 text-black rounded-xl font-medium hover:bg-orange-400 transition shadow-lg shadow-orange-500/20"
        >
          Explore Components
          <ArrowRight size={18} />
        </button>

        <button className="px-7 py-3 border border-zinc-700 rounded-xl text-zinc-300 hover:border-zinc-500 hover:text-white transition">
          View GitHub
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: showScroll ? 1 : 0,
          y: showScroll ? 0 : 20,
        }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-20 flex items-center gap-2 text-zinc-500 text-sm"
      >
        <span>Scroll</span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-orange-400"
        >
          ↓
        </motion.span>
      </motion.div>

    </section>
  );
}