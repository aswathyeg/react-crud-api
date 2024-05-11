import React, { useEffect,useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const[data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))

  
  },[])
  const handleDelete=(id)=>{
    const confirm=window.confirm(' Would you like to Delete ? ')
    if (confirm){
      axios.delete('http://localhost:3000/users/'+id)
      .then(res=>{
        location.reload();
      }).catch(err=>console.log(err))
    }

  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
<div className='d-flex justify-content-end'>
  <Link to ="/create" className="btn btn-success">Add</Link>
</div>
      <Table className='table table-striped'>
      <thead>
        <tr>
          <th>
            Id
          </th>
          <th>
           Name
          </th>
          <th>
          Username
          </th>
          <th>
           Email
          </th>
          <th>
           Phone
          </th>
          <th>
           Website
          </th>
          <th>
           Action
          </th>
        </tr>
      </thead>
      {data.map((items,i)=>
    <tbody>
    <tr key={i}>
      <td>
{items.id}
      </td>
      <td>
{items.name}
      </td>
      <td>
{items.username}
      </td>
      <td>
{items.email}
      </td>
      <td>
{items.phone}
      </td>
      <td>
{items.website}
      </td>
      <td>
      <Link to ={`/read/${items.id}`} className='btn btn-sm btn-primary me-2' >Read</Link>
      <Link to ={`/update/${items.id}`} className='btn btn-sm btn-info me-2' >Edit</Link>
    
      <Button onClick={e=>handleDelete(items.id)} className='btn btn-sm btn-danger me-2' >Delete</Button>
      </td>
    </tr>
  </tbody>)}
      

</Table> 
</div>
    </div>
  )
}

export default Home