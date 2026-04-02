import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>API Data</h1>
      <ul style={styles.list}>
        {data.slice(0, 10).map((item) => (
          <li key={item.id} style={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  card: {
    backgroundColor: "#f0f0f0",
    margin: "10px auto",
    padding: "15px",
    width: "60%",
    borderRadius: "10px"
  }
};

export default App;
