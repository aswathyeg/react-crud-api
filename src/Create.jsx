import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const[values,setValues]=useState({
    name:"",
    email:"",
    phone:""
  })
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then(res=>{
      console.log(res)
      navigate("/")
    })
    .catch(err=>console.log(err))

  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div w-50 px-5 pt-3 pb-5 rounded bg-white border shadow p-4>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label>Name</label>
            
            <input type="text" name="name" onChange={(e)=>setValues({...values,name:e.target.value})}
            className='form-control'></input>
          </div>
          <div className='mb-2'>
            <label>Email</label>
            
            <input type='email' name="email" onChange={(e)=>setValues({...values,email:e.target.value})}
            className='form-control'></input>
          </div>
          <div className='mb-3'>
            <label>Phone</label>
            
            <input type="text" onChange={(e)=>setValues({...values,phone:e.target.value})}
            className='form-control'></input>
          </div>
          <Button type="submit" className='btn btn-success me-2'>Add</Button>
          <Link to='/' className='btn btn-primary'>Back</Link>
        </form>
      </div>
    </div>
  ) 
}

export default Create