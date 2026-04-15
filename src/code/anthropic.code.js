const anthropicCode = `
import { motion, useAnimate } from "framer-motion";
import { useCallback } from "react";

export default function Anthropic({
  size = 24,
  color = "currentColor",
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = useCallback(() => {
    animate(".anthropic-i",
      { rotateX: 22, skewX: -22, scaleY: 1.09 },
      { duration: 0.2 }
    );
  }, [animate]);

  const stop = useCallback(() => {
    animate(".anthropic-i",
      { rotateX: 0, skewX: 0, scaleY: 1 },
      { duration: 0.2 }
    );
  }, [animate]);

  return (
    <motion.svg
      ref={scope}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={\`cursor-pointer \${className}\`}
      xmlns="http://www.w3.org/2000/svg"
      onHoverStart={start}
      onHoverEnd={stop}
    >
      <motion.g>
        <path d="M6.57 3.52h3.767L16.906 20h-3.674l-1.343-3.461H5.017L3.673 20H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z" />
      </motion.g>

      <motion.g className="anthropic-i">
        <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48z" />
      </motion.g>
    </motion.svg>
  );
}
`;

export default anthropicCode;