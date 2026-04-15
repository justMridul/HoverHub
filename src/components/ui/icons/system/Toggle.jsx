import { motion, useAnimate } from "framer-motion";

export default function Toggle({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(
      ".toggle-knob",
      { x: [0, 12] },
      { duration: 0.4, ease: "easeInOut" }
    );

    animate(
      ".toggle-track",
      { opacity: [1, 0.8, 1] },
      { duration: 0.4, ease: "easeInOut" }
    );
  };

  const stop = () => {
    animate(".toggle-knob", { x: 0 }, { duration: 0.2, ease: "easeOut" });
    animate(".toggle-track", { opacity: 1 }, { duration: 0.2, ease: "easeOut" });
  };

  return (
    <motion.svg
      ref={scope}
      onHoverStart={start}
      onHoverEnd={stop}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeMiterlimit="10"
      className={`cursor-pointer ${className}`}
    >
      <motion.path
        className="toggle-track"
        d="m10,7h12c4.971,0,9,4.029,9,9h0c0,4.971-4.029,9-9,9h-12c-4.971,0-9-4.029-9-9h0c0-4.971,4.029-9,9-9Z"
      />

      <motion.circle
        className="toggle-knob"
        cx="10"
        cy="16"
        r="5"
        style={{ transformOrigin: "10px 16px" }}
      />
    </motion.svg>
  );
}
