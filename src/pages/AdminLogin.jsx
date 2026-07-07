import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid Login");
    }
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: "500px" }}>
        <div className="card" style={{ padding: "30px" }}>
          <h1>Admin Login</h1>

          <form
            onSubmit={login}
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button className="btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
