import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const TableView = ({ studentData, departments }) => {
  const [data, setData] = useState([])
  const [fields, setFields] = useState([])
  const [centralData, setCentralData] = useState({ mean: 0, median: 0, mode: [] })
  const { group, searchTerm } = useParams()
  const history = useHistory()

  useEffect(() => {
    const reduceData = (parameter) => {
      let filteredData = []
      studentData.forEach(student => {
        student.grades.forEach(grade => {
          if (grade[parameter] === searchTerm) {
            filteredData.push(
              {
                ...student,
                grades: [grade]
              }
            )
          }
        })
      })
      setData(filteredData)
      setFields([searchTerm])
    }

    switch (group) {
      case 'advisory':
        let studentAdvisoryData = []
        studentData.forEach(student => {
          if (student.advisor === searchTerm) {
            studentAdvisoryData.push(
              student
            )
          }
        })
        setData(studentAdvisoryData)
        setFields(departments)
        break
      case 'class':
        reduceData('title')
        break
      case 'department':
        reduceData('department')
        break
      default:
        setData(studentData)
        setFields(departments)
    }

  }, [group, searchTerm])

  useEffect(()=> {
    const calculateCentralMeasures = () => {
      let allGrades = []
      data.forEach(student => {
        student.grades.forEach(grade => {
          allGrades.push(grade.grade)
        })
      })

      const n = allGrades.length
      let sum = 0
      allGrades.forEach(grade => sum += grade)
      const mean = Math.trunc(sum / n)

      let median = 0
      allGrades.sort()
      median = (n % 2 === 0) ? (allGrades[n / 2 - 1] + allGrades[n / 2]) / 2 : allGrades[(n - 1) / 2]

      let modes = [], count = [], i, number, maxIndex = 0;

      for (i = 0; i < n; i += 1) {
        number = allGrades[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
          maxIndex = count[number];
        }
      }

      for (i in count)
        if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
            modes.push(Number(i));
          }
        }

      setCentralData({
        mean: mean,
        median: median,
        mode: modes
      })
    }
    calculateCentralMeasures()
  }, [data])

  return (
    <>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <figure>
              <div className="row justify-content-center">
                <h2 className="justify-content-center display-4">
                  {group.charAt(0).toUpperCase() + group.slice(1)}: {searchTerm}
                </h2>
              </div>
            </figure>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p>Mean: {centralData.mean}</p>
              <p>Median: {centralData.median}</p>
              <p>Modes: {JSON.stringify(centralData.mode)}</p>
            </div>
          </div>
        </div>
      </div>



      <table className='table table-hover'>
        <thead>
        <tr>
          <th scope="col">Last Name</th>
          <th scope="col">First Name</th>
          {
            fields.map((field) => {
              return (
                <th scope="col">{field}</th>
              )
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          data.map((student) => {
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
    </>
  )
}

export default TableView