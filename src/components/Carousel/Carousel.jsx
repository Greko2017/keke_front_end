import React from "react";

const Carousel = () => {
  return (
    <div className="intro-slider-container">
      <div
        className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light mb-0"
        data-toggle="owl"
        data-owl-options='{
            "dots": true,
            "nav": false, 
            "responsive": {
                "1200": {
                    "nav": true,
                    "dots": false
                }
            }
        }'
      >
        <div
          className="intro-slide"
          style={{
            backgroundImage:
              "url(assets/images/demos/demo-8/slider/slide-1.jpg)",
          }}
        >
          <div className="container intro-content text-left">
            <h3 className="intro-subtitle">Limited time only *</h3>
            <h1 className="intro-title">
              Summer
              <br />
              <strong>sale</strong>
            </h1>
            <h3 className="intro-subtitle">Up to 50% off</h3>

            <a href="category.html" className="btn">
              <span>SHOP NOW</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
          <img
            alt="product desc"
            className="position-right"
            src="assets/images/demos/demo-8/slider/img-1.png"
          />
        </div>

        <div
          className="intro-slide"
          style={{
            backgroundImage:
              "url(assets/images/demos/demo-8/slider/slide-2.jpg)",
          }}
        >
          <div className="container intro-content text-right">
            <h3 className="intro-subtitle">PREMIUM QUALITY</h3>
            <h1 className="intro-title">
              coats <span className="highlight">&</span>
              <br />
              jackets
            </h1>

            <a href="category.html" className="btn">
              <span>SHOP NOW</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
          <img
            alt="product desc"
            className="position-left"
            src="assets/images/demos/demo-8/slider/img-2.png"
          />
        </div>
      </div>

      <span className="slider-loader"></span>
    </div>
  );
};

export default Carousel;
