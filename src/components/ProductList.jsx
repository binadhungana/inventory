import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setProducts(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <>Loading...</>;
  if (error) return <>{error.message}</>;

  // Filtered products based on searchText using case insentative
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  // const filteredProducts = products.filter((product) =>
  //   product.title.includes(searchText)
  // );

  return (
    <>
      <Input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
