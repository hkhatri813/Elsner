import React from "react"
import "../../style.css"
class HomeBanner extends React.Component {
render(){

    return(

        <section className="banner">
  <img className="bannericon lazyloaded" src="https://www.elsner.com/wp-content/uploads/2020/07/icon1.png" alt="icon" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/icon1.png" data-was-processed="true" />
  <noscript><img class="bannericon" src="https://www.elsner.com/wp-content/uploads/2020/07/icon1.png" alt="icon" /></noscript>
  <div className="container">
    <div className="row alinc">
      <div className="col-md-6">
        <div className="banner-txt">
          <h1>Cutting-Edge Next Generation Mobility Solutions <br /></h1>
          <p />
          <p>Elsner Technologies is an enterprise web and digital marketing agency that has carved a niche for itself by offering innovative, logical and highly responsive web and IT solutions.</p>
          <p />
          <div className="banner_btn"> <a className="btn btn-primary" href="https://www.elsner.com/contact-us/">Get Started</a></div>
          <ul>
            <li>
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" className="lazyloaded" data-was-processed="true" />
              <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" alt=""&gt;</noscript>
              Award-Winning Company
            </li>
            <li>
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" className="lazyloaded" data-was-processed="true" />
              <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" alt=""&gt;</noscript>
              Competitive Pricing
            </li>
            <li>
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" className="lazyloaded" data-was-processed="true" />
              <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/07/check.png" alt=""&gt;</noscript>
              End-to-End Services
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="banner-img">
          <img src="https://www.elsner.com/wp-content/uploads/2020/08/aeet-1.svg" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/aeet-1.svg" className="lazyloaded" data-was-processed="true" />
          <noscript>&lt;img src="https://www.elsner.com/wp-content/uploads/2020/08/aeet-1.svg" alt=""&gt;</noscript>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="scrolldown">
    <div className="bouncescroll"> <a href="#services" className="scroll">Scroll Down</a></div>
  </div> */}
</section>

    );

}

}
export default HomeBanner;