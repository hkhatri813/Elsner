import React from 'react';
import logo from './logo.svg';
import Header from "./Component/Header/Header"
import HomeBanner from "./Component/HomeBanner/HomeBanner"
import './App.css';
import HomeSlick from './Component/HomeSlick/HomeSlick';
import HomeService from './Component/HomeService/HomeService';
import HomeServiceList from './Component/HomeServiceList/HomeServiceList';
import HomeEcommerce from './Component/HomeEcommerce/HomeEcommerce';


function App() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeSlick />
      <HomeService />
      <HomeServiceList />
      <HomeEcommerce />
    </div>
  );
}

export default App;
