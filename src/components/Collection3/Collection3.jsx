import React from "react";
import Collection3Card from "./Collection3Card";
const collection3list = [
  {
    subtitle: "New Arrivals",
    title: "Women’s",
    image: "assets/images/demos/demo-8/banners/banner-5.jpg",
  },
  {
    subtitle: "New Arrivals",
    title: "Men’s",
    image: "assets/images/demos/demo-8/banners/banner-6.jpg",
  },
];
const Collection3 = () => {
  return (
    <div>
      <div className="container new-arrivals">
        <div className="row">
          {collection3list.map((product) => (
            <Collection3Card
              key={Math.random()}
              subtitle={product.subtitle}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection3;
