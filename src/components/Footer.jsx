import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>PrimePlotsChennai</h2>

          <p>
            Premium DTCP, CMDA & RERA Approved Residential Plots in Chennai.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 93859 98524
          </p>

          <p>
            <FaWhatsapp /> WhatsApp
          </p>

          <p>
            <FaEnvelope /> info@primeplotschennai.com
          </p>
        </div>
      </div>

      <div className="copyright">
        © 2026 PrimePlotsChennai. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
