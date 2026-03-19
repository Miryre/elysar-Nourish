const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"];

const formatIngredients = (str) => {
  if (!str) return "";
  return str
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" · ");
};

const MealLog = ({ meals }) => {
  return (
    <div className="meal-log">
      <p className="section-label">DAILY LOG</p>

      {MEAL_TYPES.map((type) => {
        const typeMeals = meals.filter((m) => m.type === type);

        return (
          <div key={type} className="meal-section">
            <p className="meal-type-label">{type.toUpperCase()}</p>

            {typeMeals.length === 0 ? (
              <div className="meal-card-empty">
                <span>No {type.toLowerCase()} logged yet</span>
              </div>
            ) : (
              typeMeals.map((meal) => (
                <div className="meal-card" key={meal.id}>
                  <div className="meal-card-info">
                    <p className="meal-name">{meal.mealName}</p>
                    <p className="meal-ingredients">
                      {formatIngredients(meal.ingredients)}
                    </p>
                  </div>
                  <span className="meal-calories">{meal.calories} cal</span>
                </div>
              ))
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MealLog;
