import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import widgetService  from '../../../services/widget-service'
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets=[],
        findWidgetsForTopic,
        createWidgetForTopic,
        deleteWidget,
        updateWidget,
        defaultWidget = {
            type: "HEADING",
            size: 1,
            text: "New Widget",
            ordered: 1,
            src: 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0',
            width: 100,
            height: 100
        }
    }) => {
    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});
    const [newWidget, setNewWidget ] = useState(defaultWidget)
    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])
    return(
        <div>
            <div className="input-group">
                <select onChange={(e) =>
                    setNewWidget({
                        ...newWidget,
                        type: e.target.value
                    })}
                        value={newWidget.type}
                        className="form-control">
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Hyperlink</option>
                    <option>Video</option>
                </select>
                <button onClick={() => createWidgetForTopic(topicId, newWidget)}
                        className="btn btn-outline-secondary"
                        type="button">Add</button>
            </div>
            <br/>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                (widget.type.toUpperCase() !== "PARAGRAPH" &&
                                    widget.type.toUpperCase() !== "LIST" &&
                                    widget.type.toUpperCase() !== "IMAGE")  &&
                                <HeadingWidget
                                    widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    editingWid={editingWidget.id}
                                    setEditing={setEditingWidget}
                                />
                            }
                            {
                                widget.type.toUpperCase() === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    editingWid={editingWidget.id}
                                    setEditing={setEditingWidget}
                                />
                            }
                            {
                                widget.type.toUpperCase() === "LIST" &&
                                <ListWidget
                                    widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    editingWid={editingWidget.id}
                                    setEditing={setEditingWidget}
                                />
                            }
                            {
                                widget.type.toUpperCase() === "IMAGE" &&
                                <ImageWidget
                                    widget={widget}
                                    deleteWidget={deleteWidget}
                                    updateWidget={updateWidget}
                                    editingWid={editingWidget.id}
                                    setEditing={setEditingWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </div>)}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        widgetService
            .findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets
            }))
    },
    createWidgetForTopic: (topicId, widget) => {
        widgetService
            .createWidgetForTopic(topicId, widget)
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    },
    deleteWidget: (item) =>
    {
        widgetService.deleteWidget(item.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
            }))
    },
    updateWidget: (widget) => {
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList)
