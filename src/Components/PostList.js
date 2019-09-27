import React, { Component } from 'react';
import axios from 'axios';
// import fetch from 'react-fetch';

const heading = {
    backgroundColor:'white',
    color:'blue'
}

const titles = {
        border :'2px solid white',
        margin: '5px 0px'
}

class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'kodees',
            post : [],
            error:''
        }
    }

    clicked =() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('response : ', response);
                this.setState({
                    post:response.data
                })
            })
            .catch(error => {
                console.log('error : ', error)
                this.setState({
                    error:'fetching has some error...!'
                })
            }
            )

    }
    
// componentDidMount(){    
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 console.log('response : ', response);
//                 this.setState({
//                     post:response.data
//                 })
//             })
//             .catch(error => {
//                 console.log('error : ', error)
//                 this.setState({
//                     error:'fetching has some error...!'
//                 })
//             }
//             )

// }

    render(){
        const { post, error } = this.state;

        return(
            <div>
                <h2 style={heading}> Hi this is... {this.state.name}'s styled component </h2>
                <h1> List of Post </h1>
                <button onClick={this.clicked}>click to fetch</button>
                {
                    post.length ? 
                    post.map((post, inded) => <div style={titles} key={post.id}> {post.title} </div> ) : null
                }
                {
                    error ? <div> {error} </div> : null
                }
            </div>
        )
    }

}



export default PostList;