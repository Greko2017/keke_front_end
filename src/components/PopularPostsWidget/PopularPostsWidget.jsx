import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPopularPosts } from "../../store/actions/blog";
import moment from "moment";
const PopularPostsWidget = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPosts());
    // Safe to add dispatch to the dependencies array
  }, [dispatch]);
  const { popular_posts } = useSelector((state) => {
    // console.log(`_state`, state);
    return {
      popular_posts: state.blog.popular_posts,
    };
  });

  return (
    <div className="widget">
      <h3 className="widget-title">Popular Posts</h3>

      <ul className="posts-list">
        {popular_posts.map((post) => (
          <li key={Math.random()}>
            <figure>
              <Link to={`/blog/${post.slug}`}>
                <img
                  style={{
                    height: "5.5em",
                    width: "5.5em",
                    objectFit: "cover",
                  }}
                  src={post.featuredImage.url}
                  alt="post"
                />
              </Link>
            </figure>

            <div>
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
              <h4>
                <a href="#">{post.title}</a>
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPostsWidget;
