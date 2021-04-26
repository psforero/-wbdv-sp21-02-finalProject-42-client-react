import React from 'react';

const WidgetCard = ({item}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <h6 className="card-subtitle">{item.date}</h6>
                <hr/>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Completed: {item.completed}</p>
            </div>
        </div>
    )
}

export default WidgetCard;