import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'
import {findModule} from "../../services/module-service";

const LessonTabs = (
    {
        lessons=[],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson,
        moduleTitle,
        layout
    }) => {
    const {courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])

    return(
        <div>
            <h2>Lessons for Module: {moduleTitle}</h2>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lesson._id}`}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                            item={lesson}/>
                    )
                }
                <div className="col">
                    <li className="col-form-label float-right">
                        <a onClick={() => createLessonForModule(moduleId)} className="fas fa-plus fa-2x"></a>
                    </li>
                </div>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (item) =>
    {
        console.log("here")
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            }))
    },
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            }))
})

export default connect(stpm, dtpm)(LessonTabs)