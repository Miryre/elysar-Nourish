const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"];

const formatIngredients = (str) => {
  if (!str) return "";
  return str
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" · ");
};

const MealLog = ({ meals, deleteMeal, entries }) => {
  return (
    <div className="meal-log">
      <p className="section-label">DAILY LOG</p>

      {meals.length === 0 && entries.length === 0 ? (
        <div className="meal-card-empty">
          <span>No meals logged yet. Tap + Add meal to get started.</span>
        </div>
      ) : (
        <>
          {MEAL_TYPES.map((type) => {
            const typeMeals = meals.filter((m) => m.type === type);
            if (typeMeals.length === 0) return null;

            return (
              <div key={type} className="meal-section">
                <p className="meal-type-label">{type.toUpperCase()}</p>
                {typeMeals.map((meal) => (
                  <div className="meal-card" key={meal.id}>
                    <div className="meal-card-info">
                      <p className="meal-name">{meal.mealName}</p>
                      <p className="meal-ingredients">
                        {formatIngredients(meal.ingredients)}
                      </p>
                    </div>
                    <div className="meal-card-right">
                      <span className="meal-calories">{meal.calories} cal</span>
                      <button className="delete-btn" onClick={() => deleteMeal(meal.id)}>✕</button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {entries.length > 0 && (
            <div className="saved-entries">
              <p className="section-label">SAVED ENTRIES</p>
              {entries.map((entry) => (
                <div key={entry.id} className="entry-card">
                  <div className="entry-header">
                    <span className="entry-time">{entry.timestamp}</span>
                    <span className="entry-calories">{entry.totalCalories} cal</span>
                  </div>

                  <div className="entry-meta">
                    {entry.mood && <span className="entry-tag">{entry.mood}</span>}
                    <span className="entry-tag">{entry.water} of 8 glasses</span>
                    <span className="entry-tag">{entry.meals.length} meal{entry.meals.length !== 1 ? "s" : ""}</span>
                  </div>

                  {entry.notes && <p className="entry-notes">"{entry.notes}"</p>}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MealLog;
