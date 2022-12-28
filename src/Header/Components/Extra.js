import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonDiv, ParaStyle } from "../../Style/Stylings";

const { useState } = React;

const Extra = () => {
  const [mouse, setMouse] = useState([0, 0, false]);
  const [mx, my, isActive] = mouse;
  return (
    <>
      <ParaStyle>Hover Your Mouse On Button!!!</ParaStyle>
      <ButtonDiv>
        <motion.button
          className="button"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, .2)",
          }}
          whileTap={{
            backgroundColor: "#212121",
          }}
          onMouseMove={(e) => {
            const { offsetTop, offsetLeft } = e.currentTarget;
            setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true]);
          }}
          onMouseEnter={() => setMouse([mx, my, true])}
          onMouseLeave={() => setMouse([mx, my, false])}
        >
          <AnimatePresence>
            {isActive && (
              <motion.div
                key="dot"
                className="dot"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  x: mx,
                  y: my,
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <circle fill="yellow" cx="4" cy="4" r="4" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <span>Thank You</span>
        </motion.button>
      </ButtonDiv>
    </>
  );
};

//This was done from taking help online.

export { Extra };
