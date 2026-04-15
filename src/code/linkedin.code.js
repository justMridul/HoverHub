const linkedinCode = `
import { motion, useAnimate } from "framer-motion";

export default function Linkedin({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".border", { scale: [1, 1.05, 1] });
    await animate(".lines", { pathLength: [0, 1] });
  };

  const stop = () => {
    animate(".lines", { pathLength: 1 });
    animate(".border", { scale: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.path className="lines" d="M8 11v5" />
      <motion.path className="border" d="M3 7a4 4 0 0 1 4 -4..." />
    </motion.svg>
  );
}
`;

export default linkedinCode;