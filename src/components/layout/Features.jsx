import { motion } from "framer-motion";
import { Code, Sparkles, Copy } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Beautiful Animations",
    desc: "Carefully crafted motion components designed to enhance user experience.",
  },
  {
    icon: Copy,
    title: "Copy & Use Instantly",
    desc: "All components come with clean, ready-to-use code you can copy in one click.",
  },
  {
    icon: Code,
    title: "Built for Developers",
    desc: "Simple, customizable, and built with React + Framer Motion.",
  },
];

export default function Features() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-32">

      {/* 🔥 Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Why HoverHub?
        </h2>

        <p className="text-zinc-500 mt-4 max-w-xl mx-auto leading-relaxed">
          Everything you need to build smooth, modern UI — without wasting time.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="
                group
                p-6
                rounded-xl
                border border-zinc-800
                bg-zinc-900/60
                backdrop-blur
                transition
              "
            >
              {/* Icon */}
              <Icon className="w-6 h-6 text-orange-500 mb-4 group-hover:scale-110 transition" />

              {/* Title */}
              <h3 className="text-lg font-medium text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* 🔥 Bottom accent line */}
              <div className="mt-4 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}