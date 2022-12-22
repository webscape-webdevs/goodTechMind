import React, { useState } from "react";
import "./sidebar.css";
import { motion } from "framer-motion";
import logo from "../../sampleImages/goodTechMind.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div onHoverStart={handleToggle} onHoverEnd={handleToggle} animate={{ width: isOpen ? "15vw" : "6vw" }} className="sidebar">
      <div className="sidebar-main">
        <img style={{ width: "100px" }} src={logo} alt="" />
      </div>
    </motion.div>
  );
}

export default Sidebar;
