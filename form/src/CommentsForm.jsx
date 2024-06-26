import { useState } from "react";
import "./Comment.css";

export default function CommentsForm(){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:"5",
    });

    let handleInputChange=(event)=>{
        setFormData((currData) => {
          return{...currData,[event.target.name]:event.target.value};
        })
    }

    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
        remarks:"",
        rating:"5",
        })
    }
    return(
        <>
        <h4>Give a Comments!</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
             type="text" 
             placeholder="Enter username"
             value={formData.username}
             onChange={handleInputChange}
             id="username"
             name="username"
            />
            <br />
            <br />


            <label htmlFor="remarks">Remarks</label>
            <textarea
            value={formData.remarks}
            placeholder="Enter your Remarks"
            onChange={handleInputChange}
            id="remarks"
            name="remarks"></textarea>
            <br />
            <br />


            <label htmlFor="ratings">Ratings</label>
            <input
             type="number" 
             placeholder="Ratings"
             min={1}
             max={5}
             value={formData.rating}
             onChange={handleInputChange}
             id="ratings"
             name="rating"
             

            />
            <br />

            <button>Add </button>
        </form>
        </>
    )
}