import React from "react";
import Navbar from "./components/Home/NavBar/navBar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./pages/Category";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kits" component={Category} />
        <Route path="/bras" component={Category} />
        <Route path="/panties" component={Category} />
        <Route path="/swimwear" component={Category} />
        <Route path="/sale" component={Category} />
        <Route path="/allCategory" component={Category} />
        <Route path="/auth" component={Auth} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
