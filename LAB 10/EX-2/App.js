import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: input
    };
    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Item List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Enter item"
        />
        <button onClick={addItem} style={styles.button}>Add</button>
      </div>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul style={styles.list}>
          {items.map(item => (
            <li key={item.id} style={styles.listItem}>
              {item.text}
              <button onClick={() => removeItem(item.id)} style={styles.deleteButton}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  inputContainer: {
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    width: "200px",
    marginRight: "10px"
  },
  button: {
    padding: "10px 15px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteButton: {
    padding: "5px 10px"
  }
};

export default App;
