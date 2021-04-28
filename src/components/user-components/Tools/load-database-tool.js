import React, { useState, useEffect } from 'react'
import userService from '../../../services/users-service'

const LoadDatabase = () => {
  const [checked, setChecked] = useState(false)
  const [response, setResponse] = useState(undefined)
  const [success, setSuccess] = useState(false)
  const [wait, setWait] = useState(false)
  // const [sheetURL, setSheetURL] = useState('')

  const handleSubmit = async () => {
    if (window.confirm('Are you sure you want to proceed?')) {
      setWait(true)
      try {
        const initializeResponse = await userService.initializeUserDatabase()
        setResponse(initializeResponse)
        console.log(initializeResponse)
        setSuccess(true)
      } catch (e) {
        setResponse(e)
        setSuccess(false)
      }
      setWait(false)
    } else {
      setChecked(false)
    }
  }
  return (
    <>
      <h2>Load new database</h2>
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Warning!</h4>
        <p>Loading a new spreadsheet will automatically DELETE ALL current accounts and grades from
          the database.</p>
        <hr/>
        <p className="mb-0">When the application loads a spreadsheet, it automatically generates the
          appropriate accounts and resets the grades database. Any account changes, previously saved
          grades, and existing checkins will be lost.</p>
        <p>Current admin accounts will need to be deleted or updated manually in the Accounts
          tool</p>
        <br/>
        <p>If you just want to create a data pull go to the 'Data' tab
          instead</p>
      </div>

      {
        !checked &&
        <button className="button btn btn-warning"
                onClick={() => setChecked(true)}>
          I understand the above statement and wish to continue
        </button>
      }
      {
        checked &&
        <>
          {
            wait &&
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
          {
            response !== undefined && !wait &&
            <>
              {
                success &&
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Success!</h4>
                  <p>The new data set was successfully loaded.</p>
                  <hr/>
                  <ul>
                    <li>Accounts deleted: {response.users.deletedCount}</li>
                    <li>Grades deleted: {response.grades.deletedCount}</li>
                    <li>Checkins deleted: {response.checkins.deletedCount}</li>
                    <li>New staff accounts: {response.staffAccounts}</li>
                    <li>New student accounts: {response.studentAccounts}</li>
                  </ul>
                  <p>You can see all created accounts in the Accounts Tool</p>
                  <hr/>
                  <p>Accounts for all students can be accessed by using first name and last name as
                    they
                    appear in the data sheet.</p>
                  <p>Username for 'John Smith': johnSmith</p>
                  <p>Password: pass123</p>
                </div>
              }
              {
                !success &&
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Oops.. something went wrong</h4>
                  <p>The new data set failed to load.</p>
                  <hr/>
                  <p>Error: {JSON.stringify(response)}</p>
                  <hr/>
                </div>
              }
            </>
          }
          {
            response === undefined &&
            <div className="row">
              <button className="button btn btn-info"
                      onClick={() => handleSubmit()}>
                Load new database
              </button>
              <button className="button btn btn-outline-dark"
                      type="button"
                      onClick={() => setChecked(false)}>
                Cancel
              </button>
            </div>
          }
        </>
      }
    </>
  )
}

export default LoadDatabase