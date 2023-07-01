import "./css/App.css";
import { useState, useEffect } from "react";

const serverUrl = "localhost:1234";

function App() {
   const [roomId, setRoomId] = useState("general");
   const [show, setShow] = useState(false);

   return (
      <div className="full-container">
         <div className="container">
            <label htmlFor="room">Choose the chat room</label>
            <select name="room" id="room" onChange={(e) => setRoomId(e.target.value)} value={roomId}>
               <option value="travel">travel</option>
               <option value="general">general</option>
               <option value="music">music</option>
            </select>
         </div>
         <button onClick={() => setShow(!show)}>{show ? "Close chat" : "Open chat"}</button>
         {show && <hr />}
         {show && <ChatRoom roomId={roomId} />}
      </div>
   );
}
export default App;

function ChatRoom({ roomId }) {
   const [message, setMessage] = useState("");

   useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();

      return () => {
         return connection.disconnect();
      };
   }, [roomId]);

   //...
   function handleSendClick() {
      sendMessage(message);
   }
   // ...
   return (
      <>
         <h3>Welcome to the travel room!</h3>
         <div className="container">
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSendClick}>Send</button>
         </div>
      </>
   );
}

function createConnection(serverUrl, roomId) {
   return {
      connect() {
         console.log("✅ Connected to: " + serverUrl + " on the room: " + roomId);
      },

      disconnect() {
         console.log("❌ Disconnected from room " + roomId + " on server " + serverUrl);
      },
   };
}

function sendMessage(msg) {
   console.log("You send:", msg);
}
