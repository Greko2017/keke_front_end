import React from "react";

const Collection3Card = ({ title, subtitle, image }) => {
  return (
    <div className="col-md-6">
      <div className="banner banner-overlay">
        <a href="#">
          <img src={image} alt="Banner" />
        </a>

        <div className="banner-content">
          <h4 className="banner-subtitle d-none d-lg-block">
            <a href="#">{subtitle}</a>
          </h4>
          <h3 className="banner-title ">
            <a href="#">{title}</a>
          </h3>
          <a href="#" className="btn btn-outline-white banner-link">
            Shop Now <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection3Card;
