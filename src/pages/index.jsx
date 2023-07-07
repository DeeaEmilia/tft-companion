import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";

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
        <h3>Something</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          rerum!
        </p>
        <h3>Something</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          rerum!
        </p>
        <h3>Something</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          rerum!
        </p>
      </header>
      <main>
        <Carousel className="navigation-options">
          <Link href="/team-comps-page" className="home-cards">
            <h3>Meta Team Comps</h3>
            <Image
              src="./assets/images/abstract01.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </Link>
          <Link href="/builder-page" className="home-cards">
            <h3>Team Builder</h3>
            <Image
              src="./assets/images/abstract02.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </Link>
          <Link href="/champions-list-page" className="home-cards">
            <h3>Champions List</h3>
            <Image
              src="./assets/images/abstract03.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </Link>
          <Link href="/items-list-page" className="home-cards">
            <h3>Items List</h3>
            <Image
              src="./assets/images/abstract04.webp"
              className="card-image"
              alt="carousel image with items"
              width={1000}
              height={563}
            />
          </Link>
        </Carousel>

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
