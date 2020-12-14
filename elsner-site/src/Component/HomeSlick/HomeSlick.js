import React from "react"
import Slider from "react-slick";
import "../../style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomeSlick extends React.Component{
    
    render(){
        
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 18,
            slidesToScroll: 1
          }

        return(
<section id="logo" className="logo-sec">
  <div className="container">
    <div className="row alinc">
      <div className="col-md-3">
        <p>We've built solutions for...</p>
      </div>
      <div className="col-md-9">
        <div className="logo-slider slider slick-initialized slick-slider">
       
          <div className="slick-list draggable">
            <div className="slick-track" style={{opacity: 1, width: 3144, transform: 'translate3d(-262px, 0px, 0px)'}}>
            <Slider {...settings}>
                <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={-2} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={-1} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-current slick-active" tabIndex={0} style={{width: 131}} data-slick-index={0} aria-hidden="false">
                <a tabIndex={0}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/Un.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/Un.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2016/01/Un.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-active" tabIndex={0} style={{width: 131}} data-slick-index={1} aria-hidden="false">
                <a tabIndex={0}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/ap_logo-2.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/ap_logo-2.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2020/08/ap_logo-2.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={2} aria-hidden="true">
                 <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/africa-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/africa-1.png" className="lazyloaded" data-was-processed="true" /> */}
                <img src="https://www.elsner.com/wp-content/uploads/2020/08/africa-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={3} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/AsoPalav_logo-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/AsoPalav_logo-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2020/08/AsoPalav_logo-1.png" alt="logos" /> 
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={4} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/odku1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/odku1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2020/08/odku1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={5} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/SAREE-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/SAREE-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2020/08/SAREE-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={6} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2017/09/videocon-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2017/09/videocon-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2017/09/videocon-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={7} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/baldinger-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/baldinger-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 < img src="https://www.elsner.com/wp-content/uploads/2016/01/baldinger-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={8} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/wonderwink-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/wonderwink-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2016/01/wonderwink-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={9} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide" tabIndex={-1} style={{width: 131}} data-slick-index={10} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={11} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/Un.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/Un.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2016/01/Un.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={12} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/ap_logo-2.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/ap_logo-2.png" className="lazyloaded" data-was-processed="true" /> */}
            <img src="https://www.elsner.com/wp-content/uploads/2020/08/ap_logo-2.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={13} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/africa-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/africa-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2020/08/africa-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={14} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/AsoPalav_logo-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/AsoPalav_logo-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2020/08/AsoPalav_logo-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={15} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/odku1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/odku1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2020/08/odku1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={16} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2020/08/SAREE-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/08/SAREE-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2020/08/SAREE-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={17} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2017/09/videocon-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2017/09/videocon-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2017/09/videocon-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={18} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/baldinger-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/baldinger-1.png" className="lazyloaded" data-was-processed="true" /> */}
                  <img src="https://www.elsner.com/wp-content/uploads/2016/01/baldinger-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={19} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/wonderwink-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/wonderwink-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2016/01/wonderwink-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={20} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2016/01/indieinternational-1.png" alt="logos" />
                </a>
              </div>
              <div className="logo_img slick-slide slick-cloned" tabIndex={-1} style={{width: 131}} data-slick-index={21} aria-hidden="true">
                <a tabIndex={-1}>
                  {/* <img src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" alt="logos" data-lazy-src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" className="lazyloaded" data-was-processed="true" /> */}
                 <img src="https://www.elsner.com/wp-content/uploads/2015/11/flamingo.png" alt="logos" />
                </a>
              </div>
           
                </Slider>
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
export default HomeSlick;