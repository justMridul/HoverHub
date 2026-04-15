const reactIconCode = `
import { motion, useAnimate } from "framer-motion";

export default function ReactIcon({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".orbit-1", { rotate: 360 });
    animate(".orbit-2", { rotate: -360 });
    animate(".orbit-3", { rotate: 360 });
  };

  const stop = () => {
    animate(".orbit-1", { rotate: 0 });
    animate(".orbit-2", { rotate: 0 });
    animate(".orbit-3", { rotate: 0 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="orbit-1" />
      <motion.g className="orbit-2" />
      <motion.g className="orbit-3" />
      <motion.path className="center-dot" />
    </motion.svg>
  );
}
`;

export default reactIconCode;