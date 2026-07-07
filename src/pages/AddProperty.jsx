import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProperty() {
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

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", property.title);
    formData.append("location", property.location);
    formData.append("approval", property.approval);
    formData.append("price", property.price);
    formData.append("size", property.size);
    formData.append("roadWidth", property.roadWidth);
    formData.append("description", property.description);
    formData.append("mapLocation", property.mapLocation);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await axios.post("http://localhost:5000/api/properties", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property Added Successfully");

      navigate("/admin/properties");
    } catch (err) {
      console.log(err);
      alert("Failed to Add Property");
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="card" style={{ padding: "30px" }}>
          <h1>Add Property</h1>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "18px",
              marginTop: "25px",
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
              required
            />

            <select name="approval" onChange={handleChange} required>
              <option value="">Approval</option>
              <option value="DTCP">DTCP</option>
              <option value="CMDA">CMDA</option>
              <option value="RERA">RERA</option>
            </select>

            <input
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="size"
              placeholder="Plot Size"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="roadWidth"
              placeholder="Road Width"
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mapLocation"
              placeholder="Google Map Embed URL"
              onChange={handleChange}
              required
            />

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setImages(e.target.files)}
            />

            <button type="submit" className="btn-primary">
              Add Property
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddProperty;
