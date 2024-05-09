import React from 'react'
import {users} from '../db.json'
import { Table,Button } from 'react-bootstrap'
const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>

      <Table>
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
      

</Table> 
</div>
    </div>
  )
}

export default Home