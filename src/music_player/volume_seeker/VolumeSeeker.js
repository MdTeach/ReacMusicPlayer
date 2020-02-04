import React from 'react'

export default ()=>{
    return(
        <div className="volume-seeker">
            <input id="volume" min="0" max="1" step="0.1" type="range"/>
        </div>
    )
}