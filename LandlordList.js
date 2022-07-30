import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'


import {
    retrieveLandlords,

}from '../actions/landlords'

export default function LandlordList(props){
          const dispatch=useDispatch();
          
          
          const [currentLandlord,setCurrentLandlord]=useState({});
          const [currentIndex,setCurrentIndex]=useState(-1);
         
          const landlords = useSelector((state)=>state.landlords);
           
      
          useEffect(()=>{
              dispatch(retrieveLandlords());
            },[]);
      
          
          const refreshData=()=>{
              setCurrentLandlord(null);
              setCurrentIndex(-1);
          }
       
      
          const setActiveLandlord = (landlord,index)=>{
              setCurrentLandlord(landlord);
              setCurrentIndex(index);
      
          }
      
        
   
   
   
    return(
    <table border='5'>
        <thead>
            <tr>
                <th>landlordId</th>
                <th>landlordName</th>
                <th>landlordAge</th>
                 {/* <th>flatId</th>
                <th>flataddress_id</th>  */}
                <th>userId</th>
               
              
            </tr>
        </thead>
        <tbody>
        {landlords?.length > 0 ? (
        landlords.map((landlord)=>(
            <tr key={landlord.landlordId}>
                <td>{landlord.landlordId}</td>
                <td>{landlord.landlordName}</td>
                <td>{landlord.landlordAge}</td>
                 {/* <td>{landlord.flatList.flatId}</td>
                <td>{landlord.flataddress_id}</td>  */}
                <td>{landlord.user.userId}</td>
               
                
                <td><button 
                onClick={()=>{props.editLandlord(landlord)}}
                className="button muted-button">Edit</button></td>
            
                <td><button 
                onClick={()=>props.deleteLandlord(landlord.landlordId)}
                 className="button muted-button">Delete</button></td>
            </tr>))):(
                <tr>
                    <td colSpan={6}>No landlord</td>
                </tr>
            )}
        </tbody>
    </table>
    )
}