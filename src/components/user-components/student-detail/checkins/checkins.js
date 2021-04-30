import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CheckinCard from './checkin-card'
import WidgetCard from './widget-card'
import checkinsService from '../../../../services/checkins-service'

const Checkins = ({
                    student,
                    checkins = [],
                    findCheckinsForStudent,
                    createCheckin,
                    deleteCheckin,
                    updateCheckin
                  }) => {

  const [editCheckin, setEditCheckin] = useState({})

  useEffect(() => {
    findCheckinsForStudent(student._id);
    setEditCheckin({})
  }, [findCheckinsForStudent, student]);

  return (
    <div>
      <i className="fas fa-plus fa-2x float-right"
         onClick={() => createCheckin(student._id)}/>
      <h3>Checkins ({checkins.length})</h3>

      <ul className="list-group">
        {
          checkins.map((checkin, index) =>
            <li className="list-group-item">
              {
                editCheckin._id !== checkin._id &&
                <i className="fas fa-cog fa-lg float-right"
                   onClick={() => setEditCheckin(checkin)}/>
              }
              <CheckinCard checkin={checkin}
                           editing={checkin._id === editCheckin._id}
                           updateCheckin={updateCheckin}
                           deleteCheckin={deleteCheckin}
                           setEditCheckin={setEditCheckin}/>
            </li>
          )
        }
      </ul>
    </div>

    // <div className="row">
    //   <div className="col-8">
    //     <div className="row">
    //       <div className="col-8">
    //         <h4>Check-ins</h4>
    //       </div>
    //
    //       <button className='btn btn-primary float-right'>Create new checkin</button>
    //     </div>
    //     {
    //       checkins.length === 0 &&
    //       <p>This student has no checkins</p>
    //     }
    //
    //     <ul className="list-group">
    //       {
    //         checkins.map(checkin => {
    //           return (
    //             <>
    //               <CheckinCard checkin={checkin}/>
    //               <br/>
    //             </>
    //           )
    //         })
    //       }
    //     </ul>
    //   </div>
    //   <div className="col-4">
    //     <h4>Events and Tasks</h4>
    //     <ul className="list-group">
    //       {
    //         checkins.map((checkin) => {
    //           return (
    //             checkin.items.map(item => {
    //               return (
    //                 <>
    //                   <WidgetCard item={item}/>
    //                   <br/>
    //                 </>
    //               )
    //             })
    //           )
    //         })
    //       }
    //     </ul>
    //   </div>
    // </div>
  )
}

const stpm = (state) => {
  return {
    checkins: state.checkinReducer.checkins
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
    createCheckin: (studentId) => {
      checkinsService.createCheckin(studentId)
        .then(checkinCreated => dispatch({
          type: 'CREATE_CHECKIN',
          checkin: checkinCreated
        }));
    },
    deleteCheckin: (checkin, setEditWidget) => {
      checkinsService.deleteCheckin(checkin.id)
        .then(response => dispatch({
          type: 'DELETE_CHECKIN',
          checkin: checkin
        }));
      setEditWidget({});
    },
    updateCheckin: (checkin, setEditWidget) => {
      checkinsService.updateCheckin(checkin)
        .then(response => dispatch({
          type: 'UPDATE_CHECKIN',
          checkin: checkin
        }));
      setEditWidget({});
    }
  }
}

export default connect(stpm, dtpm)(Checkins);