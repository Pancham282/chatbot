import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Step4TrainingProgress() {
  const navigate = useNavigate();
  
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Initializing training...");

  useEffect(() => {
    // Simulating training progress
    const progressIntervals = [
      { percent: 20, message: "Analyzing scraped data..." },
      { percent: 50, message: "Building knowledge base..." },
      { percent: 80, message: "Refining chatbot responses..." },
      { percent: 100, message: "Training complete!" },
    ];
 
    let index = 0;
    const interval = setInterval(() => {
      if (index < progressIntervals.length) {
        setProgress(progressIntervals[index].percent);
        setStatusMessage(progressIntervals[index].message);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Chatbot Training</h2>

        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>

        <p className="text-center">{statusMessage}</p>

        <button className="btn btn-secondary w-100 mt-2" disabled={progress < 100}>
          Wait for Training
        </button>
        <button className="btn btn-primary w-100 mt-2" onClick={() => navigate("/integration")}>Continue to Next Step</button>
      </div>


    </div>
  );
}
