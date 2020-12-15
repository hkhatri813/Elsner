import React, { Component } from "react"
import axios from "axios"
import Post from "../Post/Post"
import FullBlog from "../FullBlog/FullBog"
import {Route} from "react-router-dom"
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import "./Blog.css"
class Blog extends React.Component{
    state={
        data: null
    }
componentDidMount(){
        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts")
            .then(response=>{
                this.setState({data: response.data})
                console.log(this.state.data);
              
               
            })
            .catch(err=> console.log(err))
        
         }
        
        
    render(){
       
const blogSelectedHandler =(id) =>{
            console.log("clicked id:",id);
            this.props.history.push( '/blog/' + id );
        }

        return(
            <div>
                <h4 className="text-monospace text-center my-5" > Read about latest trends and updates about new technologies and tools </h4>
               {this.state.data !== null ? <div className="row">
                { this.state.data.map(post=> <div className="col-md-4" key ={post.id}> <Post title={post.title.rendered} date={post.date} clicked={() => blogSelectedHandler( post.id )} /> </div>)}
                </div> : <div className="example"> <Spin /> </div> }
            </div>
        );
    }
}
export default Blog