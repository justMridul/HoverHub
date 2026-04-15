import { motion } from "framer-motion";

export default function ComponentsHero() {
  return (
    <section className="relative w-full pt-32 pb-16 px-6 flex flex-col items-center text-center overflow-hidden">

      {/* background lighting */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_40%)]" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-hero text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1]"
      >
        <span className="text-zinc-300">
          static components
        </span>

        <br />

        <span className="text-orange-500">
          feel boring now
        </span>
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 max-w-xl font-hero text-base text-zinc-400 leading-relaxed"
      >
        A collection of smooth, modern motion-based UI components
        built with React and Framer Motion. Copy and paste directly
        into your project.
      </motion.p>

    </section>
  );
}