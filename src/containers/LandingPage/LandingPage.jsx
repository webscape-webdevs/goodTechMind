import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Hero from "../../sampleImages/dummyImage.png";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function LandingPage() {
  const [zoom, setZoom] = useState(false);
  const [displayImg, setDisplayImg] = useState(true);

  const handleClick = () => {
    setZoom((prev) => !prev);
  };

  useEffect(() => {
    if (zoom) {
      const timeout = setTimeout(() => {
        setDisplayImg(!displayImg);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [zoom]);

  return (
    <div className="landingPage">
      <div className="overlay"></div>
      <img className="backgroundImage" src={Hero} alt="" />
      <Navbar />

      {/* <div className="overlay"></div>
      <video className="landingPage-bgVideo" src={video} autoPlay loop muted /> */}
      {/* <img
        onClick={handleClick}
        style={zoom ? { transform: "scale(60)", transition: "5s", transitionTimingFunction: "ease-in", display: displayImg ? "block" : "none" } : { width: "100%", height: "100%" }}
        className="landingPage-logoImage"
        src={Logo}
        alt=""
      /> */}

      <div onClick={handleClick} style={zoom ? { display: "none" } : null} className="landingPage-start">
        <div className="text-effect">
          <h1 className="neon" data-text="GTM">
            GTM
          </h1>
          <div className="gradient"></div>
          <div className="spotlight"></div>
        </div>
        <div class="wrapper">
          <h1>GOOD TECH MIND</h1>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default LandingPage;
