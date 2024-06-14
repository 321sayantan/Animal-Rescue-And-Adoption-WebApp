import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = ({ className, children, onClose, title }) => {
  const modalClasses = className ? `modal ${className}` : `modal`;
  return createPortal(
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: -58 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className={modalClasses}
      >
        <header className="modal-header">
          <h2 style={{ fontWeight: "700" }}>{title}</h2>
          <div className="btn-close" onClick={onClose}></div>
        </header>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modals")
  );
};

export default Modal;
