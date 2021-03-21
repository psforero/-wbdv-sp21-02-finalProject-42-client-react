import React, {useState} from 'react'

const EditableWidget = (
    {
        widget,
        deleteWidget,
        updateWidget,
        editingWid,
        setEditing
    }) => {
    const [cachedItem, setCahedItem] = useState(widget)
    return (
        <>
            {
                editingWid === widget.id &&
                <>
                    <div className="col">
                        <select onChange={(e) =>
                            setCahedItem({
                                ...cachedItem,
                                type: e.target.value
                            })}
                                value={cachedItem.type}
                                className="form-control">
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Hyperlink</option>
                            <option>Video</option>
                        </select>
                        {
                            cachedItem.type.toUpperCase() === "HEADING" &&
                            <>
                                <input
                                    onChange={(e) =>
                                        setCahedItem({
                                            ...cachedItem,
                                            text: e.target.value
                                        })}
                                    value={cachedItem.text} className="form-control"/>
                                <select onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        size: e.target.value
                                    })}
                                        value={cachedItem.size}
                                        className="form-control">
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>
                            </>
                        }
                        {
                            cachedItem.type.toUpperCase() === "PARAGRAPH" &&
                            <>
                                <textarea  onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        text: e.target.value
                                    })}
                                    value={cachedItem.text} className="form-control"></textarea>
                            </>
                        }
                    </div>
                    <div className="col-auto">
                        <i onClick={() => {
                            updateWidget(cachedItem)
                            setEditing({})
                        }}
                           className="fas fa-2x fa-check float-right"></i>
                        <i onClick={() => {
                            deleteWidget(widget)
                            setEditing({})
                        }}
                           className="fas fa-2x fa-trash float-right"></i>
                    </div>
                </>
            }
            {
                editingWid !== widget.id &&
                <div className="col-auto">
                    <i onClick={() => setEditing(widget)}
                       className="fas fa-2x fa-cog d-flex justify-content-end float-right"></i>
                </div>
            }
        </>
    )
}

export default EditableWidget
