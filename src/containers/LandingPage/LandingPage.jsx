import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Hero from "../../sampleImages/dummyImage.png";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

function LandingPage() {
  const [showTextEffect, setShowTextEffect] = useState(true);
  const [displayImg, setDisplayImg] = useState(true);

  const handleClick = () => {
    setShowTextEffect((prev) => !prev);
  };

  useEffect(() => {
    if (!showTextEffect) {
      const timeout = setTimeout(() => {
        setDisplayImg(!displayImg);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [showTextEffect]);

  return (
    <div className="landingPage">
      <motion.div className="landingPage-start" animate={{ y: showTextEffect ? 0 : -1000 }} onClick={handleClick} style={displayImg ? null : { display: "none", zIndex: "-20", position: "absolute" }}>
        <div className="text-effect">
          <div className="text-effect-G">
            <h1 className="neon" data-text="G">
              G
            </h1>
            <div className="gradient-G"></div>
            <div className="spotlight"></div>
          </div>
          <div className="text-effect-T">
            <h1 className="neon" data-text="T">
              T
            </h1>
            <div className="gradient-T"></div>
            <div className="spotlight"></div>
          </div>
          <div className="text-effect-M">
            <h1 className="neon" data-text="M">
              M
            </h1>
            <div className="gradient-M"></div>
            <div className="spotlight"></div>
          </div>
        </div>
        <div className="tagLine">
          <div className="wrapper-good">
            <h1>GOOD</h1>
          </div>
          <div className="wrapper-tech">
            <h1>TECH</h1>
          </div>
          <div className="wrapper-mind">
            <h1>MIND</h1>
          </div>
        </div>
      </motion.div>

      {/* <div className="overlay"></div>
      <img className="backgroundImage" src={Hero} alt="" /> */}

      <div className="landingPage-content" style={displayImg ? { height: "100vh" } : null}>
        <div className="landingPage-content-sidebar">
          <Sidebar toggle={displayImg} />
        </div>
        <div className="landingPage-content-main">
          <Navbar />
          <div className="test"></div>
          <div className="test"></div>
          <div className="test"></div>
          <div className="test"></div>
        </div>
      </div>

      {/* <div className="overlay"></div>
      <video className="landingPage-bgVideo" src={video} autoPlay loop muted /> */}
      {/* <img
        onClick={handleClick}
        style={zoom ? { transform: "scale(60)", transition: "5s", transitionTimingFunction: "ease-in", display: displayImg ? "block" : "none" } : { width: "100%", height: "100%" }}
        className="landingPage-logoImage"
        src={Logo}
        alt=""
      /> */}
    </div>
  );
}

export default LandingPage;
