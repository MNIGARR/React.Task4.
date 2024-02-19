import './App.css';
import Products from '../Products/Products';
import Form from '../Products/Form';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    {
      name: "Iphone xr",
      price: 1800,
      description: "Mobile Phone",
      imageUrl: "https://www.ohlocal.in/_next/image?url=https%3A%2F%2Fohlocal-media.s3.amazonaws.com%2Fmedia%2FSM129992AP.jpg&w=256&q=75",
    },
    {
      name: "Samsung s24+",
      price: 2100,
      description: "Mobile phone",
      imageUrl: "https://static.doji.co/product/medias/smartphones/apple/iphone-14-plus/1-front-back-midnight-thumbnail.png",
    }
  ]);

  const handleAdd = (name, price, description, imageUrl) => {
    const item = {
      name,
      price,
      description,
      imageUrl,
    };
    setProducts([products + item]);
  };
  return (
    <div className="App">
      <Form onAddProduct={handleAdd}></Form>

      {products.map((p) => (
        <Products  product={p}></Products>
      ))}
    </div>
  );
   
}

export default App;
