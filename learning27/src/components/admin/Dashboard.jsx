import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPGs: 0,
    totalOwners: 0,
    totalViews: 0
  });

  useEffect(() => {
    axios.get("/dashboard/stats")
      .then(response => {
        console.log("Dashboard Data:", response.data);
        setStats(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching dashboard stats:", error);
      });
  }, []);

  // 📊 Combined Chart Data
  const chartData = [
    {
      name: "PG Finder Stats",
      PGs: stats.totalPGs,
      Owners: stats.totalOwners,
      Views: stats.totalViews
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 PG Finder Dashboard</h2>

      {/* Stat Cards */}
      <div style={styles.statsContainer}>
        <div style={{ ...styles.card, background: "#3498db" }}>
          <h3>Total PGs</h3>
          <p>{stats.totalPGs}</p>
        </div>

        <div style={{ ...styles.card, background: "#e74c3c" }}>
          <h3>Total Owners</h3>
          <p>{stats.totalOwners}</p>
        </div>

        <div style={{ ...styles.card, background: "#2ecc71" }}>
          <h3>Total Views</h3>
          <p>{stats.totalViews}</p>
        </div>
      </div>

      {/* 📈 Combined Bar Chart */}
      <div style={styles.chartBox}>
        <h3 style={styles.chartTitle}>PG Finder Statistics Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="PGs" fill="#3498db" />
            <Bar dataKey="Owners" fill="#e74c3c" />
            <Bar dataKey="Views" fill="#2ecc71" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// ✨ Simple CSS-in-JS Styling
const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#2c3e50",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  card: {
    width: "250px",
    padding: "20px",
    color: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontSize: "20px",
    fontWeight: "bold",
  },
  chartBox: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  chartTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#555",
  },
};

export default Dashboard;
