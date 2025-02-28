// ProductGallery.js
import React, { useState } from "react";
import "./styles.css";

const initialProducts = [
  { id: 1, name: "dresses for Women", description: "Cool and stylish", price: "₹1000", image: "cloth1.jpg" },
  { id: 2, name: "H&M short dresses", description: "Women knee length dress", price: "₹2000", image: "cloth2.jpg" },
  { id: 3, name: "Flora dresses", description: "Stylish and durable", price: "₹2500", image: "cloth3.jpg" }
];

const ProductGallery = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      description: `Description ${products.length + 1}`,
      price: `₹${(products.length + 1) * 1000}`,
      image: `bag${(products.length % 3) + 1}.jpg`
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container">
      <h1>Product Gallery</h1>
      <div className="actions">
        <button onClick={addProduct}>Add Product</button>
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid">
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <button className="delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductGallery;
