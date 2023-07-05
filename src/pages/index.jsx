import Image from "next/image";

const Homepage = () => {
  return (
    <div className="main-wrapper">
      <header className="introduction">
        <h1>TFT Companion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          tempora facilis voluptatum quibusdam ipsum dicta asperiores excepturi.
          Similique sunt perferendis doloremque obcaecati ipsa deleniti autem at
          dolorum temporibus veniam, harum quae, assumenda a et quod eum beatae
          ducimus excepturi ut quam alias? Unde fuga voluptate rerum est, ipsum
          enim animi?
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
      </header>
      <main>
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

        <div className="about-page">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut
            tenetur officia eius porro quis provident exercitationem, iusto non
            nesciunt eos vitae totam repellendus! Placeat provident quis rem hic
            nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut
            tenetur officia eius porro quis provident exercitationem, iusto non
            nesciunt eos vitae totam repellendus! Placeat provident quis rem hic
            nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut
            tenetur officia eius porro quis provident exercitationem, iusto non
            nesciunt eos vitae totam repellendus! Placeat provident quis rem hic
            nemo!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
