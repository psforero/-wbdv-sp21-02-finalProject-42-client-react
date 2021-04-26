import React from 'react';
import WidgetCard from '../student-detail/widget-card';

const CheckinCard = ({checkin}) => {
    return (
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
    );
}

export default CheckinCard;