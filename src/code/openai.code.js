const openaiCode = `
import { motion, useAnimate } from "framer-motion";

export default function BrandOpenai({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  const [scope, animate] = useAnimate();

  const start = async () => {
    await animate(".internal", { pathOffset: [1, 0] });
  };

  const stop = () => {
    animate(".internal", { pathOffset: 0 });
  };

  return (
    <motion.svg ref={scope} onHoverStart={start} onHoverEnd={stop}>
      {[ "...paths..." ].map((d, i) => (
        <motion.path key={i} d={d} className="internal" />
      ))}
    </motion.svg>
  );
}
`;

export default openaiCode;