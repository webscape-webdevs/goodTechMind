import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import AdminRoutes from "./components/AdminComponents/AdminRoutes";
import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./components/UserComponents/UserRoutes";
import LandingPage from "./containers/LandingPage/LandingPage.jsx";
import AboutPage from "./containers/AboutPage/AboutPage.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
