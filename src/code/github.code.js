const githubCode = `
import { motion, useAnimate } from "framer-motion";

export default function Github({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".github-icon", {
      scale: [1, 1.1, 1],
      rotate: [0, -5, 5, 0],
    });
  };

  const stop = () => {
    animate(".github-icon", { scale: 1, rotate: 0 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="github-icon">
        <path d="M9 19c-4.3 1.4..." />
      </motion.g>
    </motion.svg>
  );
}
`;

export default githubCode;