import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js"
import { Product } from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart";
import Wishlist from "./Component/Wishlist/Wishlist";
import { Login } from "./Component/Login/Login";
import { Navbar } from "./Component/Navbar/Navbar";
import { ProductDetail } from "./Component/ProductDetail/ProductDetails";
import Home from "./Component/Home/Home";
import { RequiresAuth } from "./Component/Auth/RequiresAuth";
import { Error } from "./Component/Error";
import { SignUp } from "./Component/Singup/SignUp";
import Checkout from "./Component/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<RequiresAuth ><Cart /></RequiresAuth>} />
        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
        <Route path="/check-out" element={<RequiresAuth><Checkout /></RequiresAuth>} />
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
