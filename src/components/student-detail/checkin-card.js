import React from 'react';
import WidgetCard from './widget-card';

const CheckingCard = ({item}) => {
    return (
        <div className="border rounded border-3">
            <h6>{item.date}</h6>
            <p>{item.text}</p>
            {
                item.widgets.map(widget => {
                    return (
                        <>
                            <WidgetCard widget={widget}/>
                            <br/>
                        </>
                    )
                })
            }
        </div>
    );
}

export default CheckingCard;