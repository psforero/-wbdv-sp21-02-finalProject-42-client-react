import React, {useState} from 'react'
import EditableWidget from "./editable-widget";

const ParagraphWidget = (
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
                editingWid !== widget.id  &&
                <div className="col">
                    <p>
                        {widget.text}
                    </p>
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

export default ParagraphWidget