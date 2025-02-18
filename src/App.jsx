import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise/index.jsx";
import DurationExercise from "./components/DurationExercise/index.jsx";

const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
];

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="container">
      <h1>EXERCISE</h1>
      <img src="https://www.citypng.com/public/uploads/preview/red-star-png-img-701751694532306wyxtusq6bm.png" alt="Star" className="star-icon" />
      {selectedExercise ? (
        <>
          <button className="back-button" onClick={() => setSelectedExercise(null)}>←</button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : (
            <DurationExercise name={selectedExercise.name} />
          )}
        </>
      ) : (
        exercises.map((exercise, index) => (
          <button key={index} onClick={() => setSelectedExercise(exercise)}>
            {exercise.name.toUpperCase()}
          </button>
        ))
      )}
    </div>
  );
};

export default App;
