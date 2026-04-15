const messageCircleCode = `
import { motion, useAnimate } from "framer-motion";

export default function MessageCircle({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".message-path", { pathLength: 0, opacity: 0 }, { duration: 0 });

    await animate(
      ".message-path",
      { pathLength: [0, 1], opacity: [0, 1] },
      { duration: 0.6 }
    );

    animate(".message-path", { scale: [1, 1.05, 1] }, { duration: 0.3 });
  };

  const stop = () => {
    animate(".message-path", { pathLength: 1, opacity: 1, scale: 1 });
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={start}
      onHoverEnd={stop}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      className={\`cursor-pointer \${className}\`}
    >
      <motion.path
        className="message-path"
        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29..."
      />
    </motion.svg>
  );
}
`;

export default messageCircleCode;