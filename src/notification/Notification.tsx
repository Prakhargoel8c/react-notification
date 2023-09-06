import React,{useEffect,useState, ReactNode } from "react"
interface NotificationProps{
    message:ReactNode;
    type:string;
    clearNotification:()=>void;
}
export const Notification=({message,type,clearNotification}:NotificationProps)=>{
    const [ishovered, setIsHovered]=useState(false);
    const [timer,setTimer]=useState(0);
    useEffect(()=>{
        if(ishovered) return;
        const intervalId=setInterval(()=>setTimer(timer=>{const newTimer=timer+1;
        if(newTimer===20) window.requestAnimationFrame(()=>clearNotification());
        return newTimer;
    }),100)
        return ()=>clearInterval(intervalId);
    },[ishovered])
    return (<div className="notification" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>{message}</div>);
}