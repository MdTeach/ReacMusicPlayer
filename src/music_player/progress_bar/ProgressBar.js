import React,{
     
} from 'react'

import './ProgressBar.css'


const change = (e,isMouseDown)=>{
    if(isMouseDown){ console.log("Helo",e);}
}
const setProgress = (value)=>{
    sliderButton.style.left = value + "%";
    sliderBackGround.style.width = value + "%";
}

const sliderButton = React.createRef()
const sliderBackGround = React.createRef()

export default ()=>{
    // const [isMouseDown, setMouseDown] = useState(false);
    let isMouseDown = false;

    

    return(
        <div className="audio-progress">
            <div className="progress-label">00.00</div>
            <div className="slidecontainer">
                <div className="progress" 
                    onMouseOver={(e)=>{change(e,isMouseDown)}} 
                    onMouseDown={()=>{isMouseDown = true}}
                    onMouseUp={()=>{isMouseDown = false}}
                >
                    <div className="progress_btn" ref={sliderButton}></div>
                    <div className="progress_bg" ref={sliderButton}> </div>
                </div>
            </div>
            <div className="progress-label">00.00</div>
        </div>
    )
}