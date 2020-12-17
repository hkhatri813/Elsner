import React from "react"
import axios from "axios"
import { Spin } from "antd"
import moment from "moment"
import "./FullBlog.css"
class FullBlog extends React.Component{
    state={
        singlePost: null,
    }
//   getAuthor =()=>{
//     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
//     .then(response =>{
//          console.log("author:" , response.data.name)
//          this.setState({author: response.data.name})    
//         })
//     .catch(err=> console.log(err))
//     }  
    componentDidMount=()=>{

        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts/" + this.props.match.params.id + "?_embed")
        .then(response=> {
            this.setState({singlePost: response.data}) 
            
            // console.log(this.state.singlePost)
        })
        .catch(err=> console.log(err))
        
            
        
      
    }
    //  componentDidUpdate=()=>{
    //     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
    //     .then(response =>console.log("author:" , response.data))
    //     .catch(err=> console.log(err))
    // }
    // const getAuthor =()=>{
    //     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
    //     .then(response =>console.log("author:" , response.data))
    //     .catch(err=> console.log(err))
    //     this.setState({author: response.data.name}) 
    // }

    render(){
        console.log(this.props);

      
        

        return ( 

         this.state.singlePost!==null  ? <div className="container">
             <h1 style={{marginBottom:"25px",marginLeft:"15px"}}>Search Results for: </h1>
             <div className="blog_inner_wrapper blog_filter_row row">
  <div className="col-md-6 blog_search_col">
    <div className="searchform-box search-form-box">
      <form role="search"  className="search-form" action="https://staging.elsner.com">
        <input type="search" className="search-field" placeholder="Search blog"  pattern="[A-Za-z]+" required />									
        <button type="submit" className="search-submit custom-btn-sub more-btn-color">Search </button>
      </form>
    </div>
  </div>
  <div className="col-md-6 blog_filter_col">
    <div className="form-group">
      <div className="select_container">
        <select className="form-control blog-category-dd">
          <option value>All Categories</option>
          <option value="https://staging.elsner.com/category/mobile/android/">Android</option>
          <option value="https://staging.elsner.com/category/mobile/beacon-app-development/">Beacon App</option>
          <option value="https://staging.elsner.com/category/drupal/">Drupal</option>
          <option value="https://staging.elsner.com/category/drupal/drupal-faqs/">Drupal FAQs</option>
          <option value="https://staging.elsner.com/category/ecommerce/">Ecommerce</option>
          <option value="https://staging.elsner.com/category/ecomva/">eComVA</option>
          <option value="https://staging.elsner.com/category/elsner-offers/">Elsner Offers</option>
          <option value="https://staging.elsner.com/category/mobile/flutter-app/">Flutter App</option>
          <option value="https://staging.elsner.com/category/flutter-vs-reactnative/">Flutter vs ReactNative</option>
          <option value="https://staging.elsner.com/category/halloween-offers/">Halloween Offers</option>
          <option value="https://staging.elsner.com/category/mobile/iphone/">iPhone</option>
          <option value="https://staging.elsner.com/category/laravel/">Laravel</option>
          <option value="https://staging.elsner.com/category/magento/">Magento</option>
          <option value="https://staging.elsner.com/category/magento-extensions/">Magento Extensions</option>
          <option value="https://staging.elsner.com/category/magento/magento-faqs/">Magento FAQs</option>
          <option value="https://staging.elsner.com/category/magento/magento-migration-faqs/">Magento Migration FAQs</option>
          <option value="https://staging.elsner.com/category/marketing/">Marketing</option>
          <option value="https://staging.elsner.com/category/mcommerce/">Mcommerce</option>
          <option value="https://staging.elsner.com/category/megento-2-extensions/">Megento 2 Extensions</option>
          <option value="https://staging.elsner.com/category/mobile/">Mobile</option>
          <option value="https://staging.elsner.com/category/others/">Others</option>
          <option value="https://staging.elsner.com/category/php/">PHP</option>
          <option value="https://staging.elsner.com/category/ppc/">PPC</option>
          <option value="https://staging.elsner.com/category/qa/">QA</option>
          <option value="https://staging.elsner.com/category/seo/">SEO</option>
          <option value="https://staging.elsner.com/category/seo-common-questions/">SEO Common Questions</option>
          <option value="https://staging.elsner.com/category/seo/seo-faqs/">SEO FAQs</option>
          <option value="https://staging.elsner.com/category/shopify/">Shopify</option>
          <option value="https://staging.elsner.com/category/shopify/shopify-faqs/">Shopify FAQs</option>
          <option value="https://staging.elsner.com/category/web-design/">Web Design</option>
          <option value="https://staging.elsner.com/category/web-hosting/">Web Hosting</option>
          <option value="https://staging.elsner.com/category/wordpress/woocommerce/">WooCommerce</option>
          <option value="https://staging.elsner.com/category/wordpress/">WordPress</option>
          <option value="https://staging.elsner.com/category/wordpress/wordpress-faqs/">Wordpress FAQs</option>
          <option value="https://staging.elsner.com/category/wordpress-how-to-do/">Wordpress How To Do</option>
        </select>
      </div>
    </div>
  </div>
</div>

             

             <h6 class="line-headding">Our Blog</h6>
        <h1 className="bannners-headding"> {this.state.singlePost?.title?.rendered} </h1>
        <p className="text-center"> -{moment(this.state.singlePost?.date.substring(0,10)).format("MMMM DD, YYYY")}</p>
        <div className="row justify-content-md-center"><div >
        <img src={this.state.singlePost._embedded['wp:featuredmedia']['0'].source_url} />
            </div></div>
    <div className="container m-5" dangerouslySetInnerHTML={{ __html: this.state.singlePost?.content?.rendered }}></div> 
    
        </div> : <div style={{ textAlign: "center",
  /* background: rgba(0, 0, 0, 0.05); */
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "30px 50px",
  margin: "20px 0"}}> <Spin /> </div>
                    
        );
        }  
}
export default FullBlog;