import React from "react"
import './App.css';
import Header from "./Component/Header/Header"
import { Switch, Route, withRouter } from "react-router-dom";
import Blog from "./Component/Blog/Blog"
import FullBlog from "./Component/FullBlog/FullBog"
import Catagory from "./Component/Catagory/Catagory";


function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/blog" exact component={Blog} />
        <Route path={'/blog/:id'} exact component={FullBlog} />
        <Route path={'/catagory/:catagoryid'} exact component ={Catagory} />
        {/* <Route path="/" component={App} /> */}
      </Switch>

    </>

  );
}

export default withRouter(App);
