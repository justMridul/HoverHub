const toggleCode = `
import { motion, useAnimate } from "framer-motion";

export default function Toggle({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".toggle-knob", { x: [0, 12] });
  };

  const stop = () => {
    animate(".toggle-knob", { x: 0 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.path className="toggle-track" d="m10,7h12..." />
      <motion.circle className="toggle-knob" cx="10" cy="16" r="5" />
    </motion.svg>
  );
}
`;

export default toggleCode;