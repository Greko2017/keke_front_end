import React from "react";
import Collection4Card from "./Collection4Card";

const collection4products = [
  {
    title: "Tie-detail top",
    category: "Clothing",
    price: { new_price: "Now $3.99", old_price: "was $6.99" },
    image: "assets/images/demos/demo-8/products/product-5-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-5-2.jpg",
    tag: "sale",
  },
  {
    title: "Sandals",
    category: "Shoes",
    price: "$12.99",
    image: "assets/images/demos/demo-8/products/product-6-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-6-2.jpg",
    variations: [],
  },
  {
    title: "Small bucket bag",
    category: "Bags",
    price: "$14.99",
    image: "assets/images/demos/demo-8/products/product-7-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-7-2.jpg",
    variations: [
      {
        image: "assets/images/demos/demo-8/products/product-7-thumb.jpg",
        id: 1,
      },
      {
        image: "assets/images/demos/demo-8/products/product-7-2-thumb.jpg",
        id: 2,
      },
    ],
  },
  {
    title: "Printed sweatshirt",
    category: "Clothing",
    price: { new_price: "Now $7.99", old_price: "was $12.99" },
    image: "assets/images/demos/demo-8/products/product-8-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-8-2.jpg",
    variations: [],
    tag: "sale",
  },
  {
    title: "Linen-blend paper bag trousers",
    category: "Clothing",
    price: "$17.99",
    image: "assets/images/demos/demo-8/products/product-9-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-9-2.jpg",
  },
  {
    title: "Linen-blend paper bag trousers",
    category: "Clothing",
    price: "$17.99",
    image: "assets/images/demos/demo-8/products/product-10-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-10-2.jpg",
  },
  {
    title: "Linen-blend paper bag trousers",
    category: "Clothing",
    price: "$17.99",
    image: "assets/images/demos/demo-8/products/product-11-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-11-2.jpg",
  },
  {
    title: "Linen-blend paper bag trousers",
    category: "Clothing",
    price: "$17.99",
    image: "assets/images/demos/demo-8/products/product-12-1.jpg",
    hover_image: "assets/images/demos/demo-8/products/product-12-2.jpg",
  },
];

const Collection4 = () => {
  return (
    <div className="container recent-arrivals">
      <div className="heading heading-flex align-items-center mb-3">
        <h2 className="title title-lg">Recent Arrivals</h2>
        <ul
          className="nav nav-pills nav-border-anim justify-content-center"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="recent-all-link"
              data-toggle="tab"
              href="#recent-all-tab"
              role="tab"
              aria-controls="recent-all-tab"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="recent-women-link"
              data-toggle="tab"
              href="#recent-women-tab"
              role="tab"
              aria-controls="recent-women-tab"
              aria-selected="false"
            >
              Women
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="recent-men-link"
              data-toggle="tab"
              href="#recent-men-tab"
              role="tab"
              aria-controls="recent-men-tab"
              aria-selected="false"
            >
              Men
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="recent-shoes-link"
              data-toggle="tab"
              href="#recent-shoes-tab"
              role="tab"
              aria-controls="recent-shoes-tab"
              aria-selected="false"
            >
              Shoes & Boots
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div
          className="tab-pane p-0 fade show active"
          id="recent-all-tab"
          role="tabpanel"
          aria-labelledby="recent-all-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              {collection4products.map((_product) => (
                <Collection4Card
                  key={Math.random()}
                  title={_product.title}
                  category={_product.category}
                  price={_product.price}
                  variations={_product.variations}
                  image={_product.image}
                  hover_image={_product.hover_image}
                  tag={_product.tag}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="recent-women-tab"
          role="tabpanel"
          aria-labelledby="recent-women-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              {collection4products.slice(1, 3).map((_product) => (
                <Collection4Card
                  key={Math.random()}
                  title={_product.title}
                  category={_product.category}
                  price={_product.price}
                  variations={_product.variations}
                  image={_product.image}
                  hover_image={_product.hover_image}
                  tag={_product.tag}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="recent-men-tab"
          role="tabpanel"
          aria-labelledby="recent-men-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              {collection4products.slice(5, 7).map((_product) => (
                <Collection4Card
                  key={Math.random()}
                  title={_product.title}
                  category={_product.category}
                  price={_product.price}
                  variations={_product.variations}
                  image={_product.image}
                  hover_image={_product.hover_image}
                  tag={_product.tag}
                />
              ))}
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="recent-shoes-tab"
            role="tabpanel"
            aria-labelledby="recent-shoes-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                {collection4products.slice(0, 4).map((_product) => (
                  <Collection4Card
                    key={Math.random()}
                    title={_product.title}
                    category={_product.category}
                    price={_product.price}
                    variations={_product.variations}
                    image={_product.image}
                    hover_image={_product.hover_image}
                    tag={_product.tag}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-container text-center mt-3 mb-3">
        <a href="category.html" className="btn btn-outline-dark-3 btn-more">
          <span>View More</span>
          <i className="icon-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Collection4;
