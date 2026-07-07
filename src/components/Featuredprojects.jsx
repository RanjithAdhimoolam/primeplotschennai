import ProjectCard from "./ProjectCard";

import plot1 from "../assets/plot1.jpg";
import plot2 from "../assets/plot2.jpg";
import plot3 from "../assets/plot3.jpg";

function FeaturedProjects() {
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
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          Featured Projects
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "45px",
          }}
        >
          DTCP | CMDA | RERA Approved Premium Layouts
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
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

export default FeaturedProjects;
