import React from 'react'

const StudentCard = ({ student }) => {
  return (
    <div className="card">
      <img
        src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
        alt="Profile"
        width="200"
        height="150"/>
      <div className="card-body">
        <h5 className="card-title">{student.lastName}, {student.firstName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: {student.email}</li>
        <li className="list-group-item">Advisor: {student.advisor}</li>
      </ul>
    </div>

  )
}

export default StudentCard
