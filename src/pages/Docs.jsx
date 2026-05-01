import { motion } from "framer-motion";

export default function Docs() {
  return (
    <div className="min-h-screen flex bg-[#0e0e11] text-zinc-100">

      {/* SIDEBAR */}
      <aside className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen">
        <h2 className="text-xs text-zinc-500 mb-6 uppercase tracking-widest">
          Documentation
        </h2>

        <nav className="flex flex-col gap-4 text-sm">
          <a href="#intro" className="text-zinc-400 hover:text-white transition">
            Introduction
          </a>
          <a href="#install" className="text-zinc-400 hover:text-white transition">
            Installation
          </a>
          <a href="#usage" className="text-zinc-400 hover:text-white transition">
            Usage
          </a>
          <a href="#how" className="text-zinc-400 hover:text-white transition">
            How it works
          </a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 px-6 md:px-16 py-20 max-w-4xl mx-auto">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-white mb-6"
        >
          Documentation
        </motion.h1>

        {/* INTRO */}
        <section id="intro" className="mb-16">
          <p className="text-zinc-400 leading-relaxed">
            HoverHub is a curated collection of modern, motion-powered UI components 
            built with React and Framer Motion. Copy, customize, and ship interactive 
            UI faster without reinventing animations from scratch.
          </p>
        </section>

        {/* INSTALLATION */}
        <section id="install" className="mb-16">
          <h2 className="text-2xl font-medium text-white mb-4">
            Installation
          </h2>

          <div className="space-y-4">
            <p className="text-zinc-400 text-sm">
              Make sure you have a React project set up. Then install Framer Motion:
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-300">
              npm install framer-motion
            </div>

            <p className="text-zinc-500 text-xs">
              HoverHub components are copy-paste based — no additional package required.
            </p>
          </div>
        </section>

        {/* USAGE */}
        <section id="usage" className="mb-16">
          <h2 className="text-2xl font-medium text-white mb-4">
            Usage
          </h2>

          <div className="space-y-4">
            <p className="text-zinc-400 text-sm">
              Import the component and use it directly in your JSX:
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-300 whitespace-pre-wrap">
{`import MagneticButton from "@/components/ui/buttons/MagneticButton";

export default function App() {
  return (
    <MagneticButton>
      Click Me
    </MagneticButton>
  );
}`}
            </div>

            <p className="text-zinc-500 text-xs">
              You can customize styles using Tailwind classes or modify the animation inside the component.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how">
          <h2 className="text-2xl font-medium text-white mb-4">
            How it works
          </h2>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Each component is built using Framer Motion and Tailwind CSS. 
            Instead of installing a package, you copy the component code 
            and integrate it directly into your project, giving you full control 
            over styling and behavior.
          </p>
        </section>

      </main>
    </div>
  );
}