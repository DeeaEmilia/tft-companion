import Aside from "../components/Aside";
import ItemList from "../components/ItemsList";

const ItemsListPage = () => {
  return (
    <div>
      <main className="main-wrapper">
        <Aside></Aside>
        <ItemList></ItemList>
      </main>
    </div>
  );
};

export default ItemsListPage;
