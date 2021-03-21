import React, {useEffect, useState} from 'react'
import {Link, Route, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "./widgets/widget-list";
import {findCourseById} from "../../services/course-service";
import {findModule} from "../../services/module-service";
import {findLesson} from "../../services/lesson-service";
import {findTopic} from "../../services/topic-service";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)
const CourseEditor = (
    {
        course,
        module= "No Module selected",
        lesson = "No Lesson selected",
        topic ="No Topic selected"
    }
    ) => {

    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    const [courseTitle, setCourseTitle] = useState(course)
    const [moduleTitle, setModuleTitle] = useState(module);
    const [lessonTitle, setLessonTitle] = useState(lesson);
    const [topicTitle, setTopicTitle] = useState(topic);
    useEffect(() => {
        if(courseId !== "undefined" && typeof courseId !== "undefined") {
            findCourseById(courseId)
                .then(course => getCourseTitle(course))
        }
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findModule(moduleId)
                .then(module => getModuleTitle(module))
        }
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findLesson(lessonId)
                .then(lesson => getLessonTitle(lesson))
        }
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findTopic(topicId)
                .then(topic => getTopicTitle(topic))
        }
    }, [courseId, moduleId, lessonId, topicId])

    const getCourseTitle = (course) => {
        setCourseTitle(course.title)
    }

    const getModuleTitle = (module) => {
        setModuleTitle(module.title)
    }

    const getLessonTitle = (lesson) => {
        setLessonTitle(lesson.title)
    }

    const getTopicTitle = (topic) => {
        setTopicTitle(topic.title)
    }

    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link className="fas fa-times wbdv-tab" to={`/courses/${layout}`}>
                    </Link>
                    Course Editor for: {courseTitle}
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList layout={layout}/>
                    </div>
                    <div className="col-8">
                        <Route path={[
                            "/courses/:layout/edit/:courseId/:moduleId",
                            "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
                            "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId"]}
                               exact={true}>
                            <LessonTabs
                                layout={layout}
                                moduleTitle={moduleTitle}/>
                        </Route>
                        <Route path={[
                            "/courses/:layout/edit/:courseId/:moduleId/:lessonId",
                            "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId"]}
                               exact={true}>
                            <TopicPills
                                layout={layout}
                                lessonTitle={lessonTitle}/>
                        </Route>
                        <Route path={[
                            "/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId"]}
                               exact={true}>
                            <h4>Editing Topic: {topicTitle}</h4>
                            <WidgetList/>
                        </Route>
                    </div>
                </div>
            </div>
        </Provider>)}


export default CourseEditor



