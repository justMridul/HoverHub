const rupeeCode = `
import { motion, useAnimate } from "framer-motion";

export default function Rupee({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".rupee-main, .rupee-line", { pathLength: 0, opacity: 0 }, { duration: 0 });
    await animate(".rupee-line", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
    await animate(".rupee-main", { pathLength: 1, opacity: 1 }, { duration: 0.35 });
  };

  const stop = () => {
    animate(".rupee-main, .rupee-line", { pathLength: 1, opacity: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="rupee-symbol">
        <motion.path className="rupee-main" d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
        <motion.path className="rupee-line" d="M7 9h11" />
      </motion.g>
    </motion.svg>
  );
}
`;

export default rupeeCode;