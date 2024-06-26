import { useState } from "react";

export default function Joker(){
    let[joke,setjoke]=useState({});
    const URL="";


    const getJoke=async()=>{
       let response=  await fetch(URL);
       let jsonResponse=await response.json()
       console.log(jsonResponse);
       setjoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
    }  

    return(
        
            <div>
                <h3>Joker</h3>
                <h2>
                    {Joker.setup}
                </h2>
                <h2>
                    {Joker.punchline}
                </h2>
                <button onClick={getJoke}> New Jokes</button>
            </div>

        
    )
}