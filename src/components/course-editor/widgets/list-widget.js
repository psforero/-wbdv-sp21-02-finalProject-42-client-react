import React from "react";
import EditableWidget from "./editable-widget";

const ListWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        editingWid,
        setEditing
    }) => {
    return(
        <div class = "row">
            {
                editingWid !== widget.id  &&
                <div className="col">
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
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

export default ListWidget