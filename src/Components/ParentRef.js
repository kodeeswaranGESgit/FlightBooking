import React, { Component } from 'react';
import RefReact from './ReactRef';
import ForwardRef from './ReactRef';


class ParentRef extends Component {
    constructor(props){
        super(props)
        this.RefParent = React.createRef();
    }

    parentFocus = () =>{
        // this.RefParent.current.focusing();
        this.RefParent.current.focus();
    }
    render(){
        return(
            <div>
                <p> this is from ParentRef </p>
                {/* <RefReact ref={this.RefParent} />  */}
                <ForwardRef ref={this.RefParent} />
                <button onClick={this.parentFocus}> click to focus </button>
            </div>
        )
    }
}

export default ParentRef;