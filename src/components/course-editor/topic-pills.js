import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopicForLesson,
        deleteTopic,
        updateTopic,
        layout,
        lessonTitle
    }) => {
    const {courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
        <div>
            <h2>Topics for lesson: {lessonTitle}</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}/>
                    )
                }
                <div className="col">
                    <li className="col-form-label float-right">
                        <a onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus fa-2x"></a>
                    </li>
                </div>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        topicService
            .createTopicForLesson(lessonId, {title: "New topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    deleteTopic: (item) =>
    {
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
    },
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            }))
})

export default connect(stpm, dtpm)(TopicPills)