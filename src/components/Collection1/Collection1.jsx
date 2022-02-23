import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions/shop";
import Collection1Card from "./Collection1Card";

const Collection1 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => {
    // console.log(`categories`, state.shop.categories);
    return {
      categories: state.shop.categories,
    };
  });
  // console.log(`-- In collection1 categories:>>`, categories);
  // .filter((prod) => {
  //   let _eval = null;
  //   prod?.category_data.forEach((ctg) =>
  //     ctg.front_end_position === "c2_featured"
  //       ? (_eval = true)
  //       : (_eval = false)
  //   );
  //   return _eval;
  // })

  return (
    <>
      <div className="banner-group">
        <div className="row">
          {[...categories]
            .filter((ctg) => ctg.front_end_position === "c1")
            .map((product) => (
              <Collection1Card
                key={Math.random()}
                image={product.image}
                subtitle={product.subtitle}
                title={product.title}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Collection1;
