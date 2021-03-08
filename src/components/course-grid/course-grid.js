import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (
    {
        courses,
        deleteCourse,
        updateCourse
    }) =>
    <div>
        <table className="table">
            <tr>
                <th className="d-none d-md-table-cell w-50">
                    Recent Documents
                </th>
                <th className="d-none d-md-table-cell">
                    Owned By
                </th>
                <th>
                    <div className="form-row float-right">
                        <div className="col-auto">
                            <i className="fas fa-folder"></i>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-sort-alpha-down"></i>
                        </div>
                        <Link to="/courses/table" className="col-auto">
                            <i className="fas fa-list"></i>
                        </Link>
                    </div>
                </th>
            </tr>
        </table>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                    />
                )
            }
        </div>
    </div>

export default CourseGrid