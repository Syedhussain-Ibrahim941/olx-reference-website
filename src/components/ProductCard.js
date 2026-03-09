function ProductCard({ product, wishlist, toggleWishlist }) {

  const isWishlisted = wishlist.some((item)=>item.id === product.id);

  return (
    <div className="card">

      {/* HEART BUTTON */}

      <span
        className="heart"
        onClick={()=>toggleWishlist(product)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </span>

      <img src={product.image} alt={product.name} />

      <div className="card-body">

        <h3 className="price">{product.price}</h3>

        <p className="product-name">{product.name}</p>

        <button className="buy-btn">Buy Now</button>

      </div>

    </div>
  );

}

export default ProductCard;