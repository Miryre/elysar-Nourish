import { useState } from "react";

const DAILY_GOAL = 2000;
const MOODS = ["Great", "Good", "Meh", "Low"];

const Summary = ({ meals }) => {
  const [water, setWater] = useState(0);
  const [mood, setMood] = useState(null);
  const [notes, setNotes] = useState("");

  const totalCalories = meals.reduce((sum, m) => sum + (m.calories || 0), 0);
  const percentage = Math.min(totalCalories / DAILY_GOAL, 1);

  const caloriesByType = (type) =>
    meals
      .filter((m) => m.type === type)
      .reduce((sum, m) => sum + (m.calories || 0), 0);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference * (1 - percentage);

  const handleWaterClick = (index) => {
    if (index < water) {
      setWater(index);
    } else {
      setWater(index + 1);
    }
  };

  return (
    <div className="summary-panel">
      <p className="summary-label">CALORIES</p>

      <div className="calories-ring-wrapper">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <circle
            cx="90" cy="90" r={radius}
            fill="none"
            stroke="#4a6368"
            strokeWidth="10"
          />
          <circle
            cx="90" cy="90" r={radius}
            fill="none"
            stroke="#84a98c"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            transform="rotate(-90 90 90)"
          />
        </svg>

        <div className="calories-overlay">
          <span className="calories-total">{totalCalories.toLocaleString()}</span>
          <span className="calories-goal">/ {DAILY_GOAL.toLocaleString()}</span>
        </div>
      </div>

      <div className="calories-breakdown">
        {["Breakfast", "Lunch", "Snack"].map((type) => (
          <div key={type} className="breakdown-item">
            <span className="breakdown-value">{caloriesByType(type)}</span>
            <span className="breakdown-type">{type.toLowerCase()}</span>
          </div>
        ))}
      </div>

      <p className="summary-label">WATER</p>

      <div className="water-grid">
        {Array.from({ length: 8 }, (_, i) => (
          <button
            key={i}
            className={`water-glass ${i < water ? "filled" : ""}`}
            onClick={() => handleWaterClick(i)}
            aria-label={`Glass ${i + 1}`}
          />
        ))}
      </div>
      <p className="water-count">{water} of 8 glasses</p>

      <p className="summary-label">MOOD</p>

      <div className="mood-buttons">
        {MOODS.map((m) => (
          <button
            key={m}
            className={`mood-btn ${mood === m ? "active" : ""}`}
            onClick={() => setMood(mood === m ? null : m)}
          >
            {m}
          </button>
        ))}
      </div>

      <textarea
        className="notes-input"
        placeholder="Any notes about today..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
};

export default Summary;
