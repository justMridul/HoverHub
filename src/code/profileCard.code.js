const profileCardCode = `
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
      w-full h-full
      rounded-xl
      bg-zinc-900
      border border-zinc-800
      p-6
      flex flex-col items-center justify-center
      text-center
      "
    >
      <img
        src="https://i.pravatar.cc/100"
        alt="avatar"
        className="w-16 h-16 rounded-full mb-4"
      />

      <div className="text-white font-medium">
        John Doe
      </div>

      <div className="text-zinc-400 text-sm">
        Frontend Developer
      </div>
    </motion.div>
  );
}
`;

export default profileCardCode;