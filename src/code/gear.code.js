const gearCode = `
import { motion, useAnimate } from "framer-motion";

export default function Gear({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = () => {
    animate(".gear-body", { scale: [1, 1.02, 1] }, { duration: 0.6 });
    animate(".gear-center", { scale: [1, 1.1, 1] }, { duration: 0.3 });
    animate(".gear-rotator", { rotate: 360 }, { duration: 0.9 });
  };

  const stop = () => {
    animate(".gear-rotator", { rotate: 0 });
    animate(".gear-center", { scale: 1 });
    animate(".gear-body", { scale: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="gear-rotator">
        <motion.circle className="gear-center" cx="16" cy="16" r="5" />
        <motion.path className="gear-body" d="m30,17.5v-3l-3.388..." />
      </motion.g>
    </motion.svg>
  );
}
`;

export default gearCode;