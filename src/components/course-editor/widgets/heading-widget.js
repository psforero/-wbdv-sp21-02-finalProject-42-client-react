import React, {useState} from 'react'
import EditableWidget from "./editable-widget";

const HeadingWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        editingWid,
        setEditing
    }) => {
    return(
        <div className="row">
            {
                editingWid !== widget.id &&
                <div className="col">
                    {widget.size.toString() === "1" && <h1>{widget.text}</h1>}
                    {widget.size.toString() === "2" && <h2>{widget.text}</h2>}
                    {widget.size.toString() === "3" && <h3>{widget.text}</h3>}
                    {widget.size.toString() === "4" && <h4>{widget.text}</h4>}
                    {widget.size.toString() === "5" && <h5>{widget.text}</h5>}
                    {widget.size.toString() === "6" && <h6>{widget.text}</h6>}
                </div>
            }
            <EditableWidget
                widget={widget}
                deleteWidget={deleteWidget}
                updateWidget={updateWidget}
                editingWid={editingWid}
                setEditing={setEditing}
            />
        </div>
    )
}

export default HeadingWidget