import React, { Component } from 'react';

// const sytling = {
//     margin:'20px',
//     padding:'20px',
//     background:'white'
// }

// class RefReact extends Component{
//     constructor(props){
//         super(props)
//         this.Reference = React.createRef();
//     }

//     // componentDidMount(){
//     //     console.log('this.Reference : ', this.Reference);
//     //     this.Reference.current.focus();
//     // }

//     focusing = () => {
//         this.Reference.current.focus();
//     }
//         render(){
//             return(
//                 <div  style={sytling}>
//                     <input type="text" placeholder='Ref' ref={this.Reference} />
//                 </div>
//             )
//         }
// }

// export default RefReact;

const ForwardRef = React.forwardRef((props, ref) =>{
    return(
        <div>
            <input type="text" ref={ref} />
            <h3> this is from a new portal</h3>
        </div>
    )
})

export default ForwardRef;