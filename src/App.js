import "./App.css";
import { Routes, Route} from "react-router-dom";
import {
      Home,
      Login,
      Signup, 
      Cart, 
      Wishlist, 
      Products } from  "./frontend/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/home" element = { <Home/> }/>
        <Route path= "/login" element = { <Login/> }/>
        <Route path= "/signup" element = { <Signup/> }/>
        <Route path= "/cart" element = { <Cart/> }/>
        <Route path= "/wishlist" element = { <Wishlist/> }/>
        <Route path= "/products" element = { <Products/> }/>
      </Routes>  
    </div>
  );
}

export default App;
