import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }
    ) =>
{
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)
    const [newImage, setNewImage] = useState(course.image)
    const [newDesc, setNewDesc] = useState(course.desc)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,
            image: newImage,
            desc: newDesc
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-2 card-group">
            <div className="card row-4">
                <div className="embed-responsive embed-responsive-16by9">
                    <img src={course.image} className="card-img-top embed-responsive-item" alt="..."/>
                    {
                        editing &&

                       <div>
                           <div className="row wbdv-top-right">
                               <div className="col">
                                   <i onClick={() => saveTitle()} className="fas fa-check fa-2x wbdv-color-success"></i>
                               </div>
                               <div className="col">
                                   <i onClick={() => ( setEditing(false))} className="fas fa-times fa-2x wbdv-color-danger"></i>
                               </div>
                           </div>
                           <div className="wbdv-bottom">
                               <input
                                   onChange={(event) => setNewImage(event.target.value)}
                                   value={newImage}
                                   className="form-control"/>
                           </div>
                       </div>

                    }
                    {
                        !editing &&
                        <div className="wbdv-top-right">
                            <i onClick={() => (deleteCourse(course), setEditing(false))} className="fas fa-trash wbdv-color-danger"></i>
                        </div>
                    }

                </div>

                <div className="card-body d-flex flex-column flex-row">
                    <div className="form-row row">
                        {
                            editing &&
                            <div className="col-form-label col">
                                <input
                                    onChange={(event) => setNewTitle(event.target.value)}
                                    value={newTitle}
                                    className="form-control"/>
                                <input
                                    onChange={(event) => setNewDesc(event.target.value)}
                                    value={newDesc}
                                    placeholder={course.desc}
                                    className="form-control" width="100"/>
                            </div>
                        }
                        {
                            !editing &&
                                <div>
                                    <h4 className="card-title">{course.title}</h4>
                                    <p className="card-text">{course.desc}</p>
                                </div>
                        }
                    </div>
                    <div className="form-row mt-auto">
                        <div className="col-auto float-left">
                            <Link to="/courses/editor" className="btn btn-primary">
                                {course.title}
                            </Link>
                        </div>
                        <div className="col float-right">
                            {
                                !editing &&
                                <div className="float-right">
                                    <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-color-blue"></i>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard