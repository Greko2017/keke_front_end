import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import { Footer, Header as CustomHeader } from "../components";
import { fetchProducts } from "../store/actions/shop";
class CustomLayout extends React.Component {
  componentDidMount() {
    console.log(`in CustomLayout`);
    this.props.fetchCart();
    this.props.fetchProducts();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
      <div className="page-wrapper" style={{ display: "flex" }}>
        <CustomHeader />
        <main
          style={{
            minHeight: "calc(100vh - 457px)",
          }}
        >
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart()),
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomLayout)
);
