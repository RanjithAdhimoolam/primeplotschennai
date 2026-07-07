import { useEffect, useState } from "react";
import axios from "axios";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "30px",
          }}
        >
          Contact Messages
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2563eb",
                color: "#fff",
              }}
            >
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>

                <td>{item.mobile}</td>

                <td>{item.email}</td>

                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminContacts;
