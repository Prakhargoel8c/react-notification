import ReactDOM from "react-dom/client";
import {ReactNode} from "react"
import { Notification } from "./Notification";
export const showNotification=(message:ReactNode, type:"info"|"error"|"sucess")=>{
  const notificationContainer=document.getElementsByClassName("notifiacation-container")[0];
  const notification=document.createElement("div")
  notificationContainer.append(notification)
  const root=ReactDOM.createRoot(notification);
  const clearNotification=()=>{
    root.unmount();
    notification.remove();
  }
  root.render(<Notification message={message} type={type} clearNotification={clearNotification}/>)
  
  return clearNotification;
 }


