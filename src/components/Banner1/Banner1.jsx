import React from "react";

const Banner1 = ({ subtitle, title, description, image }) => {
  return (
    <div className="trending">
      <a href="#">
        <img src={image} alt="Banner" style={{ width: "100%" }} />
      </a>
      <div className="banner banner-big d-md-block">
        <div className="banner-content text-center">
          <h4 className="banner-subtitle text-white">{subtitle}</h4>
          <h3 className="banner-title text-white">{title}</h3>
          <p className="d-none d-lg-block text-white">{description} </p>

          <a href="category.html" className="btn btn-primary-white">
            <span>Shop Now</span>
            <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
