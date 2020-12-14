import React from "react"
import "../../style.css"
class HomeService extends React.Component{
    
    render(){
        
        

        return(
          <section className="service-home" id="services">
  <div className="container">
    <div className="row">
      <div className="col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration={500} data-aos-offset={0}>
        <div className="img-blend">
          <img src="https://www.elsner.com/wp-content/uploads/2020/08/bulb.svg" alt="blend" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/bulb.svg" className="lazyloaded" data-was-processed="true" />
          <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/08/bulb.svg" alt="blend" /></noscript>
        </div>
      </div>
      <div className="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration={500} data-aos-offset={0}>
        <div className="text-blend">
          <h3>Perfect Blend of Superlative IT <br /> Services with Highly Functional Technology</h3>
          <p />
          <p>We are a full-fledged information technology solutions provider agency that delivers up-to-date digital services for your business expansion.</p>
          <p />
          <div className="icons">
            <div className="icon-blend">
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/blendicon1.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/blendicon1.png" className="lazyloaded" data-was-processed="true" />
              <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/07/blendicon1.png" alt="" /></noscript>
              <div className="desc_blend">
                <p>2019 Became an Official</p>
                <a>Magento Community Insider Partner</a>
              </div>
            </div>
            <div className="icon-blend">
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/blendicon2.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/blendicon2.png" className="lazyloaded" data-was-processed="true" />
              <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/07/blendicon2.png" alt="" /></noscript>
              <div className="desc_blend">
                <p>2018 Received an Official</p>
                <a>Drupal Certification</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        );
    }

}
export default HomeService;