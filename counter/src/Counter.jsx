import { useEffect, useState } from "react";
export default function Counter(){

  let[count,setCount]=useState(0);
  

  let inCount=()=>{
    setCount(currCount=>currCount+1);
  }
  useEffect(function printSomething(){
    console.log("this is side effect")
  })
    return(
        <div>
            <h3>
                counter={count}
            </h3>
            <button onClick={inCount}>+1</button>
        </div>
    )
}