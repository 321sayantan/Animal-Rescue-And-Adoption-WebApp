import { motion } from "framer-motion";

const NoResult = ({ message }) => {
  return (
    <motion.div
      className="mt-2 py-5 no-result_div flex-column"
      key="fallback"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
    >
      <div className="position-relative fallback-image-box">
        <img
          src="https://res.cloudinary.com/dkf5lwjqr/image/upload/v1720092640/adopet/gnmgvoji8jt4g3bl2dxj.png"
          className="img-fluid"
          alt=""
        />
      </div>
      <p>{message}</p>
    </motion.div>
  );
};

export default NoResult;
