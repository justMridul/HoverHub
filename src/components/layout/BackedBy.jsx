import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function BackedBy() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28 relative">

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.08),transparent_50%)]" />

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Built With
        </h2>
        <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
          Powered by modern tools and technologies that make development fast and smooth.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Vercel */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="group relative rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 flex gap-6 items-center overflow-hidden"
        >
          {/* hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-500/10 to-transparent" />

          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-lg border border-zinc-800 relative z-10">
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-white" />
          </div>

          <div className="relative z-10">
            <h3 className="text-white font-medium text-lg">Vercel</h3>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Lightning-fast deployment and hosting for modern web applications.
            </p>
          </div>
        </motion.div>

        {/* Open Source */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="group relative rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6 flex gap-6 items-center overflow-hidden"
        >
          {/* hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-white/10 to-transparent" />

          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-lg border border-zinc-800 relative z-10">
            <Github className="text-white w-8 h-8" />
          </div>

          <div className="relative z-10">
            <h3 className="text-white font-medium text-lg">Open Source</h3>
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              Built using open-source tools and designed for developers worldwide.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}