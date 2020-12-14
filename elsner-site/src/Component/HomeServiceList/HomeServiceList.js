import React from "react"
import "../../style.css"
class HomeServiceList extends React.Component{

    render(){
        return(
            <section className="full-service aos-init aos-animate" data-aos="fade-up" data-aos-duration={500} data-aos-offset={0}>
  <div className="container">
    <div className="services_list">
      <h3>We offer 360 degree IT services that include</h3>
      <div className="pro-servc">
        <ul style={{listStyle:"none"}}>
          <li style={{display: "inline-block"}}> 
            <div className="servimg">
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/mob.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/mob.png" className="lazyloaded" data-was-processed="true" />
              <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/07/mob.png" alt="" /></noscript>
            </div>
            <a>Mobile App Development</a>
          </li>
          <li style={{display: "inline-block"}}>
            <div className="servimg">
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/web.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/web.png" className="lazyloaded" data-was-processed="true" />
              <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/07/web.png" alt="" /></noscript>
            </div>
            <a>Web Design and Development</a>
          </li>
          <li style={{display: "inline-block"}}>
            <div className="servimg">
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/ui-ux.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/ui-ux.png" className="lazyloaded" data-was-processed="true" />
              <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/07/ui-ux.png" alt="" /></noscript>
            </div>
            <a>UI/UX Design</a>
          </li>
          <li style={{display: "inline-block"}}>
            <div className="servimg">
              <img src="https://www.elsner.com/wp-content/uploads/2020/07/marketing-1.png" alt data-lazy-src="https://www.elsner.com/wp-content/uploads/2020/07/marketing-1.png" className="lazyloaded" data-was-processed="true" />
              <noscript><img src="https://www.elsner.com/wp-content/uploads/2020/07/marketing-1.png" alt="" /></noscript>
            </div>
            <a>Digital Marketing</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

        );
    }
}
export default HomeServiceList