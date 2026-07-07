import { useEffect, useState } from "react";
import axios from "axios";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");

      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);

      fetchBookings();

      alert("Booking Deleted");
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
          Site Visit Bookings
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
              <th>Project</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>

                <td>{item.mobile}</td>

                <td>{item.project}</td>

                <td>{item.date}</td>

                <td>{item.time}</td>

                <td>{item.status}</td>

                <td>
                  <button
                    className="btn-success"
                    onClick={() => deleteBooking(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminBookings;
