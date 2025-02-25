import { useState } from "react";
import PropTypes from "prop-types";
import "./YogaExercise.css"; 

const YogaExercise = ({ name }) => {
    const [poses, setPoses] = useState([]);
    const [newPose, setNewPose] = useState("");

    const addPose = () => {
        if (newPose.trim() !== "") {
            setPoses([...poses, newPose]);
            setNewPose(""); 
        }
    };

    return (
        <div className="yoga-container">
            <h2 className="yoga-title">{name}</h2>
            <input
                type="text"
                value={newPose}
                onChange={(e) => setNewPose(e.target.value)}
                placeholder="Enter a yoga pose"
                className="yoga-input"
            />
            <button onClick={addPose} className="yoga-button">Add Pose</button>
            <ul className="yoga-list">
                {poses.map((pose, index) => (
                    <li key={index}>{pose}</li>
                ))}
            </ul>
        </div>
    );
};

YogaExercise.propTypes = {
    name: PropTypes.string.isRequired,
};

export default YogaExercise;
