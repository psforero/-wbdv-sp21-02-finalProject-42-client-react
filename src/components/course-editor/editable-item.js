import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item,
        active,
        type
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)
    const {moduleId, lessonId, topicId} = useParams();

    return (
        <li className={`${type === 'module'? 'list-group-item' : 'nav-item'} 
        ${(item._id === moduleId) ? 'active' : ''}
        ${(editing && type === 'module') ? 'active' : ''}`}>
            <div className={`nav-link 
                            ${(editing || item._id === lessonId || item._id === topicId) ? 'active' : ''}`}>
                {
                    !editing &&
                    <div className="form-row">
                        <div className="col-form-label">
                            <Link className={`${(item._id === topicId) ? 'wbdv-color-white' : ''}`} to={to}>
                                {item.title}{JSON.stringify(active)}
                            </Link>
                        </div>
                        <div className="col-form-label">
                            <a onClick={() => (setEditing(true), setCahedItem(item))}
                               className={`fas fa-pencil-alt ${(item._id === topicId) ? 'wbdv-color-white' : ''}`}></a>
                        </div>
                    </div>
                }
                {
                    editing &&
                    <div className="form-row">
                        <div className="col">
                            <input
                                onChange={(e) =>
                                    setCahedItem({
                                        ...cachedItem,
                                        title: e.target.value
                                    })}
                                value={cachedItem.title}/>
                        </div>
                        <div className="col-form-label">
                            <i onClick={() => {
                                setEditing(false)
                                updateItem(cachedItem)
                            }} className="fas fa-check wbdv-tab"></i>
                            <i onClick={() => (setEditing(false), deleteItem(item))} className="fas fa-times"></i>
                        </div>
                    </div>
                }</div>
        </li>
    )
}

export default EditableItem