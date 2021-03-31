import React from "react";
import EditableWidget from "./editable-widget";

const ImageWidget = (
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
                    <img width={widget.width}
                         height={widget.height}
                         src={widget.src}/>
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

export default ImageWidget