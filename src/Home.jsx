import React from 'react'
import {users} from '../db.json'
import { Table,Button } from 'react-bootstrap'
const Home = () => {
  return (
    <div>
     <Table striped gap-2 size='lg'>
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
        </tr>
      </thead>
      {users.map((items)=>
    <tbody>
    <tr>
      <th>
{items.id}
      </th>
      <th>
{items.name}
      </th>
    </tr>
  </tbody>)}
      
{/* {users.map((items)=>{return(
  <p>{items.users.name}</p>
)

})} */}
</Table> 

    </div>
  )
}

export default Home