import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/sessionSlice";
import { RiTeamFill, RiHome5Fill, RiBriefcase4Fill, RiCustomerService2Fill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdDesignServices, MdUpcoming } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import Career2 from "../../sampleImages/career2.png";
import Career3 from "../../sampleImages/career3.png";

function Navbar({ theme }) {
  const { sessionUser } = useSelector((state) => state.sessionSlice);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const Options = () => {
    return (
      <div className="navbar-options">
        {/* home */}
        <Link to="/">
          <RiHome5Fill size="30" style={{ color: "var(--btn-bg-color1)" }} />
        </Link>
        {sessionUser._id ? (
          <>
            <Link to="/cart"> Cart </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/myOrders"> Orders </Link>
            <span style={{ cursor: "pointer" }} onClick={handleLogout}>
              Logout
            </span>
          </>
        ) : (
          <>
            {/* about */}
            <Link to="/">
              <AiFillInfoCircle size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* contact */}
            <Link to="/">
              <RiCustomerService2Fill size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* blog */}
            <Link to="/">
              <FaBlogger size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* career */}
            <Link to="/">
              <img src={theme === "dark-theme" ? Career2 : Career3} alt="" style={{ width: "30px" }} />
            </Link>
            {/* product */}
            <Link to="/">
              <RiBriefcase4Fill size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* service and maintenance */}
            <Link to="/">
              <MdDesignServices size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* employees */}
            <Link to="/">
              <RiTeamFill size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* team */}
            <Link to="/">
              <RiTeamFill size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
            {/* upcomming */}
            <Link to="/">
              <MdUpcoming size="30" style={{ color: "var(--btn-bg-color1)" }} />
            </Link>
          </>
        )}
        {sessionUser.role === "admin" && <Link to="/dasboard">Dashboard</Link>}
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Options />
      </div>
    </div>
  );
}

export default Navbar;
