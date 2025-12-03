import { useState, useEffect } from "react";
import Carousel from "./Carousel.jsx";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("data", data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <div>
      <h1>Fake Store</h1>
      <Carousel products={products} itemsPerSlide={1} />
      <Carousel products={products} itemsPerSlide={3} />
      <Carousel products={products} itemsPerSlide={2} />
      <Carousel products={products} itemsPerSlide={4} />
    </div>
  );
};

export default Homepage;
