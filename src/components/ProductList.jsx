import React from "react";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="card bg-white w-full shadow-xl">
          <div className="card-body">
            <p>#post{product.id}</p>
            <h2 className="card-title text-black">{product.title}</h2>
            <p className="text-black">{product.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
