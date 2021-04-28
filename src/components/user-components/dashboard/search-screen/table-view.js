import React, { useState, useEffect } from 'react'
import spreadsheetService from '../../../../services/spreadsheet-service'

const TableView = () => {
  const [spreadsheetAdvisories, setSpreadsheetAdvisories] = useState([])
  const [spreadsheetData, setSpreadsheetData] = useState([])
  const [advisory, setAdvisory] = useState('')
  const [fields, setFields] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    spreadsheetService.getAdvisors()
      .then((advisories) => {
        setSpreadsheetAdvisories(advisories)
      })

    setFields([...new Set(spreadsheetData[0])])

    spreadsheetData.forEach((row, rowIndex) => {
      if (rowIndex !== 0) {
        let student = {
          grades: []
        }
        row.forEach((col, colIndex) => {
          let grade = {}
          if (colIndex === 0) {
            student.lastName = col
          } else if (colIndex === 1) {
            student.firstName = col
          } else if (colIndex < fields.length) {
            grade.grade = parseInt(col)
            grade.department = fields[colIndex]
            grade.title = row[colIndex + fields.length - 2]
            student.grades.push(grade)
          }
        })
        students.push(student)
      }
    })
  }, [spreadsheetData])

  const getAdvisoryData = (advisorName) => {
    spreadsheetService.getAdvisoryData(advisorName[0])
      .then((advisoryData) => {
        setSpreadsheetData(advisoryData)
      })
  }
  useEffect(() => {
    setStudents([])
  }, [advisory])

  return (
    <>
      <h1>Table View</h1>
      <a
        href="https://docs.google.com/spreadsheets/d/1qVhOEMqrhgvsmrHk8aXx3KzRMaNo6Y7jTHtPAZtrC24/edit#gid=0"
        target='_blank'>Spreadsheet link</a>
      <h2>Advisories</h2>
      <ul>
        {
          spreadsheetAdvisories.map((advisoryName, index) => {
            return (
              <li>{advisoryName}
                <button className='btn btn-info'
                        onClick={() => {
                          getAdvisoryData(advisoryName)
                          setAdvisory(advisoryName)
                        }
                        }>
                  get
                </button>
              </li>
            )
          })
        }
      </ul>

      <ul>
        {
          students.map((student) => {
            return (
              <>
                <li>{student.lastName}, {student.firstName}</li>
                <ul>
                  {
                    student.grades.map((grade) => {
                      return (
                        <li>Class: {grade.title} | Department: {grade.department} |
                          Grade: {grade.grade}</li>
                      )
                    })
                  }
                </ul>
              </>
            )
          })
        }
      </ul>

      <br/>


      <h5>Advisory: {advisory[0]}, {advisory[1]}</h5>
      <table className='table table-hover'>
        <thead>
        <tr>
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