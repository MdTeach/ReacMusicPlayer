import React from 'react'

export default (props)=>{
    const handlePlayPause = ()=>{
        props.handlePlayPause()
    }

    return(
        <div className="control-buttons">
            <button onClick={handlePlayPause}>Paly/Pause</button>
        </div>
    )
}