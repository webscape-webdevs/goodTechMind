import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Logo from "../../sampleImages/LandingPageBackground.png";
import video from "../../sampleImages/video.mp4";
import Sidebar from "../../components/Sidebar/Sidebar";

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
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [zoom]);

  return (
    <div className="landingPage">
      <Sidebar />
      <div className="overlay"></div>
      <video className="landingPage-bgVideo" src={video} autoPlay loop muted />
      <img
        onClick={handleClick}
        style={zoom ? { transform: "scale(60)", transition: "5s", transitionTimingFunction: "ease-in", display: displayImg ? "block" : "none" } : { width: "100%", height: "100%" }}
        className="landingPage-logoImage"
        src={Logo}
        alt=""
      />
    </div>
  );
}

export default LandingPage;
