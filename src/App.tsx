import { useState } from "react";
import Button from "./components/button";
import { Counter } from "./Counter";

function App() {
  const [message, setMEssage] = useState("Let's learn more about testing in React")
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  function decrementCounter() {
    setCounter(counter - 1)
  
  }

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button 
        disabled={false}
        onClick={() => setMEssage("new message!")}
      >
        Change Message
      </Button>
      <Counter
        counter={counter}
        increase={incrementCounter}
        decrease={decrementCounter}
      />
      </div>
  );
}

export default App;
