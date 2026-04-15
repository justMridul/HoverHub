const phoneVolumeCode = `
import { motion, useAnimate } from "framer-motion";

export default function PhoneVolume({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    animate(".phone-wave-inner", { scale: [1, 1.15, 1] });
    await animate(".phone-wave-outer", { scale: [1, 1.25, 1] });
  };

  const stop = () => {
    animate(".phone-wave", { scale: 1 });
  };

  return (
    <motion.div ref={scope}>
      <svg width={size} height={size}>
        <motion.path d="m21.3832,18.2745..." />
        <motion.path className="phone-wave-inner" d="m19,8..." />
        <motion.path className="phone-wave-outer" d="m19,3..." />
      </svg>
    </motion.div>
  );
}
`;

export default phoneVolumeCode;