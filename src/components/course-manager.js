import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses} from "../services/course-service";
import { createBrowserHistory } from "history";

class CourseManager extends React.Component {
    state = {
        courses: [
        ]
    }

    getTitle = () => {
        let title = document.getElementsByClassName('wbdv-title-fld')[0].value;
        if (title == "") {
            title = "New Course Title"
        }
        return(title)
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: this.getTitle(),
            owner: "New Owner",
            lastModified: "Never",
            image: "https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0",
            desc: "some description"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
        document.getElementsByClassName('wbdv-title-fld')[0].value = ''

    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    hide = () => {
        const history = createBrowserHistory()
        const path = history.location.pathname
        console.log(path)
        if (path == "/courses/editor") {
            return true
        }
        else {
            return false
        }
    }

    render() {
        return(
            <div>
                <Route>
                    {
                        !this.hide() &&
                        <div className="form-row justify-content-around">
                            <div className="col-auto align-self-center">
                                <Link to="/">
                                    <i className="fas fa-bars fa-2x"></i>
                                </Link>
                            </div>
                            <div className="col-lg-auto d-none d-lg-block  align-self-center">
                                <div className="row justify-content-center">
                                    <div className="container-fluid">
                                        <h2>
                                            Course Manager
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-auto align-self-center">
                                <input className="form-control input placeholder wbdv-title-fld"
                                       placeholder="New Course Title"
                                       aria-label="New Course Title"/>
                            </div>
                            <div className="col-auto align-self-center d-flex justify-content-end">
                                <i onClick={this.addCourse}
                                   className="fas fa-plus-circle fa-2x wbdv-color-danger"></i>
                            </div>
                        </div>
                    }
                </Route>
                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
                <Route>
                    {
                        !this.hide() &&
                        <i onClick={this.addCourse}
                           className="fas fa-plus-circle fa-5x wbdv-color-danger wbdv-bottom-right"></i>
                    }
                </Route>
            </div>
        )
    }
}

export default CourseManager