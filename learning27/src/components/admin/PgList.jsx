import React, { useEffect, useState } from "react";
import axios from "axios";

function PgList() {
  const [pgs, setPgs] = useState([]);
  const [selectedPG, setSelectedPG] = useState(null);

  useEffect(() => {
    fetchPgs();
  }, []);

  const fetchPgs = () => {
    axios.get("/pg/getallpg").then((res) => {
      if (Array.isArray(res.data.data)) {
        setPgs(res.data.data);
      } else {
        setPgs([]);
      }
    });
  };

  const deletePg = (id) => {
    if (window.confirm("Are you sure you want to delete this PG?")) {
      axios
        .delete(`/pg/deletepg/${id}`)
        .then(() => {
          alert("PG deleted successfully.");
          fetchPgs();
        })
        .catch((err) => {
          console.error("Error deleting PG:", err);
          alert("Failed to delete PG.");
        });
    }
  };

  const handleViewDetails = (pg) => {
    setSelectedPG(pg);
  };

  return (
    <div className="admin-page">
      <style>{`
        body {
          margin: 0;
        }

        .admin-page {
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right top, #e0c3fc, #8ec5fc);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }

        .glass-card {
          width: 100%;
          max-width: 1100px;
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.75);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          margin: auto;
        }

        h2 {
          margin-bottom: 25px;
          color: #2c3e50;
          text-align: center;
          font-size: 30px;
          letter-spacing: 1px;
        }

        .table-container {
          overflow-x: auto;
          border-radius: 10px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
        }

        th, td {
          padding: 14px 20px;
          text-align: left;
          border-bottom: 1px solid #eaeaea;
          font-size: 15px;
        }

        th {
          background-color: #5b47fb;
          color: #ffffff;
          font-weight: 600;
          text-transform: uppercase;
        }

        tr:hover {
          background-color: #f0f0f0;
        }

        .delete-btn {
          background-color: #ff4d4f;
          color: white;
          padding: 8px 16px;
          font-size: 14px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .delete-btn:hover {
          background-color: #d32f2f;
        }

        .view-btn {
          background-color: #4CAF50;
          color: white;
          padding: 8px 16px;
          font-size: 14px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-right: 8px;
        }

        @media (max-width: 768px) {
          th, td {
            padding: 10px;
            font-size: 13px;
          }

          h2 {
            font-size: 24px;
          }

          .delete-btn, .view-btn {
            padding: 6px 12px;
            font-size: 12px;
          }
        }

        .pg-details {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          max-width: 900px;
          margin: 40px auto 20px;
          width: 90%;
        }

        .pg-image {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          border-radius: 10px;
          border: 2px solid #ddd;
          margin-bottom: 20px;
        }

        .pg-details p {
          font-size: 16px;
          margin: 8px 0;
          color: #333;
        }
      `}</style>

      <div className="glass-card">
        <h2>PG List</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>PG Name</th>
                <th>Owner Name</th>
                <th>Rent</th>
                <th>Contact Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pgs.length > 0 ? (
                pgs.map((pg, index) => (
                  <tr key={pg._id || index}>
                    <td>{pg.pgName || "-"}</td>
                    <td>{pg.ownerName || "-"}</td>
                    <td>₹{pg.rent || "-"}</td>
                    <td>{pg.contactNumber || "-"}</td>
                    <td>
                      <button
                        onClick={() => handleViewDetails(pg)}
                        className="view-btn"
                      >
                        View
                      </button>
                      <button
                        onClick={() => deletePg(pg._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No PG data found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPG && (
        <div className="pg-details">
          <h3 style={{ textAlign: "center", color: "#5b47fb" }}>PG Details</h3>
          <img
            src={selectedPG.pgURL}
            alt="PG"
            className="pg-image"
          />
          <p><strong>🏠 PG Name:</strong> {selectedPG.pgName}</p>
          <p><strong>👤 Owner Name:</strong> {selectedPG.ownerName}</p>
          <p><strong>💰 Rent:</strong> ₹{selectedPG.rent}</p>
          <p><strong>📞 Contact:</strong> {selectedPG.contactNumber}</p>
          <p><strong>🌍 State:</strong> {selectedPG.stateId?.name || "-"}</p>
          <p><strong>🏙️ City:</strong> {selectedPG.cityId?.name || "-"}</p>
          <p><strong>📍 Area:</strong> {selectedPG.areaId?.name || "-"}</p>
          <p><strong>🔧 Facilities:</strong> {selectedPG.facilities}</p>
          <p><strong>🛏️ Room Type:</strong> {selectedPG.Roomtype}</p>
          <p><strong>🟢 Availability:</strong> {selectedPG.Availability}</p>
          <p><strong>👀 Views:</strong> {selectedPG.views}</p>
        </div>
      )}
    </div>
  );
}

export default PgList;
