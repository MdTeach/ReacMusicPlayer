import React,{
     
} from 'react'

import './ProgressBar.css'


let isMouseDown = false;


const getPos =(e)=>{
    const prefix = slider.current.getBoundingClientRect().left
    const width = slider.current.getBoundingClientRect().width
    const point_e = (parseInt((e.pageX - prefix)) / width) * 100;
    return point_e;
}

const setProgress = (event)=>{
    if(isMouseDown){
        const value = getPos(event)
        sliderButton.current.style.left = value + "%";
        sliderBackGround.current.style.width = value + "%";
    }
}

const slider = React.createRef()
const sliderButton = React.createRef()
const sliderBackGround = React.createRef()

export default ()=>{
    return(
        <div className="audio-progress">
            <div className="progress-label">00.00</div>
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