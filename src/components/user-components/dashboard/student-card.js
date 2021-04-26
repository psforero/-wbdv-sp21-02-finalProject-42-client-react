import React from 'react'
import {Link} from 'react-router-dom';

const StudentCard = (
    {
        student
    }) => {
    return(
        <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-2 card-group">
            <div className="card row-4">
                <div className="card-body">
                    <h5 className="card-title">{student.lastName} {student.firstName}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: {student.email}</li>
                        <li className="list-group-item">Advisor: {student.advisor}</li>
                    </ul>
                </div>
            </div>
        </div>
)
}

export default StudentCard
//
// <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-2 card-group">
//   <div className="card row-4">
//   <div className="card-body">
//   <h5 className="card-title">{student.lastName} {student.firstName}</h5>
// <ul className="list-group list-group-flush">
// <li className="list-group-item">Math: {student.Math}</li>
// <li className="list-group-item">English: {row.English}</li>
// <li className="list-group-item">Spanish: {row.Spanish}</li>
// </ul>
// <Link className="btn btn-primary"
// onClick={() => setStudent(row)}
// to={`/profile/search/${advisor}/${row.Name}`}>
// More Details
// </Link>
// </div>
// </div>
// </div>