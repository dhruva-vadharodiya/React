import { useState } from "react"
export default function Form(){
    let[formData,setFormData]=useState({
        fullName:"hello",
        userName:"hii",
    });

    // let handleNameChange = (event)=>{
    //     console.log(event.target);
    //     setFullName(event.target.value)
    // };
 


    // let handleUserChange = (event)=>{
    //     console.log(event.target);
    //     setUserName(event.target.value)
    // };

    let handleInputChange =(event)=>{
     let fieldName=event.target.name;
     let newVal=event.target.value;
     setFormData(
        (currData)=>{
            currData[fieldName]=newVal;
            return{...currData};

        }
     )

    }

    let handleSubmit = (event)=>{
  event.preventDefault();
  setFormData({
    fullName:"hello",
    userName:"hii",

  })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full name</label>
            <input 
             placeholder="Enter Your Full Name" 
             type="text" 
             value={formData.fullName}
             onChange={handleInputChange}
             id="fullname"
             name="fullName"/>
             <br />
             <br />

           <label htmlFor="username">User name</label>
            <input 
             placeholder="Enter Your user Name" 
             type="text" 
             value={formData.userName}
             onChange={handleInputChange}
             id="username"
             name="userName"/>
          <br />
          <br />
         <button type="submit">Submit</button>
        </form>
        
    )
}



