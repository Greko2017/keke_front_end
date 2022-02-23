import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "semantic-ui-react";
import {
  Breadcrumb,
  CategoryWidget,
  CommentForm,
  Comments,
  PopularPostsWidget,
  RelatedPostsWidget,
} from "../../components";
import { getPostBySlug } from "../../store/actions/blog";

const links = [
  { title: "Home", src: "/" },
  { title: "Blog", src: "/blog" },
  { title: "Classic", src: "/blog/#" },
];
const BlogDetails = ({ match }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-1">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-2">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-1">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            layout="fill"
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(`In useEffect`, match.params.slug);
    dispatch(getPostBySlug(match.params.slug));
  }, [dispatch]);

  const { post } = useSelector((state) => {
    console.log(`post`, state.blog.post);
    return {
      post: state.blog.post,
    };
  });
  return (
    <>
      <>
        {/* hero image */}
        <div
          className="page-header text-center"
          style={{
            backgroundImage: "url('/assets/images/page-header-bg.jpg')",
          }}
        >
          <div className="container">
            <h1 className="page-title">
              Articles<span>Blog</span>
            </h1>
          </div>
        </div>
        {/* breadcrumb */}
        <Breadcrumb links={links} />
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <article className="entry single-entry">
                  <figure className="entry-media">
                    <img src={post.featuredImage?.url} alt="image desc" />
                  </figure>

                  <div className="entry-body">
                    <div className="entry-meta">
                      <span className="entry-author">
                        by <a href="#">{post?.author?.name}</a>
                      </span>
                      <span className="meta-separator">|</span>
                      <a href="#">
                        {moment(post.createdAt).format("MMM DD, YYYY")}
                      </a>
                      <span className="meta-separator">|</span>
                      <a href="#">{post?.comments?.length || 0} Comments</a>
                    </div>

                    <h2 className="entry-title">{post.title}</h2>

                    <div className="entry-cats">
                      in{" "}
                      {post.category && post.category instanceof Array ? (
                        post.category.map((category) => (
                          <a href="#">{category}</a>
                        ))
                      ) : (
                        <a href="#">Shopping</a>
                      )}
                    </div>

                    <div className="entry-content editor-content">
                      {post?.content?.raw.children.map((typeObj, index) => {
                        const children = typeObj.children.map(
                          (item, itemIndex) =>
                            getContentFragment(itemIndex, item.text, item)
                        );
                        return getContentFragment(
                          index,
                          children,
                          typeObj,
                          typeObj.type
                        );
                      })}
                    </div>

                    <div className="entry-footer row no-gutters flex-column flex-md-row">
                      <div className="col-md">
                        <div className="entry-tags">
                          <span>Tags:</span>{" "}
                          {post.category && post.category instanceof Array ? (
                            post.category.map((category) => (
                              <a href="#">{category}</a>
                            ))
                          ) : (
                            <a href="#">Shopping</a>
                          )}{" "}
                        </div>
                      </div>

                      <div className="col-md-auto mt-2 mt-md-0">
                        <div className="social-icons social-icons-color">
                          <span className="social-label">Share this post:</span>
                          <a
                            href="#"
                            className="social-icon social-facebook"
                            title="Facebook"
                            target="_blank"
                          >
                            <i className="icon-facebook-f"></i>
                          </a>
                          <a
                            href="#"
                            className="social-icon social-twitter"
                            title="Twitter"
                            target="_blank"
                          >
                            <i className="icon-twitter"></i>
                          </a>
                          <a
                            href="#"
                            className="social-icon social-pinterest"
                            title="Pinterest"
                            target="_blank"
                          >
                            <i className="icon-pinterest"></i>
                          </a>
                          <a
                            href="#"
                            className="social-icon social-linkedin"
                            title="Linkedin"
                            target="_blank"
                          >
                            <i className="icon-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="entry-author-details">
                    <figure className="author-media">
                      <a href="#">
                        <img src={post?.author?.photo.url} alt="User name" />
                      </a>
                    </figure>

                    <div className="author-body">
                      <div className="author-header row no-gutters flex-column flex-md-row">
                        <div className="col">
                          <h4>
                            <a href="#">{post?.author?.name}</a>
                          </h4>
                        </div>
                        <div className="col-auto mt-1 mt-md-0">
                          <a href="#" className="author-link">
                            View all posts by {post?.author?.name}{" "}
                            <i className="icon-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>

                      <div className="author-content">
                        <p>
                          Praesent dapibus, neque id cursus faucibus, tortor
                          neque egestas auguae, eu vulputate magna eros eu erat.
                          Aliquam erat volutpat.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                {/* <RelatedPostsWidget /> */}
                {post.comments && post.comments.length > 0 ? (
                  <Comments comments={post.comments} author={post.author} />
                ) : null}
                <CommentForm slug={post.slug} />
              </div>

              <aside className="col-lg-3">
                <div className="sidebar">
                  <div className="widget widget-search">
                    <h3 className="widget-title">Search</h3>

                    <form action="#">
                      <label htmlFor="ws" className="sr-only">
                        Search in blog
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        name="ws"
                        id="ws"
                        placeholder="Search in blog"
                        required
                      />
                      <button type="submit" className="btn">
                        <i className="icon-search"></i>
                        <span className="sr-only">Search</span>
                      </button>
                    </form>
                  </div>

                  <CategoryWidget />

                  <PopularPostsWidget />

                  <div className="widget widget-banner-sidebar">
                    <div className="banner-sidebar-title">ad box 280 x 280</div>

                    <div className="banner-sidebar banner-overlay">
                      <a href="#">
                        <img
                          src="/assets/images/blog/sidebar/banner.jpg"
                          alt="banner"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="widget widget-text">
                    <h3 className="widget-title">About Blog</h3>

                    <div className="widget-text-content">
                      <p>
                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                        euismod dui, pulvinar nunc sapien ornare nisl.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default BlogDetails;
