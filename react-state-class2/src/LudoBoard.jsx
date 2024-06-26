import { useState } from "react";
export default function LudoBoard() {



  let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
  
   let updateBlue=()=>{
    moves.blue +=1;
    console.log(`moves.blue=${moves.blue}`)
    setMoves((prevMoves)=>{
        return {...prevMoves,blue:prevMoves.blue+1};
    });
   };
 

   let updateyellow=()=>{
    moves.yellow +=1;
    console.log(`moves.blue=${moves.yellow}`)
    setMoves((prevMoves)=>{
        return {...prevMoves,yellow:prevMoves.yellow+1};
    });
   };
 

   let updategreen=()=>{
    moves.green +=1;
    console.log(`moves.green=${moves.blue}`)
    setMoves((prevMoves)=>{
        return {...prevMoves,green:prevMoves.green+1};
    });
   };
 

   let updatered=()=>{
    moves.red +=1;
    console.log(`moves.red=${moves.red}`)
    setMoves((prevMoves)=>{
        return {...prevMoves,red:prevMoves.red+1};
    });
   };
 


    return (
      <div>
        <h3>Game started!.</h3>

        <div className="board">

        <p>Blue moves={moves.blue}</p>
        <button style={{backgroundColor:"blue" }} onClick={updateBlue}>+1</button>

        <p>yellow moves={moves.yellow}</p> 
        <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>

        <p>green moves={moves.green}</p>
        <button style={{backgroundColor:"green" }}  onClick={updategreen}>+1</button>

        <p>red moves={moves.red}</p>
        <button style={{backgroundColor:"red" }}  onClick={updatered}>+1</button>

        </div>
     </div>
    );
}