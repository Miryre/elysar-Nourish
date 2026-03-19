import MealLog from "./Meallog";
import Summary from "./Summary";

const Body = ({ meals }) => {
  return (
    <div className="row body-row">
      <div className="col meal-log-col col-8">
        <MealLog meals={meals} />
      </div>
      <div className="col summary-col border-start col-4">
        <Summary meals={meals} />
      </div>
    </div>
  );
};

export default Body;
