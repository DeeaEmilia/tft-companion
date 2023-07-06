import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <Link href={`/page${i + 1}`}>
          <Image
            src={`/assets/images/abstract0${i + 1}.webp`}
            width={100}
            height={56}
            alt={`Page ${i + 1}`}
            className="card-dots"
          />
        </Link>
      );
    },
    className: "center",
    centerMode: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
        <Slider {...settings} className="navigation-options">
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
        </Slider>

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
