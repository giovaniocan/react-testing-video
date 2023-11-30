import { useState } from "react";

function App() {
  const [message, setMEssage] = useState("Let's learn more about testing in React")

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button 
      style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
      }}
      onClick={() => setMEssage('new message')}>Change message</button>
    </div>
  );
}

export default App;
