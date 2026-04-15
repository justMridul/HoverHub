const bagCode = `
import { motion, useAnimate } from "framer-motion";

export default function Bag({
  size = 26,
  color = "currentColor",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".bag",
      {
        rotate: [0, -8, 8, -6, 6, -3, 3, 0],
        y: [0, -5, 0, -3, 0, -2, 0],
      },
      { duration: 0.6 }
    );
  };

  const stop = () => {
    animate(".bag", { rotate: 0, y: 0 }, { duration: 0.2 });
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={start}
      onHoverEnd={stop}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      className="cursor-pointer"
    >
      <motion.g className="bag">
        <path d="M 561.64 1018.00 C541.03,1019.15 482.25,1019.09 461.00,1017.88 ..." />
      </motion.g>
    </motion.svg>
  );
}
`;

export default bagCode;