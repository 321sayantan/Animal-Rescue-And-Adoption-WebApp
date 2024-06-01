import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = ({ className, children, onClose, title }) => {
  const modalClasses = className ? className : "";
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -58 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className={"modal " + modalClasses}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modals")
  );
};

export default Modal;
