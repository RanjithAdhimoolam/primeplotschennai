import { useParams, Link } from "react-router-dom";

import plot1 from "../assets/plot1.jpg";
import plot2 from "../assets/plot2.jpg";
import plot3 from "../assets/plot3.jpg";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Prime City - Guduvanchery",
      image: plot1,
      gallery: [plot1, plot2, plot3],
      location: "Guduvanchery, Chennai",
      approval: "DTCP Approved",
      price: "₹18 Lakhs",
      size: "1200 Sq.ft",
      road: "30 Feet",
      description:
        "Premium DTCP approved residential plots with black top road, EB connection, drinking water and ready to construct.",
      map: "https://www.google.com/maps?q=Guduvanchery,Chennai&output=embed",
    },

    2: {
      title: "KKR Avenue - Oragadam",
      image: plot2,
      gallery: [plot2, plot1, plot3],
      location: "Oragadam, Chennai",
      approval: "CMDA Approved",
      price: "₹25 Lakhs",
      size: "1500 Sq.ft",
      road: "40 Feet",
      description:
        "Premium CMDA approved plots near SIPCOT, schools and industries.",
      map: "https://www.google.com/maps?q=Oragadam,Chennai&output=embed",
    },

    3: {
      title: "Royal County - Avadi",
      image: plot3,
      gallery: [plot3, plot1, plot2],
      location: "Avadi, Chennai",
      approval: "RERA Approved",
      price: "₹30 Lakhs",
      size: "1800 Sq.ft",
      road: "40 Feet",
      description:
        "Premium gated community with park, street lights and 24x7 security.",
      map: "https://www.google.com/maps?q=Avadi,Chennai&output=embed",
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="container section">
        <h2>Project Not Found</h2>
        <Link to="/" className="btn-primary">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {(project.gallery || []).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ))}
        </div>

        <h1 style={{ marginTop: "30px" }}>{project.title}</h1>

        <p>📍 {project.location}</p>
        <p>
          <strong>{project.approval}</strong>
        </p>

        <h2 style={{ color: "#0b7a32" }}>{project.price}</h2>

        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          {project.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <div className="card">
            <h3>Plot Size</h3>
            <p>{project.size}</p>
          </div>

          <div className="card">
            <h3>Road Width</h3>
            <p>{project.road}</p>
          </div>

          <div className="card">
            <h3>Bank Loan</h3>
            <p>Available</p>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2>Google Map</h2>

          <iframe
            title="Map"
            src={project.map}
            width="100%"
            height="400"
            style={{
              border: 0,
              borderRadius: "10px",
              marginTop: "15px",
            }}
            loading="lazy"
          ></iframe>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <a href="tel:+919385998524" className="btn-primary">
            📞 Call Now
          </a>

          <a
            href={`https://wa.me/919385998524?text=Hi, I am interested in ${project.title}`}
            target="_blank"
            rel="noreferrer"
            className="btn-success"
          >
            💬 WhatsApp
          </a>

          <Link to="/booking" className="btn-primary">
            📅 Book Site Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
