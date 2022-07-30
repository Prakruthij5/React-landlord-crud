import React , {useContext, useEffect, useState} from 'react'

export default function EditLandlordForm(props){
     const [landlord,setLandlord] =useState(props.currentLandlord)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setLandlord({...landlord,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateLandlord(landlord.landlordId,landlord);
    }


   return(
    <form onSubmit={submitHandler}>

<label>landlordId</label>
<h1>{props.currentLandlord.landlordId}</h1>

   

    <label>landlordName</label>
    <input 
    type='text'
    name='landlordName'
    value={landlord.landlordName}
    onChange={handleInputChange}/>

   

    <label>landlordAge</label>
    <input 
    type='number'
    name='landlordAge'
    value={landlord.landlordAge}
    onChange={handleInputChange}/>

    
   
    

<button>Update Landlord</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )

}