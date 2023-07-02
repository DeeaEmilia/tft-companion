import { useRouter } from "next/router";
import items from "../../data/items";
import Navbar from "../../components/Navbar";
import Aside from "../../components/Aside";

const ItemPage = () => {
  // Getting the name parameter from the URL
  const router = useRouter();
  const { itemId } = router.query;

  const item = items.find((item) => item.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <Navbar></Navbar>
      <div className="main-wrapper">
        <Aside></Aside>
        <div>
          <button className="btn" onClick={() => router.back()}>
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
