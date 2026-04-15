import { motion } from "framer-motion";

// 👉 import your existing components
import MagneticButton from "../ui/buttons/MagneticButton";
import RippleButton from "../ui/buttons/RippleButton";
import ExpandButton from "../ui/buttons/ExpandButton";

export default function Preview() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          See It In Action
        </h2>

        <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
          Explore interactive components designed to elevate your UI.
        </p>
      </div>

      {/* Preview Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur flex items-center justify-center h-40"
        >
          <MagneticButton />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur flex items-center justify-center h-40"
        >
          <RippleButton />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur flex items-center justify-center h-40"
        >
          <ExpandButton />
        </motion.div>

      </div>

    </section>
  );
}