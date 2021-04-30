import React, { useState, useEffect } from 'react';
import WidgetCard from './widget-card';

const CheckinCard = ({
                       checkin,
                       editing,
                       updateCheckin,
                       deleteCheckin,
                       setEditCheckin
                     }) => {
  const [cachedCheckin, setCachedCheckin] = useState(checkin)

  useEffect(() => {
    setCachedCheckin(checkin)
  }, [checkin])

  return (
    <>
      {
        !editing &&
        <div className="card-body">
          <i className="fas fa-cog fa-lg float-right btn-outline-primary"
             onClick={() => setEditCheckin(checkin)}/>
          <div className="row card-title">
            <div className="col-6">
              <h6>Created on: {new Date((checkin.date)).toLocaleDateString('en-US')}</h6>
            </div>
            <div className="col float-right">
              <h6>Created by: {checkin.byTeacherId}</h6>
            </div>
          </div>
          <div className="row card-text">
            <p>{checkin.content}</p>
          </div>

          <ul className="list-group">
            {
              checkin.items.map(item => {
                return (
                  <li className="list-group-item">
                    <WidgetCard item={item}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
      {
        editing &&
        <div className="card-body">
          <i className="fas fa-fw fa-times float-right btn-outline-dark"
             title="Cancel"
             onClick={() => setEditCheckin({})}/>
          <i className="fas fa-fw fa-check float-right btn-outline-success"
             title="Update"
             onClick={() => updateCheckin(cachedCheckin, setEditCheckin)}/>
          <i className="fas fa-fw fa-trash float-right btn-outline-danger"
             title="Delete"
             onClick={() => deleteCheckin(checkin, setEditCheckin)}/>
          <div className="row card-title">
            <div className="col-8">
              <h6>Created on: {new Date((checkin.date)).toLocaleDateString('en-US')}</h6>
            </div>
            <div className="float-right">
              <h6>Created by: {checkin.byTeacherId}</h6>
            </div>
          </div>
          <div className="row card-text">
            <label htmlFor="checkin-description"
                   className="form-label">
              Check-in text
            </label>
            <textarea className="form-control"
                      value={cachedCheckin.content}
                      id="checkin-description"
                      onChange={(e) =>
                        setCachedCheckin({ ...cachedCheckin, content: e.target.value })}
                      cols="30"
                      rows="8">
            </textarea>
          </div>
          <br/>
          <ul className="list-group">
            {
              cachedCheckin.items.map(item => {
                return (
                  <li className="list-group-item">
                    <WidgetCard item={item}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
    </>
  )
}

export default CheckinCard
