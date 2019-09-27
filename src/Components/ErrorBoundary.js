import React, { Component } from 'react';


class ErrorBoundary extends Component{
    constructor(props){
        super(props)
            this.state = {
                hasError:false
            }
    }

    static getDerivedStateFromError(Error){
        return {
            hasError:true
        }
    }

    componentDidCatch(Error, info){
        console.log("Error from componentDidCatch : ", Error);
        console.log("info from componentDidCatch : ", info);
    }

    render(){
        if(this.state.hasError){
            return <h2> Error has founded </h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary;