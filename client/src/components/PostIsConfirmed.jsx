import { useEffect } from "react";
import { motion } from "framer-motion";

const PostIsConfirmed = ({ children }) => {
  useEffect(() => {
    setTimeout(function () {
      document
        .querySelector(".check")
        .setAttribute("class", "check check-complete");
      document
        .querySelector(".fill")
        .setAttribute("class", "fill fill-complete");
    }, 1800);

    setTimeout(function () {
      document
        .querySelector(".check")
        .setAttribute("class", "check check-complete success");
      document
        .querySelector(".fill")
        .setAttribute("class", "fill fill-complete success");
      document
        .querySelector(".path")
        .setAttribute("class", "path path-complete");
    }, 2900);
  });

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{
          marginBlock: "6rem",
          marginInline: "auto",
          background: "var(--border-color-light)",
          padding: "1rem",
        }}
      >
        <div className="checkmark">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            x="0px"
            y="0px"
            viewBox="0, 0, 100, 100"
            id="checkmark"
          >
            <g>
              <circle
                className="path"
                fill="none"
                stroke="#7DB0D5"
                strokeWidth={4}
                strokeMiterlimit={10}
                cx={50}
                cy={50}
                r={44}
              />
              <circle
                className="fill"
                fill="none"
                stroke="#7DB0D5"
                strokeWidth={4}
                strokeMiterlimit={10}
                cx={50}
                cy={50}
                r={44}
              />
              <polyline
                className="check"
                fill="none"
                stroke="#7DB0D5"
                strokeWidth={8}
                strokeLinecap="round"
                strokeMiterlimit={10}
                points="70,35 45,65 30,52  "
              />
            </g>
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delayChildren: 0.5, duration: 6 }}
          exit={{ opacity: 0, y: 45 }}
          className="confirm-message my-3"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default PostIsConfirmed;
