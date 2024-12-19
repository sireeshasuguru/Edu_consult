import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import {getProducts} from "../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.courses);
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <>
      <Navbar/>

      <section id="products" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold  mb-6 font-cinzel">Explore</h2>
          <p className="text-lg  mb-12">
            Explore our range of services designed to guide you on your
            educational and professional journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-blue-600 font-semibold text-lg mb-4">
                  ₹ {product.price}
                </div>
                <button className="bg-blue-600  py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                  Entroll
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
