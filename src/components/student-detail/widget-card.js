import React from 'react';

const WidgetCard = ({widget}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">{widget.title}</h6>
                <h6 className="card-subtitle">{widget.date}</h6>
                <hr/>
                <p className="card-text">{widget.text}</p>
            </div>
        </div>
    )
}

export default WidgetCard;