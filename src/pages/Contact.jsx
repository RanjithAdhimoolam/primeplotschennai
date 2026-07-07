import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
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
      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message Sent Successfully");

      setForm({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to Send Message");
      console.log(err);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: "40px",
          }}
        >
          {/* Contact Details */}

          <div className="card" style={{ padding: "30px" }}>
            <h2>Get In Touch</h2>

            <p style={{ marginTop: "20px" }}>📍 Chennai, Tamil Nadu</p>

            <p style={{ marginTop: "15px" }}>📞 +91 93859 98524</p>

            <p style={{ marginTop: "15px" }}>📧 info@primeplotschennai.com</p>

            <a
              href="https://wa.me/919385998524"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-success"
              style={{
                display: "inline-block",
                marginTop: "30px",
              }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Contact Form */}

          <div className="card" style={{ padding: "30px" }}>
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

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button className="btn-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}

        <div style={{ marginTop: "60px" }}>
          <iframe
            title="PrimePlotsChennai"
            src="https://www.google.com/maps?q=Chennai,Tamil Nadu&output=embed"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "15px",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
