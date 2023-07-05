import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productlist, setProductlist] = useState([]);
  const [query, setQuery] = useSearchParams();

  const gerProducts = async () => {
    const searchQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/slzlxn/zara_react/products?q=${searchQuery}`;
    let responsive = await fetch(url);

    let data = await responsive.json();
    console.log(responsive, data);
    setProductlist(data);
  };
  useEffect(() => {
    gerProducts();
  }, [query]);

  return (
    <div className="container productAll">
      <div className="row ">
        {productlist.map((item) => {
          return (
            <div key={item.id} className="col-md-3 col-12">
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductAll;