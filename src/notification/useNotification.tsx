import ReactDOM from "react-dom/client";
export const useNotification = () => {
 const showNotification=(message:string|JSX.Element, type:"info"|"error"|"sucess")=>{
  const notificationContainer=document.getElementsByClassName("notifiacation-container")[0];
  const notification=document.createElement("div")
  notificationContainer.append(notification)
  const root=ReactDOM.createRoot(notification);
  const clearNotification=()=>{
    root.unmount();
    notification.remove();
  }
  root.render(<div>{message}</div>)
  
  return clearNotification;
 }
  return ({showNotification})
}

