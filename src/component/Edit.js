import React,{useState,useEffect} from 'react'
import { Alert, Button } from 'react-bootstrap'
import './Edit.css';
import { useNavigate } from 'react-router-dom';
import User from './User'



function Edit() {
    const [id,setId] = useState('')
    const [Name,setName] = useState('')
    const [RegisterNo,setRegisterNo] = useState('')
    const [English,setEnglish] = useState('')
    const [Maths,setMaths] = useState('')
    const [SocialScience,setSocialScience] = useState('')
    const [Status,setStatus] = useState('')



    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("Name"))
        setRegisterNo(localStorage.getItem("RegisterNo"))
        setEnglish(localStorage.getItem("English"))
        setMaths(localStorage.getItem("Maths"))
        setSocialScience(localStorage.getItem("SocialScience"))
        
        setStatus(localStorage.getItem("Status"))



    },[])
var index = User.map(item=>item.id).indexOf(id)
let history=useNavigate()



const handleUpdate = (e)=> {
    e.preventDefault()
    let user= User[index]
    user.Name=Name
    user.RegisterNo=RegisterNo
    user.English=English
    user.Maths=Maths
    user.SocialScience=SocialScience
    user.Status=Status
    alert("Updated Successfully")
    history('/')


}

  return (
    <>
      
    <div id='padding'>
  <div id='card' className='card container'style={{margin:"5rem"}}>
        <center>
        <h2 className='text-dark'>
            Update Student
        </h2>
        </center>
        <form >
              
    <div className='card-body '>
    <div className='row'>

{/* <img style={{width:"230px",height:"230px"}} src='https://www.clker.com/cliparts/2/v/F/E/U/d/icon-contact-16-hi.png' alt='no image'/> */}

    <div className='col-lg 12 m-2'>
        
        <div className='form-group'>
            <label>Name</label>
            <input style={{color:"black"}} type="text"  onChange={(e)=>setName(e.target.value)} value={Name} className='form-control' />

        </div>
        <div className='form-group'>
            <label>RegisterNo</label>
            <input style={{color:"black"}} type="text"  onChange={(e)=>setRegisterNo(e.target.value)} value={RegisterNo} className='form-control' />
              
           
            

        </div>
        <div className='form-group'>
            <label>English</label>
            <input style={{color:"black"}}  type="text" onChange={(e)=>setEnglish(e.target.value)} value={English} className='form-control'/>

        </div>
        <div className='form-group'>
            <label>Maths</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setMaths(e.target.value)} value={Maths} className='form-control'/>

        </div>
        <div className='form-group'>
            <label>SocialScience</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setSocialScience(e.target.value)} value={SocialScience} className='form-control'/>

        </div>
        <div className='form-group'>
            <label>Status</label>
            <input style={{color:"black"}} type="text" onChange={(e)=>setStatus(e.target.value)} value={Status} className='form-control'/>

     

    </div><br></br>
    <Button     onClick={(e)=>handleUpdate(e)} className='btn btn-success'>Update</Button>

  </div>
    </div>
    
</div>
  

        </form>
    
  </div>
  </div>


 

    </>
  )
}

export default Edit