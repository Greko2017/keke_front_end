import React from "react";

const index = () => {
  return (
    <>
      <div
        className="owl-carousel mt-3 mb-3 owl-simple"
        data-toggle="owl"
        data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 30,
                                "loop": true,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "420": {
                                        "items":3
                                    },
                                    "600": {
                                        "items":4
                                    },
                                    "900": {
                                        "items":5
                                    },
                                    "1024": {
                                        "items":6
                                    }
                                }
                            }'
      >
        <a href="#" className="brand">
          <img src="assets/images/brands/1.png" alt="Brand Name" />
        </a>

        <a href="#" className="brand">
          <img src="assets/images/brands/2.png" alt="Brand Name" />
        </a>

        <a href="#" className="brand">
          <img src="assets/images/brands/3.png" alt="Brand Name" />
        </a>

        <a href="#" className="brand">
          <img src="assets/images/brands/4.png" alt="Brand Name" />
        </a>

        <a href="#" className="brand">
          <img src="assets/images/brands/5.png" alt="Brand Name" />
        </a>

        <a href="#" className="brand">
          <img src="assets/images/brands/6.png" alt="Brand Name" />
        </a>

        <a href="#" className="brand">
          <img src="assets/images/brands/7.png" alt="Brand Name" />
        </a>
      </div>
    </>
  );
};

export default index;
