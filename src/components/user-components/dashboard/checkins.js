import React, { useState, useEffect } from 'react'
import CheckinCard from './checkin-card';
import WidgetCard from '../student-detail/widget-card';
import checkinsService from '../../../services/checkins-service';

const Checkins = ({ student }) => {
  const [checkins, setCheckins] = useState([])

  useEffect(() => {
    getCheckinsForUser()
  }, [student])

  const getCheckinsForUser = () => {
    checkinsService.getCheckinsForUser(student._id, student.type)
      .then((checkins) => {
        setCheckins(checkins)
      })
  }

  return (
    <div className="row">
      <div className="col-8">
        <h4>Check-ins</h4>
        <ul className="list-group">
          {
            checkins.map(checkin => {
              return (
                <>
                  <CheckinCard checkin={checkin}/>
                  <br/>
                </>
              )
            })
          }
        </ul>
      </div>
      <div className="col-4">
        <h4>Events and Tasks</h4>
        <ul className="list-group">
          {
            checkins.map((checkin) => {
              return (
                checkin.items.map(item => {
                  return (
                    <>
                      <WidgetCard item={item}/>
                      <br/>
                    </>
                  )
                })
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Checkins