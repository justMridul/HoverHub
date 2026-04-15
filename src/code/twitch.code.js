const twitchCode = `
import { motion, useAnimate } from "framer-motion";

export default function BrandTwitch({
  size = 24,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".twitch-eyes", { scaleY: [1, 0, 1] });
  };

  const stop = () => {
    animate(".twitch-eyes", { scaleY: 1 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <motion.path className="twitch-path" d="M21 2H3v16..." />
      <motion.g className="twitch-eyes">
        <path d="M11 11V7" />
        <path d="M16 11V7" />
      </motion.g>
    </motion.svg>
  );
}
`;

export default twitchCode;