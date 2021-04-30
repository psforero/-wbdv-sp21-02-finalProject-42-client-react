import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const StudentSearchResult = ({ studentData, departments }) => {
  const [results, setResults] = useState([])
  const { searchName } = useParams()
  const history = useHistory()

  useEffect(() => {
    const reduceData = () => {
      const terms = searchName.split(' ')
      const hits = []
      studentData.forEach(student => {
        terms.forEach(term => {
          if (student.firstName === term || student.lastName === term) {
            hits.push(student)
          }
        })
      })
      setResults(hits)
    }
    reduceData()
  }, [searchName, studentData])


  return (
    <>
      {
        results.length !== 0 &&
        <table className='table table-hover'>
          <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            {
              departments.map((field) => {
                return (
                  <th scope="col">{field}</th>
                )
              })
            }
          </tr>
          </thead>
          <tbody>
          {
            results.map((student) => {
              return (
                <tr
                  onClick={() => history.push(`/dashboard/student/${student.lastName}/${student.firstName}`)}>
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
      }
      {
        results.length === 0 &&
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">Ooops...!</h4>
          <p>We couldn't find anyone who matched that search. Check your search terms and try again
            or try searching by groups</p>
          <hr/>
          <p className="mb-0">Remember you can just use the first OR last name to find matches.</p>
        </div>
      }

    </>
  )
}

export default StudentSearchResult