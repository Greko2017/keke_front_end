import React from "react";

const RelatedPostsCard = ({ post }) => {
  return (
    <article key={Math.random()} className="entry entry-grid">
      <figure className="entry-media">
        <a href="single.html">
          <img src={post.image} alt="image desc" />
        </a>
      </figure>

      <div className="entry-body">
        <div className="entry-meta">
          <a href="#">{post.createdAt}</a>
          <span className="meta-separator">|</span>
          <a href="#">{post.comments.length} Comments</a>
        </div>

        <h2 className="entry-title">
          <a href="single.html">{post.title}</a>
        </h2>

        <div className="entry-cats">
          in{" "}
          {post.category && post.category instanceof Array ? (
            post.category.map((category) => <a href="#">{category}</a>)
          ) : (
            <a href="#">Shopping</a>
          )}
        </div>
      </div>
    </article>
  );
};

export default RelatedPostsCard;
