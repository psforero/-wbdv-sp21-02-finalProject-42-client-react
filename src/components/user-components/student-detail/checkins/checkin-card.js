import React, { useState, useEffect } from 'react';
import WidgetCard from './widget-card';

const CheckinCard = ({ checkin, editing, updateCheckin, deleteCheckin, setEditCheckin }) => {
  const [cachedCheckin, setCachedCheckin] = useState(checkin)
  useEffect(() => {
    setCachedCheckin(checkin)
  }, [checkin, setCachedCheckin])
  return (
    <>
      {
        editing &&
        <>
          <i className="fas fa-fw fa-check float-right"
             onClick={() => updateCheckin(cachedCheckin, setEditCheckin)}
          />
          <i className="fas fa-fw fa-trash float-right"
             onClick={() => deleteCheckin(checkin, setEditCheckin)}/>
          <br/>
          <div className="row mb-3">
            <div className="border rounded border-3">
              <h6>{checkin.date}</h6>
              <p>{checkin.content}</p>
              {
                checkin.items.map(item => {
                  return (
                    <>
                      <WidgetCard item={item}/>
                      <br/>
                    </>
                  )
                })
              }
            </div>
          </div>
        </>
      }

    </>
  );
}

export default CheckinCard;