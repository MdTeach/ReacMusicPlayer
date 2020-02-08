import React,{
    useEffect,
    useState
} from 'react'


import ControlButtons from '../audio_controls/AudioControls'
import AudioProgress from '../progress_bar/ProgressBar'
import VolumeSeeker from '../volume_seeker/VolumeSeeker'

import './Wrapper.css'

const url ="https://firebasestorage.googleapis.com/v0/b/auth-a3c8b.appspot.com/o/songs%2FMemories%20-%20Maroon%205.mp3?alt=media&token=94b50f5e-325d-4ebd-a498-1a5f084b9d4a"
const audio = new Audio(url)
export default ()=>{
    
    const [currentTime,setCurrentTime] = useState(0) 
    const handlePlayPause = ()=>{if(audio.paused){audio.play()}else{audio.pause()}}
    
    const updateCurrentTime = (newTime) =>{
        audio.currentTime = newTime;
        setCurrentTime(audio.currentTime);
    }

    useEffect(() => {
        //audio.play()

        //set the current time
        setCurrentTime(audio.currentTime)

        //add listener to the get update of each second
        audio.addEventListener("timeupdate",(e)=>{
            let newTime  = e.currentTarget.currentTime; 
            setCurrentTime(newTime)
        });

    },[0]);
    
    return(
        <div className="wrapper">
            <div className="left-part">
                <div className="audio-control-button">
                    <ControlButtons handlePlayPause={handlePlayPause} isPaused={audio.paused}/>
                </div>
                <div className="audio-progress">
                    <AudioProgress currentTime={currentTime} length={audio.duration} updateCurrentTime={updateCurrentTime}/>
                </div>
            </div>
            <div className="right-part">
                <VolumeSeeker/>
            </div>
        </div>
    )
}