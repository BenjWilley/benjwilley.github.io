import React from 'react'
import ReactDOM from 'react-dom'
  
function App() { 
  return <h1>Hello, World!</h1>
}
  
const rootElement = document.getElementById('root')
console.log(App())
ReactDOM.render(<App />, rootElement)