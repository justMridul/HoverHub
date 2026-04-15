const wifiOffCode = `
import { motion, useAnimate } from "framer-motion";

export default function WifiOff({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".slash-line", { pathLength: [0, 1] });
    animate(".wifi-waves", { opacity: [1, 0.5, 1] });
  };

  const stop = () => {
    animate(".slash-line", { pathLength: 1 });
    animate(".wifi-waves", { opacity: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.g className="wifi-waves">
        <path d="M12 18l.01 0" />
      </motion.g>
      <motion.path className="slash-line" d="M3 3l18 18" />
    </motion.svg>
  );
}
`;

export default wifiOffCode;