import React from "react"
import './App.css';
import Header from "./Component/Header/Header"
import { Switch, Route, withRouter } from "react-router-dom";
import Blog from "./Component/Blog/Blog"
import FullBlog from "./Component/FullBlog/FullBog"
import { Affix } from 'antd';

function App(props) {
  return (
    <>
    <Affix ooffsetTop={0} onChange={affixed => console.log(affixed)}>
      <Header />
      </Affix>
      <Switch>
        <Route path="/blog" exact component={Blog} />
        <Route path={'/blog/:id'} exact component={FullBlog} />

        {/* <Route path="/" component={App} /> */}
      </Switch>

    </>

  );
}

export default withRouter(App);
