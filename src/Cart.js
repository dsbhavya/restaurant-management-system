import React, { useState } from 'react';
import './Cart.css';
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    image: 'https://via.placeholder.com/300x200?text=Product+1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.99,
    image: 'https://via.placeholder.com/300x200?text=Product+2',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 8.99,
    image: 'https://via.placeholder.com/300x200?text=Product+3',
  },
  // Add more products here
];

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    const updatedTotalPrice = totalPrice + product.price;
    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <div className="shopping-cart">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
