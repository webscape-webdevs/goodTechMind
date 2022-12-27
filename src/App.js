import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import AdminRoutes from "./components/AdminComponents/AdminRoutes";
import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./components/UserComponents/UserRoutes";
import LandingPage from "./containers/LandingPage/LandingPage.jsx";
import AboutPage from "./containers/AboutPage/AboutPage.jsx";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage theme={theme} setTheme={setTheme} />} />
        <Route path="/about" element={<AboutPage theme={theme} setTheme={setTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
