import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js"
import { Product } from "./Component/Product";
import Cart from "./Component/Cart";
import Wishlist from "./Component/Wishlist";
import { Login } from "./Component/Login";
import { Navbar } from "./Component/Navbar";
import { ProductDetail } from "./Component/ProductDetails";
import Home from "./Component/Home";
import { RequiresAuth } from "./Component/Auth/RequiresAuth";
import { Error } from "./Component/Error";
import { SignUp } from "./Component/SignUp";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<RequiresAuth ><Cart /></RequiresAuth>} />
        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Error />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
