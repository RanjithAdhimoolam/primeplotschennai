import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="card">
      <img
        src={project.image}
        alt={project.title}
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2>{project.title}</h2>

        <p>📍 {project.location}</p>

        <p
          style={{
            color: "green",
            fontWeight: "bold",
          }}
        >
          {project.approval}
        </p>

        <h3
          style={{
            color: "#2563eb",
            marginTop: "10px",
          }}
        >
          {project.price}
        </h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Link to={`/project/${project.id}`} className="btn-primary">
            View Details
          </Link>

          <a
            href={`https://wa.me/919385998524?text=Hi, I am interested in ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-success"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
