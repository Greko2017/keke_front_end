import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { collection2products } from "../../dummy_data";
import Collection2Card from "./Collection2Card";

const Collection2 = () => {
  const { products } = useSelector((state) => {
    // console.log(`products`, state.shop.products);
    return {
      products: state.shop.products,
    };
  });

  // useEffect(() => {
  //   const tmp_products = [...products];

  //   productsSelector(tmp_products).then((res) => setProductList(res));
  // }, []);
  // const Collection2Card = React.lazy(() => import("./Collection2Card"));
  console.log(
    `--- In Collection2 products:>>`,
    products.filter((prod) => {
      let _eval = null;
      prod?.category_data.forEach((ctg) =>
        ctg.front_end_position === "c2_featured"
          ? (_eval = true)
          : (_eval = false)
      );
      return _eval;
    })
  );
  const TestCard = () => {
    return products
      .filter((prod) => {
        let _eval = null;
        prod?.category_data.forEach((ctg) =>
          ctg.front_end_position === "c2_featured"
            ? (_eval = true)
            : (_eval = false)
        );
        return _eval;
      })
      .map((_product) => (
        <div className="owl-item active">
          <Collection2Card
            key={Math.random()}
            title={_product.title}
            category={_product.category}
            price={_product.price}
            variations={_product.variations}
            image={_product.image}
            hover_image={_product.hover_image}
            tag={_product.tag}
          />
        </div>
      ));
  };
  return (
    <div className="container">
      <ul
        className="nav nav-pills nav-big nav-border-anim justify-content-center mb-2 mb-md-3"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="products-featured-link"
            data-toggle="tab"
            href="#products-featured-tab"
            role="tab"
            aria-controls="products-featured-tab"
            aria-selected="true"
          >
            Featured
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="products-sale-link"
            data-toggle="tab"
            href="#products-sale-tab"
            role="tab"
            aria-controls="products-sale-tab"
            aria-selected="false"
          >
            On Sale
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="products-top-link"
            data-toggle="tab"
            href="#products-top-tab"
            role="tab"
            aria-controls="products-top-tab"
            aria-selected="false"
          >
            Top Rated
          </a>
        </li>
      </ul>

      <div className="tab-content tab-content-carousel">
        <div
          className="tab-pane p-0 fade show active"
          id="products-featured-tab"
          role="tabpanel"
          aria-labelledby="products-featured-link"
        >
          <div
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                        "nav": false, 
                        "dots": true,
                        "margin": 20,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":2
                            },
                            "480": {
                                "items":2
                            },
                            "768": {
                                "items":3
                            },
                            "992": {
                                "items":4
                            },
                            "1200": {
                                "items":4,
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'
          >
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <TestCard />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="products-sale-tab"
          role="tabpanel"
          aria-labelledby="products-sale-link"
        >
          <div
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                        "nav": false, 
                        "dots": true,
                        "margin": 20,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":1
                            },
                            "480": {
                                "items":2
                            },
                            "768": {
                                "items":3
                            },
                            "992": {
                                "items":4
                            },
                            "1200": {
                                "items":4,
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'
          >
            <div className="owl-stage-outer">
              <div className="owl-stage">
                {products
                  .filter((prod) => {
                    let _eval = null;
                    prod?.category_data.forEach((ctg) =>
                      ctg.front_end_position === "c2_on_sale"
                        ? (_eval = true)
                        : (_eval = false)
                    );
                    return _eval;
                  })
                  .map((_product) => (
                    <did className="owl-item active">
                      <Collection2Card
                        key={Math.random()}
                        title={_product.title}
                        category={_product.category}
                        price={_product.price}
                        variations={_product.variations}
                        image={_product.image}
                        hover_image={_product.hover_image}
                        tag={_product.tag}
                      />
                    </did>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="products-top-tab"
          role="tabpanel"
          aria-labelledby="products-top-link"
        >
          <div
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                        "nav": false, 
                        "dots": true,
                        "margin": 20,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":1
                            },
                            "480": {
                                "items":2
                            },
                            "768": {
                                "items":3
                            },
                            "992": {
                                "items":4
                            },
                            "1200": {
                                "items":4,
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'
          >
            {products
              .filter(
                (prod) =>
                  prod?.category_data?.front_end_position === "c2_top_rated"
              )
              .map((_product) => (
                <div>
                  <Collection2Card
                    key={Math.random()}
                    title={_product.title}
                    category={_product.category}
                    price={_product.price}
                    variations={_product.variations}
                    image={_product.image}
                    hover_image={_product.hover_image}
                    tag={_product.tag}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection2;
