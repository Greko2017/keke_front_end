import PropTypes from "prop-types";
import React, { Component } from "react";
import { Responsive, Sidebar, Visibility } from "semantic-ui-react";
import {
  Banner1,
  Carousel,
  Collection1,
  PartnerLogo,
  Collection2,
  Collection3,
  Collection4,
  InstagramBlock,
} from "../components";
import { fetchProducts } from "../store/actions/shop";

const banner_1 = {
  subtitle: "Trending",
  title: "New League",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br>Donec odio. Quisque volutpat mattis eros.",
  image: "assets/images/demos/demo-8/banners//banner-4.jpg",
};
const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => {
  return (
    <>
      <Carousel />
      <div className="pt-2 pb-2">
        <div className="container brands">
          <Collection1 />
          <PartnerLogo />
        </div>
      </div>
      <div className="mb-3"></div>
      <Collection2 />
      <div className="mb-3 mb-xl-2"></div>

      <Banner1
        subtitle={banner_1.subtitle}
        title={banner_1.title}
        description={banner_1.description}
        image={banner_1.image}
      />
      <Collection3 />
      <div className="mb-5"></div>
      <Collection4 />
      <div className="mb-5"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-card text-center">
              <span className="icon-box-icon">
                <i className="icon-rocket"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Payment & Delivery</h3>
                <p>Free shipping for orders over 30 000 Fcfa</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-card text-center">
              <span className="icon-box-icon">
                <i className="icon-rotate-left"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Return & Refund</h3>
                <p>Free 100% money back guarantee</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="icon-box icon-box-card text-center">
              <span className="icon-box-icon">
                <i className="icon-life-ring"></i>
              </span>
              <div className="icon-box-content">
                <h3 className="icon-box-title">Quality Support</h3>
                <p>Alway online feedback 24/7</p>
              </div>
            </div>
          </div>
        </div>
        {/* end block and new lines */}
        <InstagramBlock />
        {/* end block and new lines */}
      </div>
    </>
  );
};
export default HomepageLayout;
