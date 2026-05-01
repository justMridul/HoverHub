import { Link } from "react-router-dom";

// ICONS (adjusted to your folder structure)
import GitHub from "../ui/icons/system/GitHub";
import HeartBeat from "../ui/icons/system/HeartBeat";
import Javascript from "../ui/icons/system/Javascript";
import Python from "../ui/icons/system/Python";
import Vercel from "../ui/icons/system/Vercel";
import Stack from "../ui/icons/system/Stack";
import Moon from "../ui/icons/system/Moon";
import Lock from "../ui/icons/system/Lock";
import Gear from "../ui/icons/system/Gear";
import MessageCircle from "../ui/icons/system/MessageCircle";
import Like from "../ui/icons/system/Like";
import Telegram from "../ui/icons/system/Telegram";

export default function Footer() {
  const featuredIcons = [
    GitHub,
    HeartBeat,
    Javascript,
    Python,
    Vercel,
    Stack,
    Moon,
    Lock,
    Gear,
    MessageCircle,
    Like,
    Telegram,
  ];

  return (
    <footer className="w-full border-t border-zinc-800 mt-20">
      
      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div>
          <h3 className="text-zinc-300 font-medium mb-6 text-lg">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-zinc-500">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <Link to="/components" className="hover:text-white transition">
              Components
            </Link>

            <Link to="/docs" className="hover:text-white transition">
              Docs
            </Link>

            <a
              href="https://github.com/justMridul/HoverHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-zinc-300 font-medium mb-6 text-lg">
            Featured Icons
          </h3>

          <div className="grid grid-cols-6 gap-4">
            {featuredIcons.map((Icon, index) => (
              <div
                key={index}
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-lg
                  border border-zinc-800
                  bg-zinc-900/50
                  hover:border-zinc-600
                  hover:bg-zinc-800/60
                  transition
                  hover:scale-110
                  cursor-pointer
                "
              >
                <Icon className="w-5 h-5 text-zinc-400 hover:text-orange-400 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        Built by{" "}
        <a
          href="https://github.com/justMridul"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white underline underline-offset-4 transition"
        >
          Mridul
        </a>
        <span className="mx-2 text-zinc-700">•</span>
        Source on{" "}
        <a
          href="https://github.com/justMridul/HoverHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white underline underline-offset-4 transition"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}