import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/question-service";
import {connect} from "react-redux";

const Quiz = (
    {
        questions,
        findQuestionsForQuiz
    }
) => {
    const {quizId, courseId} = useParams()
    useEffect(() => {
        findQuestionsForQuiz(quizId)
    }, [])
    return(
        <div>
            <h3>
                <Link className="fas fa-times wbdv-tab"
                      to={`/courses/${courseId}/quizzes`} exact={true}>
                </Link>
                Quiz {quizId}
            </h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <Question question ={question}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    questions: state.questionReducer.questions
})

const dtpm = (dispatch) => {
    return {
        findQuestionsForQuiz: (qid) =>
            questionService.findQuestionsForQuiz(qid)
                .then(questions => dispatch({
                    type: 'FIND_QUESTIONS_FOR_QUIZ',
                    questions
                }))
    }
}
export default connect(stpm, dtpm)(Quiz);
