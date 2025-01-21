import { useState } from 'react'
import './App.css'
import FormColor from './components/FormColor'

function App() {
  return (
    <div className="app">
      <header>
        <h1>React color pick</h1>
        <FormColor />
      </header>
    </div>
  )
}

export default App
