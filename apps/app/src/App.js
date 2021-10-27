import { useState } from 'react'

import { Thing, TextField } from '@test/ui'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Thing />
        <TextField />
      </header>
    </div>
  )
}

export default App
