import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CheckinCard from './checkin-card'
import WidgetCard from './widget-card'
import checkinsService from '../../../../services/checkins-service'

const Checkins = ({
                    user,
                    student,
                    checkins = [],
                    findCheckinsForStudent,
                    createCheckin,
                    deleteCheckin,
                    updateCheckin
                  }) => {

  const [editCheckin, setEditCheckin] = useState({})
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEditCheckin({})
    findCheckinsForStudent(student._id);
  }, []);

  useEffect(() => {
    const totalEvents = []
    checkins.forEach(checkin => {
      checkin.items.forEach(item => {
        totalEvents.push(item)
      })
    })
    setEvents(totalEvents)
  }, [checkins])

  return (
    <div>
      <h3>Checkins ({checkins.length})</h3>
      <>
        {
          user.type !== 'STUDENT' &&
          <button className="btn btn-success fas fa-lg fa-plus"
                  onClick={() => createCheckin(student._id, user._id)}>Create new</button>

        }
      </>

      <div className="row">
        <div className="col-8">
          <h4>Check-ins</h4>
          <div className="row">
            {
              checkins.map(checkin => {
                return (
                  <div className="card col-12">
                    <CheckinCard checkin={checkin}
                                 editing={checkin._id === editCheckin._id}
                                 updateCheckin={updateCheckin}
                                 deleteCheckin={deleteCheckin}
                                 setEditCheckin={setEditCheckin}/>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-4">
          <h4>Events and Task</h4>
          <ul className="list-group">
            {
              events.map(widget => {
                return (
                  <li className="list-group-item">
                    <WidgetCard widget={widget}/>
                    <br/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

const stpm = (state) => {
  return {
    checkins: state.checkinReducer.checkins,
    user: state.userReducer.user
  }
}

const dtpm = (dispatch) => {
  return {
    findCheckinsForStudent: (studentId) => {
      checkinsService.getCheckinsForUser(studentId, 'STUDENT')
        .then(checkins => dispatch({
          type: 'FIND_CHECKINS_FOR_STUDENT',
          checkins: checkins
        }));
    },
    createCheckin: (studentId, teacherId) => {
      checkinsService.createCheckin(studentId, teacherId)
        .then(checkinCreated => dispatch({
          type: 'CREATE_CHECKIN',
          checkin: checkinCreated
        }));
    },
    deleteCheckin: (checkin, setEditWidget) => {
      checkinsService.deleteCheckin(checkin._id)
        .then(response => dispatch({
          type: 'DELETE_CHECKIN',
          checkin: checkin
        }));
      setEditWidget({});
    },
    updateCheckin: (checkin, setEditWidget) => {
      checkinsService.updateCheckin(checkin)
        .then(checkin => dispatch({
          type: 'UPDATE_CHECKIN',
          checkin: checkin
        }));
      setEditWidget({});
    }
  }
}

export default connect(stpm, dtpm)(Checkins);