import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import React ,{useEffect, useState} from "react";
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddLandlordForm from "./components/AddLandlordForm";
import LandlordList from "./components/LandlordList";
import apiClient from './http-common';
import EditLandlordForm from './components/EditLandlordForm';



function App() {
  
  const [landlords,setLandlords]=useState([]);

      useEffect(()=>{apiClient.get('/Landlord/getAllLandlord').then((response)=>{
        setLandlords(response.data);
      })},[])
  
      
  const [editing,setEditing]=useState(false);
  
  const initialFormState = {
    landlordId:0,
    landlordName:'',
    landlordAge:0,
    user: {
      userId: 0
    }
    
      }
  
  
  
 /*  const landlordData =[
    {landlordId:1,landlordName:'Tina',landlordAge:40,},
    {landlordId:2,landlordName:'Sam',landlordAge:45},
     
  ]
 */
  const [currentlandlord,setcurrentLandlord]=useState(initialFormState);

  async function addLandlord(landlord){
    try{
    const response=await apiClient.post('/Admin/addLandlord',landlord);
      setLandlords([...landlords,response.data]);
      console.log(landlords);
      
    }catch(err){
      //console.log(err)
    }
  }

    async function deleteLandlord(landlordId){
      await apiClient.delete(`/Admin/deleteLandlord/${landlordId}`);
        setLandlords(landlords.filter((landlord)=>landlord.landlordId !== landlordId));
      }
      
      const editLandlord=(landlord)=>{
    
        setEditing(true);
          setcurrentLandlord
          ({landlordId:landlord.landlordId,landlordName:landlord.LandlordName,
            landlordAge:landlord.landlordAge})
         
      }

      const updateLandlord = (landlordId,updatedLandlord)=>{
  
        setEditing(false);
        apiClient.put(`/Admin/updatelandlord/${landlordId}`,updatedLandlord).then((response)=>
        {
      
          console.log('landlord updated');
          setLandlords(landlords.map((landlord)=>
        (landlord.landlordId === landlordId ? updatedLandlord : landlord)));
        })
        
      }
      
      
      
      
      return (<div>
        <div className='container'>
        <h1>Landlord Crud App</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            {editing ? (
            <div>
              <h2>Edit Landlord Form </h2>
              <EditLandlordForm
               setEditing={setEditing}
               currentLandlord={currentlandlord}
               updateLandlord={updateLandlord}
               />
               </div>):(
    
        <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/landlords" className="navbar-brand">
              React App
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/landlords"} className="nav-link">
                  landlords
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addLandlord"} className="nav-link">
                  Add landlord
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Routes>
            <Route path='/' element={<LandlordList 
        landlordData={landlords} 
             editLandlord={editLandlord}
             deleteLandlord={deleteLandlord} />} ></Route>
              <Route exact path="addLandlord" element={<AddLandlordForm addLandlord={addLandlord}/>} />
             
             <Route path='/landlords' element={<LandlordList 
        landlordData={landlords} 
             editLandlord={editLandlord}
             deleteLandlord={deleteLandlord} />}>
    
             </Route>
             <Route path="/landlords/:landlordId" element={<EditLandlordForm /> }></Route>
            </Routes>
          </div>
        
        </BrowserRouter>
        )}</div></div></div></div>
    )}
    
 

export default App;
