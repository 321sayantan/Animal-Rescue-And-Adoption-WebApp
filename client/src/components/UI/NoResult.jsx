import { motion } from "framer-motion";

const NoResult = () => {
  return (
    <div className="mt-2 py-5 no-result_div">
      <motion.p
        key="fallback"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
      >
        No Related matches found..! :(
      </motion.p>
    </div>
  );
};

export default NoResult;
