import React from 'react';
import ReactDOM from 'react-dom';

const background = {
    background:'khaki'
}

function PortalComp (){
    return ReactDOM.createPortal(
        <div style={background}>
            <h3 style={{color:'blue'}}> this is from a new portal</h3>
        </div>,
        document.getElementById('kodee')
    )
}
export default PortalComp;