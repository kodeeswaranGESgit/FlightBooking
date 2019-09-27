import React, { Component } from 'react';


class HoverCount extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }


    mouseClick = () =>{
        this.setState(prevState => { 
            return{count: prevState.count + 1}            
        })
    }

    // mouseHovering = () =>{
    //     this.setState(prevState => {
    //         return{count: prevState.count + 2}
    //     })
    // }

    render(){
        return(
            <div>
                {/* <h2 onMouseOver={this.mouseHovering}> Mouse Hover count {this.state.count} time </h2> */}
                <button onClick={this.mouseClick}> Mouse Hover count {this.state.count} time </button>
            </div>
        )    
    }
}

export default HoverCount;