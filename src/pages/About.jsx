function About() {
  return (
    <section className="section">
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          About PrimePlotsChennai
        </h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "#6b7280",
          }}
        >
          PrimePlotsChennai is one of the trusted real estate companies offering
          DTCP, CMDA and RERA approved residential plots across Chennai. Our
          goal is to provide legally verified properties, transparent pricing
          and excellent customer support.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <div className="card" style={{ padding: "30px" }}>
            <h2>🎯 Our Mission</h2>

            <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
              To help every customer own a legally approved plot at the best
              price with complete transparency.
            </p>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h2>👁️ Our Vision</h2>

            <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
              To become Chennai's most trusted real estate company by providing
              quality layouts and excellent service.
            </p>
          </div>

          <div className="card" style={{ padding: "30px" }}>
            <h2>⭐ Why Choose Us?</h2>

            <ul
              style={{
                marginTop: "15px",
                lineHeight: "2",
              }}
            >
              <li>✅ DTCP / CMDA / RERA Approved</li>
              <li>✅ 100% Legal Documents</li>
              <li>✅ Bank Loan Assistance</li>
              <li>✅ Prime Locations</li>
              <li>✅ Affordable Pricing</li>
              <li>✅ Customer Support</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <h2>Our Achievements</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "25px",
              marginTop: "35px",
            }}
          >
            <div className="card" style={{ padding: "25px" }}>
              <h1 style={{ color: "#2563eb" }}>500+</h1>
              <p>Happy Customers</p>
            </div>

            <div className="card" style={{ padding: "25px" }}>
              <h1 style={{ color: "#2563eb" }}>50+</h1>
              <p>Projects</p>
            </div>

            <div className="card" style={{ padding: "25px" }}>
              <h1 style={{ color: "#2563eb" }}>10+</h1>
              <p>Years Experience</p>
            </div>

            <div className="card" style={{ padding: "25px" }}>
              <h1 style={{ color: "#2563eb" }}>100%</h1>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
