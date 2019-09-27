import React from 'react';

function Error({heroName}){
    if(heroName === 'jegan'){
        throw new Error ('this is not a hero')
    }
    return(
        <div>
            <h2> Error handling </h2>
            <span>{heroName}</span>
        </div>
    )
}

export default Error;