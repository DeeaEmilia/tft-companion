import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import ItemList from "../components/ItemsList";

const ItemsListPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="p-main-wrapper">
        <Aside></Aside>
        <ItemList></ItemList>
      </main>
    </div>
  );
};

export default ItemsListPage;
