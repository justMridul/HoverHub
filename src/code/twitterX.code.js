const twitterXCode = `
import { motion, useAnimate } from "framer-motion";

export default function TwitterX({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".x-icon", {
      scale: [1, 1.1, 1],
      rotate: [0, -10, 10, 0],
    });
  };

  const stop = () => {
    animate(".x-icon", { scale: 1, rotate: 0 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="x-icon">
        <path d="M4 4l11.733 16h4.267..." />
      </motion.g>
    </motion.svg>
  );
}
`;

export default twitterXCode;