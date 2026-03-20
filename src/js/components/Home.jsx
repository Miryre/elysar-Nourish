import { useState } from "react";
import AddMealModal from "./AddMealModal";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import TabBar from "./TabBar";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [water, setWater] = useState(0);
  const [mood, setMood] = useState({});
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState([]);

  const addMeal = (newMeal) => {
    setMeals([...meals, { id: meals.length + 1, ...newMeal }]);
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const saveEntry = () => {
    const entry = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      meals: [...meals],
      water,
      mood,
      notes,
      totalCalories: meals.reduce((sum, m) => sum + (m.calories || 0), 0),
    };

    setEntries([...entries, entry]);
    setMeals([]);
    setWater(0);
    setMood({});
    setNotes("");
  };

  return (
    <div className="text-center">
      <Navbar />
      <Body
        meals={meals}
        deleteMeal={deleteMeal}
        water={water}
        setWater={setWater}
        mood={mood}
        setMood={setMood}
        notes={notes}
        setNotes={setNotes}
        entries={entries}
        saveEntry={saveEntry}
      />
      <Footer />
      <TabBar />
      <AddMealModal addMeal={addMeal} />
    </div>
  );
};

export default Home;
