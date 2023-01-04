import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function View() {
    const [id,setId] = useState('')
    const [Name,setName] = useState('')
    const [RegisterNo,setRegisterNo] = useState('')
    const [English,setEnglish] = useState('')
    const [Maths,setMaths] = useState('')
    const [SocialScience,setSocialScience] = useState('')
    const [Status,setStatus] = useState('')



    useEffect(()=>{
        setId(localStorage.getItem("id").setItem)
        setName(localStorage.getItem("Name"))
        setRegisterNo(localStorage.getItem("RegisterNo"))
        setEnglish(localStorage.getItem("English"))
        setMaths(localStorage.getItem("Maths"))
        setSocialScience(localStorage.getItem("SocialScience"))
        
        setStatus(localStorage.getItem("Status"))

       

    },[])
    // var index = User.map(item=>item.id).indexOf(id)
// let history=useNavigate()

//     let handleview  = (e)=> {
//         let user= User[index]
//     user.Name=Name
//     user.RegisterNo=RegisterNo
//     user.English=English
//     user.Maths=Maths
//     user.SocialScience=SocialScience
//     user.Status=Status
    
//         e.preventDefault()

//     }

  return (
    <div>
        <div id='padding'>
            
  <div id='card' className='card container'style={{margin:"5rem"}}>
        <center>
        <h2 className='text-dark'>
             Student View
        </h2>

        </center>
        <form >
            
              
    <div  className='card-body '>
    <div className='row'>
    {/* <img style={{width:"230px",height:"230px"}} src='https://www.clker.com/cliparts/2/v/F/E/U/d/icon-contact-16-hi.png' alt='no image'/> */}

    <div className='col-lg 12 m-2'>
        
        <div className='form-group'>
            <label>Name</label>
            <input style={{color:"black"}} type="text"   value={Name} className='form-control' />

        </div>
        <div className='form-group'>
            <label>RegisterNo</label>
            <input style={{color:"black"}} type="text"    value={RegisterNo} className='form-control' />
              
           
            

        </div>
        <div className='form-group'>
            <label>English</label>
            <input style={{color:"black"}}  type="text"    value={English} className='form-control'/>

        </div>
        <div className='form-group'>
            <label>Maths</label>
            <input style={{color:"black"}} type="text"   value={Maths} className='form-control'/>

        </div>
        <div className='form-group'>
            <label>SocialScience</label>
            <input style={{color:"black"}} type="text"   value={SocialScience} className='form-control'/>

        </div>
        <div className='form-group'>
            <label>Status</label>
            <input style={{color:"black"}} type="text"  value={Status} className='form-control'/>

        </div><br></br>
        <Link to={'/'}>
        <button  className='btn btn-primary'>Back To Home</button>

        </Link>

       

    </div>
   

  </div>
    </div>
  

        </form>
    
  </div>

  </div>

    </div>
  )
}

export default View