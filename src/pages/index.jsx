import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";

const Homepage = () => {
  return (
    <div className="main-wrapper">
      <header className="introduction">
        <h1>TFT COMPANION</h1>

        <div className="intro text-wrapper">
          <h2>WIN MORE IN TEAMFIGHT TACTICS</h2>
          <p>
            TFT Companion is your indispensable gaming ally, designed to elevate
            your Teamfight Tactics TFT experience and empower you to conquer the
            ladder with confidence. Whether you&apos;re a seasoned TFT veteran
            or just starting your journey, TFT Companion is packed with features
            that will give you the competitive edge you need.
          </p>
        </div>

        <div className="text-wrapper">
          <h3>Community Comps</h3>
          <p>
            Our platform boasts a diverse collection of meticulously crafted
            team compositions, carefully curated by TFT enthusiasts from around
            the world. These comps span the entire spectrum, from hilarious meme
            builds that will leave your opponents bewildered, to highly
            optimized competitive strategies that can propel you to the highest
            ranks. No matter your playstyle or preferred approach, you&apos;ll
            find a comp that suits you.
          </p>
        </div>

        <div className="text-wrapper">
          <h3>Strategic Insights</h3>
          <p>
            In addition to community-created comps, TFT Companion provides you
            with invaluable strategic insights and analysis. Discover in-depth
            guides, tips, and tricks that will help you understand the
            intricacies of the game. Uncover the secrets of econ management,
            positioning, itemization, and more. With this knowledge at your
            fingertips, you&apos;ll make informed decisions that can turn the
            tide of battle in your favor.
          </p>
        </div>

        <div className="text-wrapper">
          <h3>Real-time Updates</h3>
          <p>
            Stay in the loop with real-time updates on the TFT meta, patch
            notes, and balance changes. As the game evolves, TFT Companion
            ensures you&apos;re always up to date. Adapt swiftly to the
            ever-shifting landscape of TFT and adapt your strategies
            accordingly.
          </p>
        </div>

        <div className="text-wrapper">
          <h3>Something</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            rerum!
          </p>
        </div>
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
