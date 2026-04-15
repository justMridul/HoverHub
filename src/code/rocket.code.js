const rocketCode = `
import { motion, useAnimate } from "framer-motion";

export default function Rocket({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".rocket-upper", { x: [0, 40], y: [0, -40] });
    animate(".rocket-flame", { scale: [0.8, 1.2] });
  };

  const stop = () => {
    animate(".rocket-upper", { x: 0, y: 0 });
    animate(".rocket-flame", { scale: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.path className="rocket-upper" d="..." />
      <motion.path className="rocket-flame" d="..." />
    </motion.svg>
  );
}
`;

export default rocketCode;