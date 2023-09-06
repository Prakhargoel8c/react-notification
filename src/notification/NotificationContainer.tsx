import { createPortal } from 'react-dom';
export const NotificationContainer=()=>{
    return createPortal(<div className="notifiacation-container"></div>,document.body);
}