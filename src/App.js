import { Routes, Route, BrowserRouter } from "react-router-dom";

import AdminRoutes from "./components/AdminComponents/AdminRoutes";
import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./components/UserComponents/UserRoutes";
import LandingPage from "./containers/LandingPage/LandingPage.jsx";
import LoginSignup from "./containers/LoginSignup/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginSignup" element={<LoginSignup />} />

        <Route element={<UserRoutes />}>
          <Route path="/cart" element={<LandingPage />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path="/dashboard" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
