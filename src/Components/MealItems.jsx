import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import cartContext from "../store/CartContext";

const MealItems = ({ meal }) => {
  const cartCtx = useContext(cartContext);

  const handleAddMealTocart = () => {
    cartCtx.addItem(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.mame}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealTocart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItems;
