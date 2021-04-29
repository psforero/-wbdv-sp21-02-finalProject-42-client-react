import React, { useState, useEffect } from 'react'
import spreadsheetService from '../../../../services/spreadsheet-service'
import { Link, useParams } from 'react-router-dom';

const TableView = ({students, fields}) => {
  return (
    <>
      <table className='table table-hover'>
        <thead>
        <tr>
          <th scope="col">Last Name</th>
          <th scope="col">First Name</th>
          {
            fields.map((department) => {
              return (
                <th scope="col">{department}</th>
              )
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          students.map((student) => {
            return (
              <tr>
                <td>{student.lastName}</td>
                <td>{student.firstName}</td>
                {
                  student.grades.map((grade) => {
                    return (
                      <td
                        data-toggle="tooltip"
                        data-placement="left"
                        title={grade.title}>
                        {grade.grade}
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  )
}

export default TableView

// <ul>
// {
//   students.map((student) => {
//     return (
//       <>
//         <li>{student.lastName}, {student.firstName}</li>
//         <ul>
//           {
//             student.grades.map((grade) => {
//               return (
//                 <li>Class: {grade.title} | Department: {grade.department} |
//                   Grade: {grade.grade}</li>
//               )
//             })
//           }
//         </ul>
//       </>
//     )
//   })
// }
// </ul>