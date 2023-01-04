import React from 'react'
import User from './User'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';



function Home() {
    const history = useNavigate()
    const handleDelete = (id)=>{
    let index = User.map(item=>item.id).indexOf(id)
    User.splice(index,1)
    alert("Deleted Successfully")
        console.log(User);
        history('/')



    }


    const handleEdit = (id,Name,RegisterNo,English,Maths,SocialScience,Status)=>{
        localStorage.setItem("id",id)

        localStorage.setItem("Name",Name)
        localStorage.setItem("RegisterNo",RegisterNo)

        localStorage.setItem("English",English)
        localStorage.setItem("Maths",Maths)
        localStorage.setItem("SocialScience",SocialScience)
        localStorage.setItem("Status",Status)




    }

    const handleView = (id,Name,RegisterNo,English,Maths,SocialScience,Status)=>{
      localStorage.setItem("id",id)

      localStorage.setItem("Name",Name)
      localStorage.setItem("RegisterNo",RegisterNo)

      localStorage.setItem("English",English)
      localStorage.setItem("Maths",Maths)
      localStorage.setItem("SocialScience",SocialScience)
      localStorage.setItem("Status",Status)




  }


  return (
    <>
    {/* <h1 className='container'style={{margin:"2rem"}}>
            Home Page 
            

        </h1> */}
       <div style={{margin:"6rem"}} className='container'>
       
       <Link to={'/add'}>
            <button className='btn btn-success m-2 mt-6'>Add Student</button>

            </Link>
        <Table  bordered hover size='sm container' >
      <thead className='bg-dark text-light'>
        <tr>
           
          <th> Name</th>
          <th>Register Number</th>
          <th>English</th>
          <th>Mathematics</th>
          <th>Social Science</th>
          <th>Status</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
            User && User.length > 0 ?
            User.map((item)=>(
                <tr>
                   
                    <td className='text-dark'> {item.Name} </td>
                    <td className='text-dark'> {item.RegisterNo} </td>
                    <td className='text-dark'> {item.English}   </td>
                    <td className='text-dark'> {item.Maths} </td>
                    <td className='text-dark'> {item.SocialScience} </td>
                    <td className='text-dark'> {item.Status} </td>


                    <td>
                        <Link to={'/view'}>
                        <Button onClick={()=>handleEdit(item.id,item.Name,item.RegisterNo,item.English,item.Maths,item.SocialScience,item.Status)} className='btn btn-warning m-1'><i class="fa fa-eye"></i></Button>

                        </Link>
                    <Link to={'/edit'}>
                    <Button onClick={()=>handleView(item.id,item.Name,item.RegisterNo,item.English,item.Maths,item.SocialScience,item.Status)}  className='btn btn-primary m-1'><i class="fa fa-pencil"></i></Button>

                    </Link>
                <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger m-1' ><i class="fa-solid fa-trash"></i></Button>
                    </td>

                   

                </tr>
            )):" No table data available"
        }
      
        
      </tbody>
    </Table>
    <center>
   
    </center>
    
       </div>
       

       
           
    </>
  )
}

export default Home