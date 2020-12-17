import React from "react"
import axios from "axios"
import { AutoComplete, Spin } from "antd"
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
             <div className="row">
                 
                 <div className="col-md-6" >
                 <h4>Search Result for:</h4>
                 <form className="form-group" onSubmit={()=> console.log("submit")}>
                 <input type="text" placeholder="Search Blog" />
                 <button  type="submit" className="btn btn-primary btn-large">Search</button>
             </form>
                 </div>
                 <div className="form-group col-md-6">
                     <select>
                         <option value="All Catagories">All Catagories</option>
                         <option value="Android">Android</option>
                     </select>

                 </div>
             

             </div>
             


        <h1 className="text-center mt-5"> {this.state.singlePost?.title?.rendered} </h1>
        {/* <p className="text-center"> -{moment(this.state.singlePost?.date.substring(0,10)).format("MMMM DD, YYYY")}</p> */}
        <div className="row justify-content-md-center"><div className="col-md-6">
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