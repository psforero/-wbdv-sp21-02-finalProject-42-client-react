import React, { useState } from 'react'

const DataTool = ({ user }) => {
  const [scheduledPulls, setScheduledPulls] = useState([])

  return (
    <>
      <h2>Data Tools</h2>
      {
        user.type === 'ADMIN' &&
        <div>
          <h3>Schedule a data pull</h3>
          <p>Let the staff know when your next data pull will be so they can have their spreadsheet
            up to date by then</p>
          <h3>Create new data pull</h3>
          <p>Add the current state of the spreadsheet to the grades timeline</p>
          <h3>Delete past data pull</h3>
          <p>Remove any grades that were added to the timeline during a data pull</p>
        </div>
      }
      {
        user.type === 'STAFF' &&
        <div>
          <h3>Data pulls</h3>
          <h4>Scheduled:</h4>
          <ul>
            {scheduledPulls.map((pull) => {
              return (
                <li>{pull}</li>
              )
            })}
          </ul>
          <h4>Previous:</h4>
          <ul>
            {scheduledPulls.map((pull) => {
              return (
                <li>{pull}</li>
              )
            })}
          </ul>
        </div>
      }
    </>
  )
}

export default DataTool