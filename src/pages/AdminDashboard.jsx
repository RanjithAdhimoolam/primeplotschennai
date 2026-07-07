import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalBookings: 0,
    totalContacts: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/dashboard");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin";
  };

  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <h1 style={{ fontSize: "40px" }}>🛠 Admin Dashboard</h1>

          <button className="btn-success" onClick={logout}>
            Logout
          </button>
        </div>

        {/* Statistics */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            className="card"
            style={{ padding: "25px", textAlign: "center" }}
          >
            <h2>🏡 Properties</h2>
            <h1>{stats.totalProperties}</h1>
          </div>

          <div
            className="card"
            style={{ padding: "25px", textAlign: "center" }}
          >
            <h2>📅 Bookings</h2>
            <h1>{stats.totalBookings}</h1>
          </div>

          <div
            className="card"
            style={{ padding: "25px", textAlign: "center" }}
          >
            <h2>📩 Contacts</h2>
            <h1>{stats.totalContacts}</h1>
          </div>
        </div>

        {/* Dashboard Menu */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          <div className="card" style={{ padding: "30px" }}>
            <h2>🏡 Properties</h2>

            <p style={{ margin: "20px 0" }}>
              Add, Edit and Delete Property Listings.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link to="/admin/add-property" className="btn-primary">
                Add Property
              </Link>

              <Link to="/admin/properties" className="btn-success">
                Manage
              </Link>
            </div>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h2>📅 Bookings</h2>

            <p style={{ margin: "20px 0" }}>View Site Visit Bookings.</p>

            <Link to="/admin/bookings" className="btn-primary">
              View Bookings
            </Link>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h2>📩 Contact Messages</h2>

            <p style={{ margin: "20px 0" }}>Customer enquiries.</p>

            <Link to="/admin/contact" className="btn-primary">
              View Messages
            </Link>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h2>🌐 Website</h2>

            <p style={{ margin: "20px 0" }}>Open Public Website.</p>

            <Link to="/" className="btn-success">
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
