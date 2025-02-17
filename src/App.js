import React, { useState } from "react";
import repetitionExercise from "./components/repetitionExercise";
import durationExercise from "./components/durationExercise";

const exercises = [
  { name: "Push-ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
];

const appStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
  fontFamily: "Arial, sans-serif",
};

const buttonStyles = {
  width: "200px",
  padding: "15px",
  margin: "10px",
  fontSize: "18px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#007BFF",
  color: "white",
  cursor: "pointer",
  textAlign: "center",
};

const backButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#dc3545",
};

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div style={appStyles}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>EXERCISE</h1>
      {selectedExercise ? (
        <>
          <button style={backButtonStyles} onClick={() => setSelectedExercise(null)}>
            Back
          </button>
          {selectedExercise.type === "repetition" ? (
            <repetitionExercise name={selectedExercise.name} />
          ) : (
            <durationExercise name={selectedExercise.name} />
          )}
        </>
      ) : (
        exercises.map((exercise, index) => (
          <button
            key={index}
            style={buttonStyles}
            onClick={() => setSelectedExercise(exercise)}
          >
            {exercise.name.toUpperCase()}
          </button>
        ))
      )}
    </div>
  );
}

export default App;

