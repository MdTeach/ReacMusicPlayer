import React from 'react'

export default (props)=>{
    const handlePlayPause = ()=>{
        // const audio = props.audio;
        // console.log(audio)   
        // if(audio.paused){
        //     audio.play()
        // }else{
        //     audio.pause()
        // }
    }

    return(
        <div className="control-buttons">
            <button onClick={handlePlayPause}>Paly/Pause</button>
        </div>
    )
}