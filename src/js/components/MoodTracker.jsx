const HOURS = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const MOODS = ["Great", "Good", "Meh", "Low"];

export const MOOD_COLORS = {
  Great: "#74c69d",
  Good: "#a8d5b5",
  Meh: "#c9935a",
  Low: "#c07a6a",
};

const formatHour = (h) => {
  if (h === 12) return "12p";
  return h > 12 ? `${h - 12}p` : `${h}a`;
};

const MoodTracker = ({ mood, setMood }) => {
  // Clicking cycles: empty → Great → Good → Meh → Low → empty
  const cycleMood = (hour) => {
    const current = mood[hour];
    if (!current) {
      setMood({ ...mood, [hour]: "Great" });
    } else {
      const idx = MOODS.indexOf(current);
      const next = MOODS[idx + 1] ?? null;
      const updated = { ...mood };
      if (next === null) {
        delete updated[hour];
      } else {
        updated[hour] = next;
      }
      setMood(updated);
    }
  };

  return (
    <div className="mood-tracker">
      <div className="mood-grid">
        {HOURS.map((hour) => {
          const currentMood = mood[hour];
          return (
            <button
              key={hour}
              className="mood-hour-block"
              style={{ background: currentMood ? MOOD_COLORS[currentMood] : "#1e3c42" }}
              onClick={() => cycleMood(hour)}
              title={currentMood || "Click to log mood"}
            >
              <span className="mood-hour-label">{formatHour(hour)}</span>
            </button>
          );
        })}
      </div>

      <div className="mood-legend">
        {MOODS.map((m) => (
          <div key={m} className="mood-legend-item">
            <div className="mood-legend-dot" style={{ background: MOOD_COLORS[m] }} />
            <span>{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
