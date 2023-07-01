import { useParams, useNavigate } from "react-router-dom";
import items from "../data/items";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const ItemPage = () => {
  const { itemId } = useParams();

  // Instantiate navigate
  const navigate = useNavigate();

  const item = items.find((item) => item.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <Navbar></Navbar>
      <div className="main-wrapper">
        <Aside></Aside>
        <div>
          <button className="btn" onClick={() => navigate(-1)}>
            Go back
          </button>
          <p>{item.name}</p>
          <img src={item.icon} alt={`${item.name} icon`} />
          <p>Components: {item.components.join(" + ")}</p>
          <p>Description: {item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
