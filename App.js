import React from 'react'
import './App.css'
import CalculatorTitle from './Components/CalculatorTitle'




function App() {
  //useContext hook is used to manange the global data in react app/web
  // three terms create context , providing context and useContext/consuming the context



 
  return (
    <div>

    <div className='container my-5' style={{width:'700px'}}>
     <CalculatorTitle  />
    </div>

    </div>
 
  )
}

export default App
