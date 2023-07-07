/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const length = children.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel">
      <button className="slide-btn" onClick={prevSlide}>
        &larr;
      </button>
      {children.map((child, index) => {
        return (
          <div
            className={index === current ? "slide slide-active" : "slide"}
            key={index}>
            {index === current && child}
          </div>
        );
      })}
      <button className="slide-btn" onClick={nextSlide}>
        &rarr;
      </button>
    </section>
  );
};

export default Carousel;
