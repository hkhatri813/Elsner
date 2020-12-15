import React from "react"
import axios from "axios"
import { Spin } from "antd"
import moment from "moment"
class FullBlog extends React.Component{
    state={
        singlePost: null,
        author: null
    }
    componentDidMount=()=>{

        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts/" + this.props.match.params.id)
        .then(response=> {
            this.setState({singlePost: response.data}, this.getAuthor) 
            
            // console.log(this.state.singlePost)
        })
        .catch(err=> console.log(err))
        
            
        
      
    }
     componentDidUpdate=()=>{
        axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
        .then(response =>console.log("author:" , response.data))
        .catch(err=> console.log(err))
    }
    // const getAuthor =()=>{
    //     axios.get("https://staging.elsner.com/wp-json/wp/v2/users/" + this.state.singlePost?.author)
    //     .then(response =>console.log("author:" , response.data))
    //     .catch(err=> console.log(err))
    //     this.setState({author: response.data.name}) 
    // }

    render(){
        console.log(this.props);

        
        

        return ( 

         this.state.singlePost!==null  ? <div>


        <h4 className="text-monospace text-center mt-5"> {this.state.singlePost?.title?.rendered} </h4>
        <p className="text-center"> -{this.state.author} {moment(this.state.singlePost?.date.substring(0,10)).format("MMMM DD, YYYY")}</p>
    <div className="m-5" dangerouslySetInnerHTML={{ __html: this.state.singlePost?.content?.rendered }}></div> 
    
        </div> : <div className="example"> <Spin /> </div>
                    
        );
        }  
}
export default FullBlog