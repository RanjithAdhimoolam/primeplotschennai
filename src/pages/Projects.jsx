import ProjectCard from "../components/ProjectCard";

import plot1 from "../assets/plot1.jpg";
import plot2 from "../assets/plot2.jpg";
import plot3 from "../assets/plot3.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      image: plot1,
      title: "Prime City - Guduvanchery",
      location: "Guduvanchery, Chennai",
      approval: "DTCP Approved",
      price: "₹18 Lakhs",
    },
    {
      id: 2,
      image: plot2,
      title: "KKR Avenue - Oragadam",
      location: "Oragadam, Chennai",
      approval: "CMDA Approved",
      price: "₹25 Lakhs",
    },
    {
      id: 3,
      image: plot3,
      title: "Royal County - Avadi",
      location: "Avadi, Chennai",
      approval: "RERA Approved",
      price: "₹30 Lakhs",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Our Projects
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "50px",
          }}
        >
          Choose your dream DTCP, CMDA & RERA Approved Plot
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
