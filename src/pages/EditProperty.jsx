import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState({
    title: "",
    location: "",
    approval: "",
    price: "",
    size: "",
    roadWidth: "",
    description: "",
    mapLocation: "",
  });

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    const res = await axios.get(`http://localhost:5000/api/properties/${id}`);

    setProperty(res.data);
  };

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const updateProperty = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/properties/${id}`, property);

    alert("Property Updated Successfully");

    navigate("/admin/properties");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="card" style={{ padding: "30px" }}>
          <h1>Edit Property</h1>

          <form
            onSubmit={updateProperty}
            style={{
              display: "grid",
              gap: "18px",
              marginTop: "25px",
            }}
          >
            <input
              name="title"
              value={property.title}
              onChange={handleChange}
            />

            <input
              name="location"
              value={property.location}
              onChange={handleChange}
            />

            <input
              name="approval"
              value={property.approval}
              onChange={handleChange}
            />

            <input
              name="price"
              value={property.price}
              onChange={handleChange}
            />

            <input name="size" value={property.size} onChange={handleChange} />

            <input
              name="roadWidth"
              value={property.roadWidth}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="description"
              value={property.description}
              onChange={handleChange}
            />

            <input
              name="mapLocation"
              value={property.mapLocation}
              onChange={handleChange}
            />

            <button className="btn-primary">Update Property</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditProperty;
