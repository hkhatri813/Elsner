import React from "react"
import Slider from "react-slick";
import "../../style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomeEcommerce extends React.Component{

    render(){
      const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
      }
        return(
          <section className="ecommerce_sol aos-init aos-animate" data-aos="fade-up" data-aos-duration={500} data-aos-offset={0}>
  <div className="container">
    <div className="heading-ecommerce">
      <h4>Our eCommerce Solutions are</h4>
      <p />
      <p>Our feature-rich and unparalleled eCommerce solutions will boost your website traffic and skyrocket your revenues</p>
      <p />
    </div>
  </div>
  <div className="development-slider slider slick-initialized slick-slider">
    <div className="slick-list draggable" style={{padding: '0px 10px'}}>
      <div className="slick-track" style={{opacity: 1, width: 4088, transform: 'translate3d(-2044px, 0px, 0px)'}}>
        <Slider {...settings}>

        <div className="content OpenCart slick-slide slick-cloned" tabIndex={-1} style={{width: 264}} data-slick-index={-2} aria-hidden="true">
          {/* <img src="https://www.elsner.com/wp-content/uploads/2015/11/opencart.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2015/11/opencart.png" className="lazyloaded" data-was-processed="true" /> */}
        <img src="https://www.elsner.com/wp-content/uploads/2015/11/opencart.png" alt="" />
          <h5>OpenCart</h5>
          <p />
          <p />
          <p>OpenCart is a free open source ecommerce platform that offers superior foundation to build a comprehensive online store. our OpenCart developers will strive hard to offer you a feature-rich, highly</p>
          <a href="https://www.elsner.com/services/opencart-development/" tabIndex={-1}>Read More</a>
        </div>
        <div className="content Joomla slick-slide slick-cloned slick-center" tabIndex={-1} style={{width: 264}} data-slick-index={-1} aria-hidden="true">
          {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/joomla-logo.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/joomla-logo.png" className="lazyloaded" data-was-processed="true" /> */}
          <img src="https://www.elsner.com/wp-content/uploads/2020/08/joomla-logo.png" alt="" />
          <h5>Joomla</h5>
          <p />
          <p />
          <p>Joomla is one of the most promising CMS with thousands of features and designs available to build your website. We have highly skilled Joomla developers who will develop superlative, scalable and e</p>
          <a href="https://www.elsner.com/services/joomla-development/" tabIndex={-1}>Read More</a>
        </div>
        <div className="content Drupal Development slick-slide" tabIndex={-1} style={{width: 264}} data-slick-index={0} aria-hidden="true">
          {/* <img src="https://www.elsner.com/wp-content/uploads/2020/07/drupal.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/drupal.png" className="lazyloaded" data-was-processed="true" /> */}
      <img src="https://www.elsner.com/wp-content/uploads/2020/07/drupal.png" alt="" />
          <h5>Drupal Development</h5>
          <p />
          <p />
          <p>Drupal is one of the most preferred platforms for website design and development and has a great community support too. Our highly skilled Drupal developers will leave no stones unturned to offer y</p>
          <a href="https://www.elsner.com/services/drupal-web-development/" tabIndex={-1}>Read More</a>
        </div>
        <div className="content Magento Development slick-slide" tabIndex={-1} style={{width: 264}} data-slick-index={1} aria-hidden="true">
          {/* <img src="https://www.elsner.com/wp-content/uploads/2020/07/magento-3.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/magento-3.png" className="lazyloaded" data-was-processed="true" /> */}
          <img src="https://www.elsner.com/wp-content/uploads/2020/07/magento-3.png" alt="" />
          <h5>Magento Development</h5>
          <p />
          <p />
          <p>Magento has set a benchmark in the ecommerce industry by offering some innovative benefits to the ecommerce store owners. We have a fully-functioning Magento team that offer a wide array of Magento</p>
          <a href="https://www.elsner.com/services/magento-development/" tabIndex={-1}>Read More</a>
        </div>
        <div className="content WooCommerce Development slick-slide" tabIndex={-1} style={{width: 264}} data-slick-index={2} aria-hidden="true">
          {/* <img src="https://www.elsner.com/wp-content/uploads/2020/07/woo.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/woo.png" className="lazyloaded" data-was-processed="true" /> */}
        <img src="https://www.elsner.com/wp-content/uploads/2020/07/woo.png" alt="" />
          <h5>WooCommerce Development</h5>
          <p />
          <p />
          <p>Do you want to develop a smart ecommerce store at a low cost? WooCommerce plugin offers some highly scalable and superior features to the store owners and our developers can build a WooCommerce sto</p>
          <a href="https://www.elsner.com/services/woocommerce-development/" tabIndex={-1}>Read More</a>
        </div>
        <div className="content Shopify slick-slide" tabIndex={-1} style={{width: 264}} data-slick-index={3} aria-hidden="true">
          {/* <img src="https://www.elsner.com/wp-content/uploads/2020/07/shopify.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/shopify.png" className="lazyloaded" data-was-processed="true" /> */}
          <img src="https://www.elsner.com/wp-content/uploads/2020/07/shopify.png" alt="" />
          <h5>Shopify</h5>
          <p />
          <p />
          <p>Shopify is an online store builder that has more than 1,00,000 stores. Elsner offers highly reliable and secure Shopify development services for ecommerce stores. This SEO-optimised store can boost</p>
          <a href="https://www.elsner.com/services/shopify-development/" tabIndex={-1}>Read More</a>
        </div>
        {/* <div className="content OpenCart slick-slide" tabIndex={-1} style={{width: 264}} data-slick-index={4} aria-hidden="true">
          <img src="https://www.elsner.com/wp-content/uploads/2015/11/opencart.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2015/11/opencart.png" className="lazyloaded" data-was-processed="true" />
         <img src="https://www.elsner.com/wp-content/uploads/2015/11/opencart.png" alt="" />
          <h5>OpenCart</h5>
          <p />
          <p />
          <p>OpenCart is a free open source ecommerce platform that offers superior foundation to build a comprehensive online store. our OpenCart developers will strive hard to offer you a feature-rich, highly</p>
          <a href="https://www.elsner.com/services/opencart-development/" tabIndex={-1}>Read More</a>
        </div> */}
        </Slider>
          </div>
    </div>
  </div>
</section>

        );
    }
}
export default HomeEcommerce