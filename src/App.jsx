import { useState } from 'react'
import './App.css'

function App() {
  const [name , setName] = useState("");

  return (
    <>
      <div>
        <h3>Controller Component Example</h3>
        <input 
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='please enter your name' />
          
          {/* display value */}
          <p>You Typed : {name}</p>
      </div>
    </>
  );
}

export default App
