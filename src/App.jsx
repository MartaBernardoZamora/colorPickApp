import { useState } from 'react'
import './App.css'
import FormColor from './components/FormColor'

function App() {
  return (
    <div className="app">
      <header>
        <h1>React color pick</h1>
        <FormColor
          onChange={() =>""}
          label="Primary color" 
          id="Primary" 
          value="#ffce00"
        />
        <FormColor 
          onChange={() =>""}
          label="Secondary color" 
          id="Secondary"
        />
      </header>
    </div>
  )
}

export default App
