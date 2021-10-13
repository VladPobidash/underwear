import React from "react";
import Navbar from "./components/Home/NavBar/navBar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./pages/Category";



function App() {
  return (
     <BrowserRouter>
     <Navbar />
     <Switch>
         <Route path="/" exact component={Home} />
        <Route path="/kits"  render={(props) => <Category {...props} categoryName="комплекти"/>} />
      </Switch>
     </BrowserRouter>
  );
}

export default App;
