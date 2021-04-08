import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [grade, setGrade] = useState(false)
    return (
        <li className="list-group-item">
            <h5>
                {question.question}
                {
                    grade &&
                    <div className="float-right">
                        {
                            question.correct === yourAnswer &&
                            <i className="fas fa-check"/>
                        }
                        {
                            question.correct !== yourAnswer &&
                            <i className="fas fa-times wbdv-color-danger"/>
                        }
                    </div>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item 
                                ${!grade?"":
                                (yourAnswer === choice && question.correct === choice)?'list-group-item-success': 
                                    (yourAnswer === choice && question.correct !== choice)?'list-group-item-danger':""}`}>
                                <div className="form-check">
                                    <input onClick={() => {setYourAnswer(choice)}}
                                           className="form-check-input"
                                           type="radio"
                                           name={question._id}
                                           disabled={grade}/> {choice}
                                    {
                                        grade &&
                                        <>
                                            {
                                                (yourAnswer === choice && question.correct === choice) &&
                                                <i className="fas fa-check wbdv-color-success align-middle float-right"/>
                                            }
                                            {
                                                (yourAnswer === choice && question.correct !== choice) &&
                                                <i className="fas fa-times wbdv-color-danger align-middle float-right"/>
                                            }
                                        </>
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <p>Your Answer: {yourAnswer}</p>
            <button onClick={() => {setGrade(true)}}
                    type="button"
                    className="btn btn-success">Grade</button>
        </li>
    )
}

export default MultipleChoiceQuestion;