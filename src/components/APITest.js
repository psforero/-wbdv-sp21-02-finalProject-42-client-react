import React, { useState, useEffect } from 'react'
import usersService from '../services/users-service'
import gradesService from '../services/grades-service'
import checkinsService from '../services/checkins-service'
import spreadsheetService from '../services/spreadsheet-service'

const APITest = () => {
  const [users, setUsers] = useState([])
  const [grades, setGrades] = useState([])
  const [checkins, setCheckins] = useState([])
  const [spreadsheetAdvisories, setSpreadsheetAdvisories] = useState([])
  const [spreadsheetData, setSpreadsheetData] = useState({values:[]})

  useEffect(() => {
    spreadsheetService.getAdvisors()
      .then((advisories) => {
        setSpreadsheetAdvisories(advisories.values)
      })
  }, [])

  const getAllUsers = () => {
    usersService.findAllUsers()
      .then((users) => {
        setUsers(users)
      })
  }

  const getAllGrades = () => {
    gradesService.findAllGrades()
      .then((grades) => {
        setGrades(grades)
      })
  }

  const getAllCheckins = () => {
    checkinsService.findAllCheckins()
      .then((checkins) => {
        setCheckins(checkins)
      })
  }

  const getAdvisoryData = (advisorName) => {
    spreadsheetService.getAdvisoryData(advisorName[0])
      .then((advisoryData) => {
        setSpreadsheetData(advisoryData)
      })
  }

  return (
    <>
      <h1>APIs Test and Demo</h1>
      <p>Users, grades, and checkins are coming from the MongoDB. Only the spreadsheet data is
        coming from Google Sheets</p>
      <br/>
      <h2>Users</h2>
      <button className='btn btn-primary' onClick={getAllUsers}>Get all users</button>
      <table className='table table-bordered'>
        <tr>
          <th>Name***</th>
          <th>Username</th>
          <th>Password</th>
          <th>Type</th>
          <th>Advisor Id</th>
          <th>User Id</th>
        </tr>
        {
          users.map((user, index) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.type}</td>
                <td>{user.advisorId}</td>
                <td>{user._id}</td>
              </tr>
            )
          })
        }
      </table>
      <p>*** NOTE The schema was updated and will show firs/last name separately. These are the old
        values which only have 'name'.</p>
      <h2>Grades</h2>
      <button className='btn btn-primary' onClick={getAllGrades}>Get all grades</button>
      <table className='table table-bordered'>
        <tr>
          <th>Student Id</th>
          <th>Title</th>
          <th>Department</th>
          <th>Grade</th>
          <th>Date***</th>
          <th>Grade Id</th>
        </tr>
        {
          grades.map((grade, index) => {
            return (
              <tr>
                <td>{grade.studentId}</td>
                <td>{grade.title}</td>
                <td>{grade.department}</td>
                <td>{grade.grade}</td>
                <td>{grade.date}</td>
                <td>{grade._id}</td>
              </tr>
            )
          })
        }
      </table>
      <p>*** the format of the date may change. Right now it is a plain string - should be a JS
        Date</p>
      <h2>Checkins</h2>
      <button className='btn btn-primary' onClick={getAllCheckins}>Get all checkins</button>
      <table className='table table-bordered'>
        <tr>
          <th>By teacher id</th>
          <th>For student id</th>
          <th>Content</th>
          <th>Date</th>
          <th>Items</th>
        </tr>
        {
          checkins.map((checkin, index) => {
            return (
              <tr>
                <td>{checkin.byTeacherId}</td>
                <td>{checkin.forStudentId}</td>
                <td>{checkin.content}</td>
                <td>{checkin.date}</td>
                <td>
                  <ul>
                    {
                      checkin.items.map((item) => {
                        return (
                          <>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                            <li>{item.type}</li>
                            <li>{item.date}</li>
                            <li>{item.completed}</li>
                          </>
                        )
                      })
                    }
                  </ul>
                </td>
              </tr>
            )
          })
        }
      </table>
      <h2>Spreadsheet</h2>
      <a
        href="https://docs.google.com/spreadsheets/d/1qVhOEMqrhgvsmrHk8aXx3KzRMaNo6Y7jTHtPAZtrC24/edit#gid=0"
        target='_blank'>Spreadsheet link</a>
      <p>Get advisory data for</p>
      <ul>
        {
          spreadsheetAdvisories.map((advisoryName, index) => {
            if (index !== 0) // the first item is the top row, which contains the data title
              return (
                <li>{advisoryName}
                  <button className='btn btn-info' onClick={() => getAdvisoryData(advisoryName)}>get</button>
                </li>
              )
          })
        }
      </ul>
      <h5>Too lazy to format this</h5>
      {
        spreadsheetData.values.map(data => {
          return (
            <p>{data}</p>
          )
        })
      }
    </>
  )
}

export default APITest