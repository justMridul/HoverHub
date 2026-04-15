const discordCode = `
import { motion, useAnimate } from "framer-motion";

export default function Discord({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".eyes", { scale: [1, 1.3, 1] }, { duration: 0.3 });
    await animate(".mouth", { scaleX: [1, 1.1, 1] }, { duration: 0.4 });
    animate(".body", { y: [0, -1, 0] }, { duration: 0.5 });
  };

  const stop = () => {
    animate(".eyes", { scale: 1 }, { duration: 0.2 });
    animate(".mouth", { scaleX: 1 }, { duration: 0.2 });
    animate(".body", { y: 0 }, { duration: 0.2 });
  };

  return (
    <motion.svg
      ref={scope}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      className={\`cursor-pointer \${className}\`}
      onHoverStart={start}
      onHoverEnd={stop}
    >
      <motion.path className="eyes" d="M8 12a1 1 0 1 0 2 0" />
      <motion.path className="eyes" d="M14 12a1 1 0 1 0 2 0" />
      <motion.path className="mouth" d="M7 16.5c3.5 1 6.5 1 10 0" />
      <motion.path className="body" d="M15.5 17c0 1 1.5 3 2 3..." />
    </motion.svg>
  );
}
`;

export default discordCode;