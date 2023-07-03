import { useRouter } from "next/router";
import Image from "next/image";
import items from "../../data/items";

const ItemPage = () => {
  // Getting the name parameter from the URL
  const router = useRouter();
  const { itemId } = router.query;

  const item = items.find((item) => item.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <div className="main-wrapper">
        <div>
          <button className="btn" onClick={() => router.back()}>
            Go back
          </button>
          <p>{item.name}</p>
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            width={50}
            height={50}
          />
          <p>Components: {item.components.join(" + ")}</p>
          <p>Description: {item.description}</p>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticPaths() {
//   const paths = items.map((item) => ({
//     params: { itemId: item.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const item = items.find((item) => item.id.toString() === params.itemId);
//   return { props: { item } };
// }

export default ItemPage;
