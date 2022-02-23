import React from "react";

const InstagramBlock = () => {
  return (
    <div>
      <div className="container instagram">
        <div className="heading text-center">
          <h2 className="title title-lg">Follow Us On Instagram</h2>
          <p className="title-desc">Wanna share your style with us?</p>
        </div>
      </div>

      <div
        className="owl-carousel owl-simple"
        data-toggle="owl"
        data-owl-options='{
                    "nav": false, 
                    "dots": false,
                    "items": 6,
                    "margin": 0,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":1
                        },
                        "360": {
                            "items":2
                        },
                        "600": {
                            "items":3
                        },
                        "992": {
                            "items":4
                        },
                        "1200": {
                            "items":5
                        },
                        "1500": {
                            "items":6
                        }
                    }
                }'
      >
        <div className="instagram-feed">
          <img src="assets/images/demos/demo-8/instagram/1.jpg" alt="img" />

          <div className="instagram-feed-content">
            <a href="#">
              <i className="icon-heart-o"></i>466
            </a>
            <a href="#">
              <i className="icon-comments"></i>65
            </a>
          </div>
        </div>

        <div className="instagram-feed">
          <img src="assets/images/demos/demo-8/instagram/2.jpg" alt="img" />

          <div className="instagram-feed-content">
            <a href="#">
              <i className="icon-heart-o"></i>39
            </a>
            <a href="#">
              <i className="icon-comments"></i>78
            </a>
          </div>
        </div>

        <div className="instagram-feed">
          <img src="assets/images/demos/demo-8/instagram/3.jpg" alt="img" />

          <div className="instagram-feed-content">
            <a href="#">
              <i className="icon-heart-o"></i>691
            </a>
            <a href="#">
              <i className="icon-comments"></i>87
            </a>
          </div>
        </div>

        <div className="instagram-feed">
          <img src="assets/images/demos/demo-8/instagram/4.jpg" alt="img" />

          <div className="instagram-feed-content">
            <a href="#">
              <i className="icon-heart-o"></i>508
            </a>
            <a href="#">
              <i className="icon-comments"></i>124
            </a>
          </div>
        </div>

        <div className="instagram-feed">
          <img src="assets/images/demos/demo-8/instagram/5.jpg" alt="img" />

          <div className="instagram-feed-content">
            <a href="#">
              <i className="icon-heart-o"></i>433
            </a>
            <a href="#">
              <i className="icon-comments"></i>27
            </a>
          </div>
        </div>

        <div className="instagram-feed">
          <img src="assets/images/demos/demo-8/instagram/6.jpg" alt="img" />

          <div className="instagram-feed-content">
            <a href="#">
              <i className="icon-heart-o"></i>122
            </a>
            <a href="#">
              <i className="icon-comments"></i>55
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramBlock;
