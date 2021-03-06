import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import OrderSummary from "./containers/OrderSummary";
import Checkout from "./containers/Checkout";
import Profile from "./containers/Profile";
import Blog from "./containers/Blog/Blog";
import BlogDetails from "./containers/Blog/BlogDetails";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/blog" component={Blog} />
    <Route path="/products/:productID" component={ProductDetail} />
    <Route exact path="/blog/:slug" component={BlogDetails} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;
