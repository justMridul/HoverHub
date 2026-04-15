const telegramCode = `
import { motion, useAnimate } from "framer-motion";

export default function BrandTelegram({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".plane", {
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      opacity: [1, 0, 0, 1],
    });
  };

  const stop = () => {
    animate(".plane", { x: 0, y: 0, opacity: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.path
        className="plane"
        d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
      />
    </motion.svg>
  );
}
`;

export default telegramCode;