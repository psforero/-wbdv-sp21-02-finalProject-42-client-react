import React, { useState } from 'react'
import usersService from '../../../services/users-service';

const AccountsTool = ({ user }) => {
  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    const users = await usersService.findAllUsers()
    setUsers(users)
    if (user.type !== 'ADMIN') {
      setUsers(
        users.filter(u => u.type === 'STUDENT')
      )
    }
  }
  return (
    <>

      <h2>Account management</h2>
      <button className='btn btn-primary' onClick={getAllUsers}>Get all users</button>
      <table className='table table-bordered'>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Username</th>
          <th>Password</th>
          <th>Type</th>
          <th>Advisor</th>
          <th>Email</th>
        </tr>
        {
          users.map((user, index) => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.type}</td>
                <td>{user.advisor}</td>
                <td>{user.email}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default AccountsTool