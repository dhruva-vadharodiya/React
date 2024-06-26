import { useState } from "react";


function LikeButton(){

   let  [isLiked,setIsLiked]=useState(false);
   let [counter,setCounter]=useState(0);//initialization line

   
    let toggleLike=()=>{
        setCounter(counter+1);
        setCounter(counter+1);

   
    }

    let likeStyle={color:"red"};
   
    return (
        <div>
            <p>counter={counter}</p>
            <p onClick={toggleLike}>
                {
                    isLiked ? (
                    <i style={likeStyle} className="fa-solid fa-heart"></i>
                    ):(
                   <i className="fa-regular fa-heart"></i>
                    )
                }
               
            </p>
        </div>
    );
}
export default LikeButton;