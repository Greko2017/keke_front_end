import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Article,
  Breadcrumb,
  CategoryWidget,
  PopularPostsWidget,
} from "../../components";
import { fetchBlog } from "../../store/actions/blog";
const links = [
  { title: "Home", src: "/" },
  { title: "Blog", src: "/blog" },
  { title: "Classic", src: "/blog/#" },
];

class Blog extends Component {
  componentDidMount() {
    this.props.fetchBlog();
  }
  render() {
    const { postList } = this.props;
    // console.log(`postList`, postList);
    return (
      <>
        {/* hero image */}
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
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
                {postList.map((article, index) => (
                  <Article key={index} article={article} />
                ))}

                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a
                        className="page-link page-link-prev"
                        href="#"
                        aria-label="Previous"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        <span aria-hidden="true">
                          <i className="icon-long-arrow-left"></i>
                        </span>
                        Prev
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link page-link-next"
                        href="#"
                        aria-label="Next"
                      >
                        Next{" "}
                        <span aria-hidden="true">
                          <i className="icon-long-arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postList: state.blog.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlog: () => dispatch(fetchBlog()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));
