import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import uuid from 'react-uuid'
import User from './User'


function Add() {

  const [id,setId] = useState('')
  const [Name,setName] = useState('')
  const [RegisterNo,setRegisterNo] = useState('')
  const [English,setEnglish] = useState('')
  const [Maths,setMaths] = useState('')
  const [SocialScience,setSocialScience] = useState('')
  const [Status,setStatus] = useState('')

  let history = useNavigate()

  const handleUser = (e)=>{
    e.preventDefault()
    let ids = uuid()
    let uniqueId = ids.slice(0,8)
    console.log(uniqueId);
    User.push({
      id:uniqueId,
      Name:Name,
      RegisterNo:RegisterNo,
      English:English,
      Maths:Maths,
      SocialScience:SocialScience,
      Status:Status

    })
    alert("Added Successfully")

history('/')

  }

  return (
    <div>
      <div>
        <div id='padding'>
            
  <div id='card' className='card container'style={{margin:"5rem"}}>
        <center>
        <h2 className='text-dark'>
             Add Student 
        </h2>

        </center>
        <form >
            
              
    <div  className='card-body '>
    <div className='row'>
    {/* <img style={{width:"230px",height:"230px"}} src='https://www.clker.com/cliparts/2/v/F/E/U/d/icon-contact-16-hi.png' alt='no image'/> */}

    <div className='col-lg 12 m-2'>
        
        <div className='form-group'>
            <label>Name</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setName(e.target.value)}  className='form-control' />

        </div>
        <div className='form-group'>
            <label>RegisterNo</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setRegisterNo(e.target.value)}   className='form-control' />
              
           
            

        </div>
        <div className='form-group'>
            <label>English</label>
            <input style={{color:"black"}}  type="text" onChange={(e)=>setEnglish(e.target.value)}   className='form-control'/>

        </div>
        <div className='form-group'>
            <label>Maths</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setMaths(e.target.value)}   className='form-control'/>

        </div>
        <div className='form-group'>
            <label>SocialScience</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setSocialScience(e.target.value)}   className='form-control'/>

        </div>
        <div className='form-group'>
            <label>Status</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setStatus(e.target.value)}   className='form-control'/>

        </div><br></br>
        <Button onClick={(e)=>handleUser(e)}     className='btn btn-success m-2 '>Add Student</Button>

        <Link to={'/'}>
        <button className='btn btn-primary'>Back To Home</button>

        </Link>

       

    </div>
   

  </div>
    </div>
  

        </form>
    
  </div>

  </div>

    </div>

    </div>
  )
}

export default Add