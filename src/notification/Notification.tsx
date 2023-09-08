import React,{useEffect,useState, ReactNode } from "react"
const timeInMs=2000;
interface NotificationProps{
    message:ReactNode;
    type:string;
    clearNotification:()=>void;
}
export const Notification=({message,type,clearNotification}:NotificationProps)=>{
    const [ishovered, setIsHovered]=useState(false);
    const [timer,setTimer]=useState(0);
    const [isExiting,setIsExiting]=useState(true);
    const progress=timer/timeInMs*100;
    console.log(progress,timeInMs,timer)
    useEffect(()=>{
        if(ishovered) return;
        const intervalId=setInterval(()=>setTimer(timer=>{
        const newTimer=timer+10;
        if(timeInMs-newTimer===500) setIsExiting(true);
        else if (timeInMs-newTimer===0) window.requestAnimationFrame(()=>clearNotification());
        return newTimer;
    }),10)
        return ()=>clearInterval(intervalId);
    },[ishovered])
    return (<div className={`notification-item ${type}`} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                <p>{message}</p>
                <div className="progress-bar" style={{width:progress}}/>
            </div>);
}