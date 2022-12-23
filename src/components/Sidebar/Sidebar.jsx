import React, { useState } from "react";
import "./sidebar.css";
import { motion, useScroll, useSpring } from "framer-motion";
import logo from "../../sampleImages/goodTechMind.png";
import { Link } from "react-router-dom";

function Sidebar({ toggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div onHoverStart={handleToggle} onHoverEnd={handleToggle} animate={{ width: isOpen ? "15vw" : "6vw" }} className="sidebar">
        <div className="sidebar-main">
          <img style={{ width: "100px" }} src={logo} alt="" />
          <div className="progress-bar">
            {!toggle ? <motion.div className="progress-bar-line" style={{ scaleX }} /> : null}
            <div className="progress-bar-pointers">
              <ul>
                <li>
                  <Link to="/" />
                </li>
                <li>
                  <Link to="/" />
                </li>
                <li>
                  <Link to="/" />
                </li>
                <li>
                  <Link to="/" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
