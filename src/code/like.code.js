const likeCode = `
import { motion, useAnimate } from "framer-motion";

export default function Like({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".like-icon", {
      scale: [1, 0.8, 1.2, 1],
      rotate: [0, 8, -5, 0],
      y: [0, 2, -2, 0],
    });
  };

  const stop = () => {
    animate(".like-icon", { scale: 1, rotate: 0, y: 0 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="like-icon">
        <path d="M7 11v8..." />
      </motion.g>
    </motion.svg>
  );
}
`;

export default likeCode;