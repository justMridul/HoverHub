const lockCode = `
import { motion, useAnimate } from "framer-motion";

export default function Lock({
  size = 48,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".lock-upper-body", {
      rotate: 40,
      y: -1.7,
      x: 3,
    });
  };

  const stop = async () => {
    await animate(".lock-upper-body", {
      rotate: 0,
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <path d="M5 13a2 2 0 0 1 2 -2h10..." />
      <motion.path className="lock-upper-body" d="M8 11v-4..." />
    </motion.svg>
  );
}
`;

export default lockCode;