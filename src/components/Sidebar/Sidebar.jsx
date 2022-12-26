import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { motion, useScroll, useSpring } from "framer-motion";
import logo from "../../sampleImages/goodTechMind.png";
import { Link } from "react-router-dom";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import DayButton from "../../sampleImages/dayButton2.png";
import NightButton from "../../sampleImages/nightButton2.png";

function Sidebar({ toggleProgressBar, theme, setTheme, hero, about, services, team, clients, clientReviews, contactUs }) {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div onHoverStart={handleToggleSidebar} onHoverEnd={handleToggleSidebar} animate={{ width: isOpen ? "6vw" : "6vw" }} className="sidebar">
        <div className="sidebar-main">
          <img style={{ width: "100px" }} src={logo} alt="" />
          {/* <span onClick={toggleTheme}>{theme === "dark-theme" ? <BsToggleOff size="40" style={{ color: "white" }} /> : <BsToggleOn size="40" style={{ color: "white" }} />}</span> */}
          <span onClick={toggleTheme}>{theme === "dark-theme" ? <img style={{ width: "70px" }} src={NightButton} alt="" /> : <img style={{ width: "70px" }} src={DayButton} alt="" />}</span>
          <div className="progress-bar">
            {!toggleProgressBar ? <motion.div className="progress-bar-line" style={{ scaleX }} /> : null}
            <div className="progress-bar-pointers">
              <ul>
                <li onClick={() => scrollToSection(hero)}>
                  <Link to="/" />
                </li>
                <li onClick={() => scrollToSection(about)}>
                  <Link to="/" />
                </li>
                <li onClick={() => scrollToSection(services)}>
                  <Link to="/" />
                </li>
                <li onClick={() => scrollToSection(team)}>
                  <Link to="/" />
                </li>
                <li onClick={() => scrollToSection(clients)}>
                  <Link to="/" />
                </li>
                <li onClick={() => scrollToSection(clientReviews)}>
                  <Link to="/" />
                </li>
                <li onClick={() => scrollToSection(contactUs)}>
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
