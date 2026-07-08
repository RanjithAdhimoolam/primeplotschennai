import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1>
            Find Your Dream Plot in
            <span> Chennai</span>
          </h1>

          <p>
            DTCP | CMDA | RERA Approved Plots
            <br />
            Best Investment • Bank Loan Available • Clear Documents
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="hero-btn-primary">
              Explore Projects
            </Link>

            <a
              href="https://wa.me/919385998524"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
