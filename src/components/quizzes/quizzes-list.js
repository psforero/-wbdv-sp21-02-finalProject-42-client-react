import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from '../../services/quiz-service'
import {connect} from "react-redux";

const QuizzesList = (
    {
        quizzes,
        findAllQuizzes
    }
) => {
    const {courseId} = useParams()

    useEffect(() => {
        findAllQuizzes()
    }, [])
    return (
        <div>
            <h2>
                <Link className="fas fa-times wbdv-tab"
                      to="/courses/table" exact={true}>
                </Link>
                Quizzes
            </h2>
            <ul className = "list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className="list-group-item">
                                <Link className="row" to={`/courses/${courseId}/quizzes/${quiz._id}`} exact={true}>
                                    <div className="col align-self-center">
                                        {quiz.title}
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-primary float-right">Start</button>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
);
}

const stpm = (state) => ({
        quizzes: state.quizReducer.quizzes
    })

const dtpm = (dispatch) => {
        return {
            findAllQuizzes: () =>
                quizzesService.findAllQuizzes()
                    .then(quizzes => dispatch({
                        type: 'FIND_ALL_QUIZZES',
                        quizzes
                    }))
        }
    }
export default connect(stpm, dtpm)(QuizzesList);