import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Wishlist({ wishlist, toggleWishlist }){

  return(
    <div>

      <Navbar/>

      <h2 style={{padding:"20px"}}>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p style={{padding:"20px"}}>No items in wishlist</p>
      ) : (

        <div className="products">

          {wishlist.map((p)=>(
            <ProductCard
              key={p.id}
              product={p}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          ))}
         
        </div>

      )}

    </div>
  )

}

export default Wishlist;