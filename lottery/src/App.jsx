//  import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Lottery from './Lottery';
import Ticket from './Ticket';
import {sum} from "./helper";

function App() {
   let winCondition=(ticket)=>{
     return sum(ticket)===15;
   }
  return(
    
      <>

      <Lottery n={4} winningSum={20} winCondition={winCondition}/>
      
      </>
        
      
   
  )

 
}

export default App
