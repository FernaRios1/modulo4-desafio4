import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarComponent from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import Footer from "./components/footer";
import pizzas from "./components/pizzas";
import PizzaDetail from "./components/pizzadetail";
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error cargando pizzas:", error));
  }, []);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((p) => p.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === pizzaId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  return (
    <Router>
      <NavbarComponent cart={cart} />
      <Routes>
        <Route path="/" element={<Home pizzas={pizzas} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
