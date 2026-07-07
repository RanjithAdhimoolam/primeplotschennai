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
        <h1>Project Not Found</h1>

        <Link to="/" className="btn-primary">
          Back Home
        </Link>
      </div>
    );
  }
  return (
    <div className="container section">
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {project.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            style={{
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
      {project.images.map((img) => (
        <img
          key={img}
          src={`http://localhost:5000/uploads/${img}`}
          alt="Property"
          className="gallery-image"
        />
      ))}
      <h1
        style={{
          marginTop: "30px",
          fontSize: "42px",
        }}
      >
        {project.title}
      </h1>

      <p style={{ color: "#6b7280", marginTop: "10px" }}>
        📍 {project.location}
      </p>

      <p
        style={{
          color: "green",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {project.approval}
      </p>

      <h2
        style={{
          color: "#2563eb",
          marginTop: "15px",
        }}
      >
        {project.price}
      </h2>

      <p
        style={{
          marginTop: "25px",
          lineHeight: "1.8",
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div className="card" style={{ padding: "20px" }}>
          <h3>Plot Size</h3>
          <p>{project.size}</p>
        </div>

        <div className="card" style={{ padding: "20px" }}>
          <h3>Road Width</h3>
          <p>{project.road}</p>
        </div>

        <div className="card" style={{ padding: "20px" }}>
          <h3>Bank Loan</h3>
          <p>Available</p>
        </div>
      </div>
      {/* Amenities */}

      <div style={{ marginTop: "50px" }}>
        <h2>Amenities</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <div>✅ Black Top Road</div>
          <div>✅ Street Lights</div>
          <div>✅ Gated Community</div>
          <div>✅ EB Connection</div>
          <div>✅ Water Facility</div>
          <div>✅ Children's Park</div>
          <div>✅ Bank Loan Available</div>
          <div>✅ Ready to Construct</div>
        </div>
      </div>

      {/* Google Map */}

      <div style={{ marginTop: "50px" }}>
        <h2>Project Location</h2>

        <iframe
          title="Project Location"
          src={project.map}
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: "12px",
            marginTop: "20px",
          }}
          loading="lazy"
        ></iframe>
      </div>

      {/* Action Buttons */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <a href="tel:+919385998524" className="btn-primary">
          📞 Call Now
        </a>

        <a
          href={`https://wa.me/919385998524?text=Hi, I am interested in ${project.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-success"
        >
          💬 WhatsApp
        </a>

        <Link
          to="/booking"
          className="btn-primary"
          style={{ textAlign: "center" }}
        >
          📅 Book Site Visit
        </Link>
      </div>

      {/* Quick Enquiry */}

      <div
        className="card"
        style={{
          marginTop: "50px",
          padding: "30px",
        }}
      >
        <h2>Quick Enquiry</h2>

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <input type="text" placeholder="Full Name" />

          <input type="tel" placeholder="Mobile Number" />

          <input type="email" placeholder="Email Address" />

          <textarea rows="5" placeholder="Message"></textarea>

          <button className="btn-primary">Submit Enquiry</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
