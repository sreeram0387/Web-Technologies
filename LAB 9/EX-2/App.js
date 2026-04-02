import React from "react";

function StudentCard({ name, department, marks }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <h1>Student Cards</h1>

      <div style={styles.cardContainer}>
        <StudentCard name="Rahul" department="CSE" marks={85} />
        <StudentCard name="Anjali" department="ECE" marks={90} />
        <StudentCard name="Kiran" department="IT" marks={78} />
        <StudentCard name="Sneha" department="EEE" marks={88} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  }
};

export default App;
