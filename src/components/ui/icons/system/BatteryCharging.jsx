import { motion } from "framer-motion";

export default function BatteryCharging({
  size = 26,
  color = "currentColor",
  strokeWidth = 2.5,
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {/* Bars */}
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={i}
          variants={{
            rest: { opacity: 0.2 },
            hover: { opacity: 1 },
          }}
          transition={{
            delay: i * 0.1,
            duration: 0.25,
          }}
          d={`M${10 + i * 7} 31V17`}
        />
      ))}

      {/* Terminal */}
      <path d="M46 20V28" />

      {/* Body */}
      <motion.path
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.04 },
        }}
        transition={{ duration: 0.25 }}
        style={{ transformOrigin: "50% 50%" }}
        d="M37 10H8C5.2386 10 3 12.2386 3 15V33C3 35.7614 5.2386 38 8 38H37C39.7614 38 42 35.7614 42 33V15C42 12.2386 39.7614 10 37 10Z"
      />
    </motion.svg>
  );
}