import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <nav className="w-full px-10 py-6 flex items-center justify-between border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <Logo />
      </Link>

      {/* Navigation */}
     <div className="flex gap-8 text-zinc-400 text-sm">

  <Link to="/components" className="hover:text-white transition-colors">
    Components
  </Link>

  <Link to="/docs" className="hover:text-white transition-colors">
    Docs
  </Link>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    GitHub
  </a>

</div>
    </nav>
  );
}