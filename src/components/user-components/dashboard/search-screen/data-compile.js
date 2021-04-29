import React, { useState, useEffect } from 'react'
import spreadsheetService from '../../../../services/spreadsheet-service'
import { Link, useParams } from 'react-router-dom';
import TableView from './table-view';

const DataCompile = () => {

  const [fields, setFields] = useState([])
  const [students, setStudents] = useState([])
  const [advisories, setAdvisories] = useState([])
  const [spreadsheetData, setSpreadsheetData] = useState([])
  const { group, searchTerm } = useParams();

  useEffect(() => {

    const getAdvisories = async () => {
      const advisoryResponse = await spreadsheetService.getAdvisors()
      setAdvisories(advisoryResponse.reduce((a, b) => a.concat(b), []))
    }
    const getFields = async () => {
      const fieldsResponse = await spreadsheetService.getFields()
      setFields(fieldsResponse[0])
    }
    getAdvisories()
    getFields()
  }, [searchTerm])

  useEffect(() => {
    setSpreadsheetData([])
    const getAdvisoryData = async () => {
      let superData = []
      const data = await spreadsheetService.getAdvisoryData(searchTerm)
      superData = superData.concat(data)
      setSpreadsheetData(superData)
    }

    const getSpreadsheetData = async () => {
      let superData = []
      for (let advisory of advisories) {
        const data = await spreadsheetService.getAdvisoryData(advisory)
        superData = superData.concat(data)
      }
      setSpreadsheetData(superData)
    }
    if (group === 'advisory') {
      getAdvisoryData()
    } else {
      getSpreadsheetData()
    }
  }, [advisories])

  useEffect(() => {
    const setUpStudentList = () => {
      let formattedList = []
      spreadsheetData.forEach((row, rowIndex) => {
        let student = {
          grades: []
        }
        row.forEach((col, colIndex) => {
          let grade = {}
          if (colIndex === 0) {
            student.lastName = col
          } else if (colIndex === 1) {
            student.firstName = col
          } else if (colIndex < fields.length + 2) {
            grade.grade = parseInt(col)
            grade.department = fields[colIndex - 2]
            grade.title = row[colIndex + fields.length]
            student.grades.push(grade)
          }
        })
        formattedList.push(student)
      })
      setStudents(formattedList)
    }
    setUpStudentList()
  }, [spreadsheetData])

  return (
    <>
      <h2>{group.charAt(0).toUpperCase() + group.slice(1)}: {searchTerm}</h2>

      <TableView students={students} fields={fields}/>

    </>
  )
}

export default DataCompile

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