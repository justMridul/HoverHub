const moonCode = `
import { motion, useAnimate } from "framer-motion";

export default function Moon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".moon", {
      rotate: [0, -15, 0],
      scale: [1, 1.1, 1],
    });
  };

  const stop = () => {
    animate(".moon", { rotate: 0, scale: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.path
        className="moon"
        d="M12 3c.132 0 .263 0 .393 0..."
      />
    </motion.svg>
  );
}
`;

export default moonCode;