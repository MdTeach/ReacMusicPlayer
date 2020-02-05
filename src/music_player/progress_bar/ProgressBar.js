import React,{
     
} from 'react'

import './ProgressBar.css'


//is the mouse down
let isMouseDown = false;

//get the position where user clicked in the progressbar
const getPos =(e)=>{
    const prefix = slider.current.getBoundingClientRect().left
    const width = slider.current.getBoundingClientRect().width
    const point_e = (parseInt((e.pageX - prefix)) / width) * 100;
    return point_e;
}

//set the new value to the progress bar
const setProgress = (event)=>{
    if(isMouseDown){
        const value = getPos(event)
        sliderButton.current.style.left = value + "%";
        sliderBackGround.current.style.width = value + "%";
    }
}

//refrence to the html elments
const slider = React.createRef()
const sliderButton = React.createRef()
const sliderBackGround = React.createRef()

export default (props)=>{
    let currentTime = props.currentTime;
    return(
        <div className="audio-progress">
            <div className="progress-label"> {currentTime} </div>
            <div className="slidecontainer">
                <div className="progress"
                    ref={slider} 
                    // onMouseOver={(e)=>{change(e,isMouseDown)}} 
                    onMouseDown={(e)=>{isMouseDown = true;setProgress(e)}}
                    onMouseUp={()=>{isMouseDown = false;}}
                    onMouseOver={(e)=>{setProgress(e)}}
                >
                    <div className="progress_btn" ref={sliderButton}></div>
                    <div className="progress_bg" ref={sliderBackGround}> </div>
                </div>
            </div>
            <div className="progress-label">00.00</div>
        </div>
    )
}