import { useState } from "react";
import axios from "axios";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    project: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/bookings", form);

      alert("Booking Submitted Successfully");

      setForm({
        name: "",
        mobile: "",
        email: "",
        project: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      alert("Booking Failed");
      console.log(err);
    }
  };

  return (
    <section className="section">
      <div
        className="container"
        style={{
          maxWidth: "700px",
        }}
      >
        <div
          className="card"
          style={{
            padding: "35px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Book Site Visit
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="project"
              value={form.project}
              onChange={handleChange}
              required
            >
              <option value="">Select Project</option>

              <option>Prime City - Guduvanchery</option>

              <option>KKR Avenue - Oragadam</option>

              <option>Royal County - Avadi</option>
            </select>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Time</option>

              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>03:00 PM</option>
              <option>05:00 PM</option>
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn-primary">
              Book Site Visit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
