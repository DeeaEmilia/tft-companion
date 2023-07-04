import Image from "next/image";
import Builder from "../components/Builder";

const Homepage = () => {
  return (
    <div>
      <main className="main-wrapper padding">
        <div className="introduction">
          <h1>Tft Companion</h1>
          <Builder></Builder>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            tempora facilis voluptatum quibusdam ipsum dicta asperiores
            excepturi. Similique sunt perferendis doloremque obcaecati ipsa
            deleniti autem at dolorum temporibus veniam, harum quae, assumenda a
            et quod eum beatae ducimus excepturi ut quam alias? Unde fuga
            voluptate rerum est, ipsum enim animi?
          </p>
          <h2>Something</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            rerum!
          </p>
          <h2>Something</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            rerum!
          </p>
          <h2>Something</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            rerum!
          </p>
        </div>
        <div className="navigation-options">
          <div className="home-cards">
            <h3>Meta Team Comps</h3>
            <Image
              src="./assets/images/arena.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </div>
          <div className="home-cards">
            <h3>Team Builder</h3>
            <Image
              src="./assets/images/carousel.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </div>
          <div className="home-cards">
            <h3>Current Champions List</h3>
            <Image
              src="./assets/images/champions.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </div>
          <div className="home-cards">
            <h3>Current Items List</h3>
            <Image
              src="./assets/images/carousel.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
