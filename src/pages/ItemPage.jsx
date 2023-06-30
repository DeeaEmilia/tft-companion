import { useParams, useNavigate } from "react-router-dom";
import items from "../data/items";
import classes from "./ItemPage.module.scss";

const ItemPage = () => {
  const { itemId } = useParams();

  // Instantiate navigate
  const navigate = useNavigate();

  const item = items.find((item) => item.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      ItemPage
      <button className={classes.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
      <p>{item.name}</p>
      <img src={item.icon} alt={`${item.name} icon`} />
      <p>Components: {item.components.join(" + ")}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

export default ItemPage;
