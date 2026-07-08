import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by Location (Guduvanchery, Avadi...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select>
            <option>Approval</option>
            <option>DTCP</option>
            <option>CMDA</option>
            <option>RERA</option>
          </select>

          <select>
            <option>Budget</option>
            <option>Below ₹20 Lakhs</option>
            <option>₹20 - ₹30 Lakhs</option>
            <option>Above ₹30 Lakhs</option>
          </select>

          <button
            onClick={() => {
              window.location.href = `/projects?location=${search}`;
            }}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
