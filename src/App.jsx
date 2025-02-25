import { useState } from "react";  
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import YogaExercise from "./components/YogaExercise";


const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration" },
  { name: "Plank", type: "duration" },
  { name: "Yoga", type: "yoga" } 
];

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="container">
      <h1>EXERCISE</h1>
      <img 
        src="https://www.citypng.com/public/uploads/preview/red-star-png-img-701751694532306wyxtusq6bm.png" 
        alt="Star" 
        className="star-icon" 
      />
      
      {selectedExercise ? (
  <>
    <button className="back-button" onClick={() => setSelectedExercise(null)}>←</button>
    {selectedExercise.type === "repetition" ? (
      <RepetitionExercise name={selectedExercise.name} />
    ) : selectedExercise.type === "duration" ? (
      <DurationExercise name={selectedExercise.name} />
    ) : selectedExercise.type === "yoga" ? (
      <YogaExercise name={selectedExercise.name} />
    ) : null}
  </>
) : (
  exercises.map((exercise, index) => {
    console.log("Rendering button for:", exercise); 
    return (
      <button key={index} onClick={() => {
        console.log("Clicked:", exercise); 
        setSelectedExercise(exercise);
      }}>
        {exercise.name.toUpperCase()}
      </button>
    );
  })
)}

    </div>
  );
};

export default App;


