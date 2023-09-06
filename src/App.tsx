import { NotificationContainer, useNotification } from "./notification";
import "./styles.css";

export default function App() {
  const {showNotification}=useNotification();
  const handleClick=()=>{
    showNotification("test","info")
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Show Notification</button>
     <NotificationContainer/>
    </div>
  );
}
