import React, { useEffect, useState, useRef } from "react";
import "./landingPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/LandingPageCompnents/Hero/Hero";
import About from "../../components/LandingPageCompnents/About/About";
import Services from "../../components/LandingPageCompnents/Services/Services";
import Team from "../../components/LandingPageCompnents/Team/Team";
import Clients from "../../components/LandingPageCompnents/Clients/Clients";
import ClientReviews from "../../components/LandingPageCompnents/ClientReviews/ClientReviews";
import ContactUs from "../../components/LandingPageCompnents/ContactUs/ContactUs";
import { motion } from "framer-motion";

function LandingPage() {
  const hero = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const team = useRef(null);
  const clients = useRef(null);
  const clientReviews = useRef(null);
  const contactUs = useRef(null);
  const [theme, setTheme] = useState("dark-theme");
  const [showTextEffect, setShowTextEffect] = useState(true);
  const [displayImg, setDisplayImg] = useState(false);

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
      <motion.div
        className="landingPage-start"
        animate={!showTextEffect ? { transform: "scale(100)", transition: "opacity 10s ease-in" } : { transform: "none" }}
        onClick={handleClick}
        style={displayImg ? null : { display: "none", zIndex: "-20", position: "absolute" }}
      >
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

      <div className="landingPage-content" style={displayImg ? { height: "100vh" } : null}>
        <div className="landingPage-content-sidebar">
          <Sidebar
            toggleProgressBar={displayImg}
            theme={theme}
            setTheme={setTheme}
            hero={hero}
            about={about}
            services={services}
            team={team}
            clients={clients}
            clientReviews={clientReviews}
            contactUs={contactUs}
          />
        </div>
        <div className="landingPage-content-main">
          <Navbar theme={theme} />
          <section ref={hero} className="landingPage-sections">
            <Hero />
          </section>
          <section ref={about} className="landingPage-sections">
            <About />
          </section>
          <section ref={services} className="landingPage-sections">
            <Services />
          </section>
          <section ref={team} className="landingPage-sections">
            <Team />
          </section>
          <section ref={clients} className="landingPage-sections">
            <Clients />
          </section>
          <section ref={clientReviews} className="landingPage-sections">
            <ClientReviews />
          </section>
          <section ref={contactUs} className="landingPage-sections">
            <ContactUs />
          </section>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
