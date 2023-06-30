import { useNavigate } from "react-router-dom";
import classes from "./ItemPage.module.scss";

const ItemPage = () => {
  // Instantiate navigate
  const navigate = useNavigate();
  return (
    <div>
      ItemPage
      <button className={classes.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default ItemPage;
