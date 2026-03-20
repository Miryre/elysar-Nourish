import MealLog from "./Meallog";
import Summary from "./Summary";

const Body = ({ meals, deleteMeal, water, setWater, mood, setMood, notes, setNotes, entries, saveEntry }) => {
  return (
    <div className="row body-row">
      <div className="col-12 col-md-8 meal-log-col">
        <MealLog meals={meals} deleteMeal={deleteMeal} entries={entries} />
      </div>
      <div className="col-12 col-md-4 summary-col summary-divider">
        <Summary
          meals={meals}
          water={water}
          setWater={setWater}
          mood={mood}
          setMood={setMood}
          notes={notes}
          setNotes={setNotes}
          saveEntry={saveEntry}
        />
      </div>
    </div>
  );
};

export default Body;
