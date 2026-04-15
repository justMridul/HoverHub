const press3DButtonCode = `
import { motion } from "framer-motion";

export default function Press3DButton() {
  return (
    <motion.button
      whileTap={{ y: 3 }}
      whileHover={{ y: -2 }}
      className="px-6 py-3 rounded-xl bg-emerald-600 text-white shadow-md active:shadow-sm"
    >
      3D Press
    </motion.button>
  );
}
`;

export default press3DButtonCode;