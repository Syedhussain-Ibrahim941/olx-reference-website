import { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../data/Products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home({ wishlist, toggleWishlist }) {

  const [visible,setVisible] = useState(8);
  const [search,setSearch] = useState("");

  const filteredProducts = Products.filter((p)=>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Navbar setSearch={setSearch}/>

      <h2 style={{padding:"20px"}}>Latest Products</h2>

      <div className="products">

        {filteredProducts.slice(0,visible).map((p)=>(
          <ProductCard
            key={p.id}
            product={p}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}

      </div>

      {visible < filteredProducts.length && (

        <button
          className="load-more"
          onClick={()=>setVisible(visible+8)}
        >
          Load More
        </button>

      )}
     <Footer/>
    </div>
  );

}

export default Home;