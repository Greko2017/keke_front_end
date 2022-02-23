import React from "react";

const Collection4Card = ({
  image,
  hover_image,
  title,
  category,
  price,
  variations,
  tag,
}) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="product product-2 text-center">
        <figure className="product-media">
          {tag ? <span className="product-label label-sale">{tag}</span> : null}
          <a href="product.html">
            <img src={image} alt="Product image" className="product-image" />
            <img
              src={hover_image}
              alt="Product image"
              className="product-image-hover"
            />
          </a>

          <div className="product-action-vertical">
            <a
              href="#"
              className="btn-product-icon btn-wishlist btn-expandable"
              title="Add to wishlist"
            >
              <span>add to wishlist</span>
            </a>
          </div>

          <div className="product-action ">
            <a href="#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
          </div>
        </figure>

        <div className="product-body">
          <div className="product-cat">
            <a href="#">{category}</a>
          </div>
          <h3 className="product-title">
            <a href="product.html">{title}</a>
          </h3>
          {price instanceof Object ? (
            <div className="product-price">
              <span className="new-price">{price.new_price}</span>
              <span className="old-price">{price.old_price}</span>
            </div>
          ) : (
            <div className="product-price">{price}</div>
          )}
          <div className="product-nav product-nav-thumbs">
            {variations &&
              variations.map((product, index) => (
                <a
                  key={index}
                  href={`product/${product.slug}`}
                  className={index === 0 ? "active" : null}
                >
                  <img src={product.image} alt="product desc" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection4Card;
