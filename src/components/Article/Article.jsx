import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const Article = ({ article }) => {
  // console.log(`In Article article:>>`, article);
  return (
    <article className="entry">
      {article.node.featuredImage instanceof Array ? (
        <figure className="entry-media">
          <div
            className="owl-carousel owl-simple owl-light owl-nav-inside"
            data-toggle="owl"
          >
            {article.node.featuredImage.map((image) => (
              <Link key={Math.random()} to={`/blog/${article.node.slug}`}>
                <img src={image} alt="image desc" />
              </Link>
            ))}
          </div>
        </figure>
      ) : (
        <figure className="entry-media">
          <Link to={`/blog/${article.node.slug}`}>
            <img src={article.node.featuredImage.url} alt="image desc" />
          </Link>
        </figure>
      )}

      <div className="entry-body">
        <div className="entry-meta">
          <span className="entry-author">
            by <a href="#">{article.node.author.name}</a>
          </span>
          <span className="meta-separator">|</span>
          <a href="#">
            {moment(article.node.createdAt).format("MMM DD, YYYY")}
          </a>
          <span className="meta-separator">|</span>
          <a href="#">{article?.node?.comments?.length || 0} Comments</a>
        </div>

        <h2 className="entry-title">
          <Link to={`/blog/${article.node.slug}`}>{article.node.title}</Link>
        </h2>

        <div className="entry-cats">
          in{" "}
          {article.node.categories &&
          article.node.categories instanceof Array ? (
            article.node.categories.map((category, index) => (
              <a key={index} href="#">
                {category.name}
              </a>
            ))
          ) : (
            <a href="#">Shopping</a>
          )}
        </div>

        <div className="entry-content">
          <p>{article.node.excerpt}</p>
          <Link to={`/blog/${article.node.slug}`} className="read-more">
            Continue Reading
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
