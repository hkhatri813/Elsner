import React from "react"
import axios from "axios"
import Post from "../Post/Post"
import moment from "moment"
import { slice, concat } from "lodash"
// import FullBlog from "../FullBlog/FullBog"
// import { Route } from "react-router-dom"
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import "./Blog.css"
class Blog extends React.Component {
    state = {
        data: null,
        showMore: false,
        // list: slice(data, 0, 3),
        list: null,
        index: 3,
        LENGTH: 0,
        page: 0,
        round: 0,
        latest: null
    }
    componentDidMount() {
        axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed")
            .then(response => {
                this.setState({ data: response.data, LENGTH: response.data.length, list: slice(response.data, 0, 3), showMore: true, page: Math.ceil(response.data.length / this.state.index) - 1 , latest: response.data[0] })
                console.log(this.state.page);
                this.setState(prevState => ({ round: prevState.round + 1 }))
                console.log(this.state.data);

                // axios.get("https://staging.elsner.com/wp-json/wp/v2/posts?_embed")
                //     .then(res => console.log(res.data))
                //     .catch(err => console.log(err))

            })
            .catch(err => console.log(err))

    }


    //  componentDidUpdate=()=>{
    //     this.setState(prevState=>({page:prevState.page-1}))
    //  }    
    render() {
        



        const handlerViewMore = () => {
            if(this.state.page< 0)
            {
                this.setState({ showMore: false })
            }
            else if (this.state.page >= 0) {
                console.log("load", this.state.page);
                const newIndex = this.state.index + 3;
                //  const newShowMore = newIndex < (this.state.LENGTH - 1)
                const newShowMore = true;
                  

                
                const newList = concat(this.state.list, slice(this.state.data, this.state.index, newIndex));
                // setIndex(newIndex);
                this.setState({ index: newIndex, list: newList, showMore: newShowMore })
            }


        }
        const blogSelectedHandler = (id) => {
            console.log("clicked id:", id);
            this.props.history.push('/blog/' + id);
            this.props.history.push({
                pathname: "/blog/" + id

            })
        }
        const loadMore = () => {
            if (this.state.page >= 0) {
                this.setState(prevState => ({ page: prevState.page - 1 }), handlerViewMore)

                // setList(newList);
                // setShowMore(newShowMore);

            }
            else {
                this.setState({ showMore: false })
            }
            // this.setState(prevState=>({page:prevState.page-1}))
            // console.log(this.state.page);

        }

        return (
            <div className="container"> 
                <h1 className="text-monospace text-center my-5" > Read about latest trends and updates about new technologies and tools </h1>
                {this.state.latest && <div className="row mx-2 my-5"> 
                   <div className="col-md-5">
                       <h4 className="font-weight-bold">{this.state.latest.title.rendered}</h4>
                       <div className="date_time"><img src="https://staging.elsner.com/wp-content/uploads/2020/07/calendar.png"/>{moment(this.state.latest.date.substring(0,10)).format("MMMM DD, YYYY")}</div>
                       <div className="multi-line-truncate" dangerouslySetInnerHTML={{ __html: this.state.latest?.content?.rendered }}></div> 
                       <div className="my-4"> <a className="text-prmary text-underline " onClick={()=> blogSelectedHandler(this.state.latest.id)}> READ MORE </a> </div>
                    
                   </div>
                    {/* <div className="col-md-1"></div> */}
                   <div className="col-md-6">
                       <img src={this.state.latest._embedded['wp:featuredmedia']['0'].source_url}  />
                   </div>


             </div>}
                {this.state.list !== null ? <div className="row">
                    {this.state.list.map(post => <div className="col-md-4" key={post.id}> <Post title={post.title.rendered} date={post.date} image={post._embedded['wp:featuredmedia']['0'].source_url} clicked={() => blogSelectedHandler(post.id)} /> </div>)}
                </div> : <div style={{
                    textAlign: "center",

                    /* background: rgba(0, 0, 0, 0.05); */
                    borderRadius: "4px",
                    marginBottom: "20px",
                    padding: "30px 50px",
                    margin: "20px 0"
                }}> <Spin /> </div>}
                {this.state.showMore && <div className="text-center"><button className="btn btn-primary" style={{margin:"20px",padding:10,marginBottom:50}} onClick={loadMore}> View More </button></div>}
            </div>
        );
    }
}
export default Blog