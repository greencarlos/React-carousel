import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ products, itemsPerSlide = 3 }) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(products.length / itemsPerSlide);
  const slides = [];

  for (let i = 0; i < products.length; i += itemsPerSlide) {
    slides.push(products.slice(i, i + itemsPerSlide));
  }

  const next = () => {
    setCurrent((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="carousel-container">
      <button
        onClick={prev}
        className="carousel-btn left"
        disabled={current === 0}
      >
        &#x276E;
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((group, index) => (
            <div className="carousel-slide" key={index}>
              {group.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={next}
        className="carousel-btn right"
        disabled={current === totalSlides - 1}
      >
        &#x276F;
      </button>
    </div>
  );
};

export default Carousel;
