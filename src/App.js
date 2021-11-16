import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
         {/* User UI */}
        <Route path="/" exact component={Home} />
        <Route path="/kits" component={Category} />
        <Route path="/bras" component={Category} />
        <Route path="/panties" component={Category} />
        <Route path="/swimwear" component={Category} />
        <Route path="/sale" component={Category} />
        <Route path="/allCategories" component={Category} />
        <Route path="/product/:id" component={Product} />

         {/* Admin UI */}
        <Route path="/auth" component={Auth} />
      </Switch>
      <Footer />
      <Cart />
    </BrowserRouter>
  );
}

export default App;
