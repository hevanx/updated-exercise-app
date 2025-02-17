import React, { useState, useEffect } from "react";

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

const timeStyle = {
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

const DurationExercise = ({ name }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `00:${mins}:${secs}`;
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{name.toUpperCase()}</h2>
      <p style={timeStyle}>{formatTime(time)}</p>
      <button
        style={{ ...buttonStyle, backgroundColor: "#007BFF", color: "white" }}
        onClick={() => setIsRunning(true)}
      >
        Start
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }}
        onClick={() => { setIsRunning(false); setTime(0); }}
      >
        Reset
      </button>
    </div>
  );
};

export default DurationExercise;