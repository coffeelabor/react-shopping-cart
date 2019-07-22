import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = remove => {
    // const removeTheItem = remove.id;
    setCart(cart.filter(item => item.id !== remove));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routes */}
          <Route
            exact
            path="/"
            component={Products}
            //   render={() => <Products products={products} addItem={addItem} />}
          />

          <Route path="/cart" component={ShoppingCart} />
          {/* <Route path="/cart" render={() => <ShoppingCart cart={cart} />} /> */}
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
