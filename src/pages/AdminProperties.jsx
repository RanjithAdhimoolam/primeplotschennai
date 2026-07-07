import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/properties");
      setProperties(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/properties/${id}`);

      alert("Property Deleted Successfully");

      fetchProperties();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1
          style={{
            marginBottom: "25px",
            fontSize: "36px",
          }}
        >
          Manage Properties
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#2563eb", color: "#fff" }}>
              <th style={{ padding: "12px" }}>Title</th>
              <th style={{ padding: "12px" }}>Location</th>
              <th style={{ padding: "12px" }}>Approval</th>
              <th style={{ padding: "12px" }}>Price</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.length > 0 ? (
              properties.map((item) => (
                <tr key={item._id}>
                  <td style={{ padding: "12px" }}>{item.title}</td>
                  <td style={{ padding: "12px" }}>{item.location}</td>
                  <td style={{ padding: "12px" }}>{item.approval}</td>
                  <td style={{ padding: "12px" }}>{item.price}</td>

                  <td style={{ padding: "12px" }}>
                    <Link to={`/admin/edit-property/${item._id}`}>
                      <button
                        className="btn-primary"
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn-success"
                      onClick={() => deleteProperty(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Properties Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminProperties;
