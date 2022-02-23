import React from "react";

const Collection1Card = ({ image, subtitle, title, price }) => {
  const splitted_title = title.split(",");
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="banner banner-overlay">
        <a href="#">
          <img src={image} alt="Banner" />
        </a>

        <div className="banner-content">
          <h4 className="banner-subtitle">
            <a href="#">{subtitle}</a>
          </h4>
          <h3 className="banner-title">
            <a href="#">
              <strong>
                {splitted_title[0]} <br />
                {splitted_title[1]}
              </strong>{" "}
              <br />
              {price}
            </a>
          </h3>
          <a href="#" className="btn btn-outline-white banner-link">
            Shop Now <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection1Card;
