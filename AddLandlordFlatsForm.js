/*import React,{useState,useEffect} from 'react';

export default function AddLandlordFlatsForm(props){

  const initialFormState={
  flat: [
       {
          availability: '',
             cost: 0,
             flatAddress: {
               city: '',
               country: '',
                pin: 0,
               state: '',
               street: ''
               }
 
            }
          ]
  }

  const initialFlatAddressFormState={
    street:'',
    pin:0,
    city:'',
    state:'',
    country:''
} 

  const[flat,setFlats]=useState(initialFormState);

    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setFlats({...flat,[name]:value});

        
    }

    const[flatAddress, setFlatAddress] = useState(initialFlatAddressFormState);
    
    const  handleFlatAddressChange=(event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
   
        setFlatAddress({...flatAddress,
          [name]: value
        });
      } 

    
    useEffect(()=>{
      setFlats({...flat,})},[flat])

      useEffect(()=>{
        setFlats({...flat,flatAddress})},[flatAddress])


   

    const submitHandler=(event)=>{event.preventDefault();
    console.log(JSON.stringify(flat));
    props.addFlat(flat);
    setFlats(initialFormState);
    }

    return(

      <form onSubmit={submitHandler} className="flat">
     
   

    <br/>
    <label>Availability</label><br/>
    <input 
     type='checkbox'
     name='availability'
     value={flat.availability}
     onChange={handleInputChange}/>
   
    <br/>

    <label>Cost</label><br/>
    <input 
     type='number'
     name='cost'
     value={flat.cost}
     onChange={handleInputChange}/>

    <label>Street</label><br/>
    <input 
     type='text'
     name='street'
     value={flatAddress.street}
     onChange={handleFlatAddressChange}/>
   
    <br/>
    <label>City</label><br/>
    <input 
     type='text'
     name='city'
     value={flatAddress.city}
     onChange={handleFlatAddressChange}/>
   
    <br/>
    <label>Pin</label><br/>
    <input 
     type='number'
     name='pin'
     value={flatAddress.pin}
     onChange={handleFlatAddressChange}/>
   
    <br/>
    <label>State</label><br/>
    <input 
     type='text'
     name='state'
     value={flatAddress.state}
     onChange={handleFlatAddressChange}/>
   
    <br/>
    <label>Country</label><br/>
    <input 
     type='text'
     name='country'
     value={flatAddress.country}
     onChange={handleFlatAddressChange}/>
   
    <br/>
    
   <input type='submit' value='Add New Flat'/>
</form>

)
}*/