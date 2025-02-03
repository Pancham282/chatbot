import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Step4TrainingProgress() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Step 4: Training Progress</h2>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/onboarding/step-3")}>
        Back
      </button>
      {progress === 100 && (
        <button className="btn btn-success mt-3 ms-2" onClick={() => alert("Setup Complete!")}>
          Finish
        </button>
      )}
    </div>
  );
}
