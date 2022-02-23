import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../store/actions/blog";

const CategoryWidget = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    // Safe to add dispatch to the dependencies array
  }, [dispatch]);
  const { categories } = useSelector((state) => {
    // console.log(`_state`, state);
    return {
      categories: state.blog.categories,
    };
  });
  // console.log(`In CategoryWidget _state:>>`, categories);
  return (
    <div className="widget widget-cats">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={Math.random()}>
            <Link to={`/category/${category.slug}`}>
              {category.name}
              <span>{category.post.length}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryWidget;
