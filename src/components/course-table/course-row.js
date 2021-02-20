import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newOwner, setNewOwner] = useState(owner)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,
            owner: newOwner
        }
        updateCourse(newCourse)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor" className="form-row">
                        <div className="col-auto">
                            <i className="fas fa-file wbdv-color-blue"></i>
                        </div>
                        <div className="col-auto wbdv-color-black">
                            {title}
                        </div>
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-md-table-cell">
                {
                    !editing &&
                    <div className="col-auto wbdv-color-black">
                        {owner}
                    </div>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewOwner(event.target.value)}
                        value={newOwner}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                <div className="form-row float-right">
                    <div className="col-auto">
                        {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times wbdv-color-danger"></i>}
                    </div>
                    <div className="col-auto">
                        {editing && <i onClick={() => saveCourse()} className="fas fa-check wbdv-color-success"></i>}
                    </div>
                    <div className="col-auto">
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-color-blue"></i>}
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default CourseRow