import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Navbar({ setSearch }) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (

    <>
      <nav className="navbar">

        <img
          src="/assets/img/olx_logo.svg"
          alt="OLX Logo"
          className="logo"
        />

        <input
          className="search"
          type="text"
          placeholder="Search products..."
          onChange={(e)=>setSearch(e.target.value)}
        />

        <div style={{display:"flex",alignItems:"center",gap:"15px"}}>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

          <div className="hamburger" onClick={()=>setOpen(true)}>
            ☰
          </div>

        </div>

      </nav>

      {/* SIDE MENU */}

      <div className={`side-menu ${open ? "active" : ""}`}>

        <div className="side-header">

          <img
            src="/assets/img/olx_logo.svg"
            alt="OLX Logo"
            className="logo"
          />

          <span className="close-btn" onClick={()=>setOpen(false)}>✕</span>

        </div>

        <div className="social-icons">
          <FaTwitter/>
          <FaFacebook/>
          <FaYoutube/>
          <FaInstagram/>
        </div>

        <div className="side-links">
          <Link to="/home" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/wishlist" onClick={()=>setOpen(false)}>Wishlist</Link>
        </div>

      </div>

    </>
  );

}

export default Navbar;