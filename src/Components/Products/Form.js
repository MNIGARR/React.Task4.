import React from "react";
import { useState } from "react";

export default function Form({onAddProduct}) {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

   // const handleItemClick = (product) => {
  //   setFormData({
  //     name: product.name,
  //     description: product.description,
  //     price: product.price,
  //     imageUrl: product.imageUrl,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(name, price, description, imageUrl);
    setName("");
    setDesc("");
    setPrice(0);
    setImageUrl("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text"><br></br>New Product</label>

      <label htmlFor="text"><br></br> Name  </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="text"><br></br> Price  </label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="text"><br></br> Description  </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <label htmlFor="text"><br></br>Image Url  </label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br></br>
      <button type="submit">Add Product</button>
    </form>
  );
}