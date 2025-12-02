import { useState } from 'react'
import './App.css'

function App() {
  const [name , setName] = useState("");

  return (
    <>
      <div className='container'>
        <h3>Controller Component Example</h3>
        <input 
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='please enter your name'
          className='big-input'
          />
          
          {/* display value */}
          <p>You Typed : {name}</p>
      </div>
    </>
  );
}

export default App
