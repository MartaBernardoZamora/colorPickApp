import { useState } from 'react'
import './App.css'
import FormColor from './components/FormColor'
import Header from './components/header'

function App() {
  return (
    <div className="app">
      <Header />
      <FormColor />
    </div>
  )
}

export default App
