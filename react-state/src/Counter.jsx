import {useState} from "react";

export  default function Counter(){
   let [Count,setCount]=useState(0);
     

   let inCount=()=>{
    setCount(Count+1);
   }

    return (

        <div>
            <h3>count={Count} </h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )
}