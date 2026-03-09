import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <img
          src="/assets/img/olx_logo.svg"
          alt="OLX Logo"
          className="footer-logo"
        />

        <div className="footer-social">

          <FaTwitter/>
          <FaFacebook/>
          <FaYoutube/>
          <FaInstagram/>

        </div>

        <p className="footer-email">
          Email: syedhussaindeen.2016@gmail.com
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} OLX Reference Website. All Rights Reserved.
        </p>

      </div>

    </footer>

  );

}

export default Footer;