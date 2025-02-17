import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

const countStyle = {
  fontSize: "30px",
  margin: "20px 0",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const RepetitionExercise = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{name.toUpperCase()}</h2>
      <p style={countStyle}>{count}/10 REPS</p>
      <button style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }} onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button style={{ ...buttonStyle, backgroundColor: "#ffc107", color: "black" }} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default RepetitionExercise;