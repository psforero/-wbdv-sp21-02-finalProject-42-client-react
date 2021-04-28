import React, { useState, useEffect } from 'react';
import usersService from '../../../services/users-service';

const Directory = () => {
  const [directory, setDirectory] = useState([])

  useEffect(()  => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const directory = await usersService.findAllUsers()
    setDirectory(directory.filter(account => account.type !== 'STUDENT'))

  }

  return (
    <div>
      <h1>Directory</h1>
      <ul className="list-group">
        {directory.map((staff) =>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <figure>
                  <div className="row justify-content-center">
                    <h1 className="justify-content-center display-1">
                      {staff.firstName.charAt(0)}{staff.lastName.charAt(0)}
                    </h1>
                  </div>
                </figure>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{staff.lastName}, {staff.firstName}</h5>
                  <p className="card-text">{staff.type}</p>
                  <a className="fas fa-envelope fa-2x"> {staff.email}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
export default Directory;