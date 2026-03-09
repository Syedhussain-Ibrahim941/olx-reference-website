import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./form_pages/Login";
import Home from "./form_pages/Home";
import Wishlist from "./form_pages/Wishlist";

function App() {

  const [wishlist,setWishlist] = useState([]);

  const toggleWishlist = (product)=>{

    const exists = wishlist.find((item)=>item.id === product.id);

    if(exists){
      setWishlist(wishlist.filter((item)=>item.id !== product.id));
    }else{
      setWishlist([...wishlist,product]);
    }

  };

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <Home
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;