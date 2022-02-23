import React from "react";

const Collection2Card = ({
  image,
  hover_image,
  title,
  category_data,
  price,
  discount_price,
  variations,
  tag,
}) => {
  return (
    <div className="product product-2">
      <figure className="product-media">
        {tag ? <span className="product-label label-sale">{label}</span> : null}
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
          <a href="#">{category_data && category_data[0].title}</a>
        </div>
        <h3 className="product-title">
          <a href="product.html">{title}</a>
        </h3>
        {discount_price && Number.isInteger(discount_price) ? (
          <div className="product-price">
            <span className="new-price">Now {price}Fcfa</span>
            <span className="old-price">Was {discount_price}Fcfa</span>
          </div>
        ) : (
          <div className="product-price">{price} Fcfa</div>
        )}
        <div className="product-nav product-nav-thumbs">
          {variations &&
            variations.length > 0 &&
            [...variations]
              .filter((_variation) => (_variation.name = "Colour"))[0]
              .item_variation.map((variation, index) => (
                <a
                  key={Math.random()}
                  href={`product/${variation.value}`}
                  className={index === 0 ? "active" : null}
                >
                  {variation.attachment}
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Collection2Card;
