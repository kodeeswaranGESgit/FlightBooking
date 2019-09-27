import React, { Component } from 'react';
import axios from 'axios';

    const form ={
        border:'3px double green',
        padding:'10px 60px'
    }

    const ErrorMsg = {
        color:'red'
    }

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId:'',
            title:'',
            body:'',
            Error:''
        }
    }   

    inputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    formSumbmit = (e) =>{
        e.preventDefault();

        const { body, title, userId } = this.state;

        if(!body || !title || !userId){
            console.log('empty fields are not allowed');
            this.setState({
                Error:'empty fields are not allowed'
            })
        }
        else{
            e.preventDefault();
            axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
                .then( response => {
                    console.log('api response.data : ', response.data);
                })
                .catch( error =>{
                    console.log('you posting method has some error');
                })
            }
    }

    render(){
        return(
            <div style={form}>
                <h3> Post Form </h3>
                <form onSubmit={this.formSumbmit}>
                    <div>
                        <label>User ID : </label>
                        <input type="text" name="userId" onChange={this.inputChange}/>
                        <div> { this.state.userId } </div>
                    </div>
                    <div>
                        <label>Title : </label>
                        <input type="text" name="title" onChange={this.inputChange}/>
                    </div>
                    <div>
                        <label>Body : </label>
                        <input type="text" name="body" onChange={this.inputChange}/>
                    </div>
                    <div style={ErrorMsg}> { this.state.Error } </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;