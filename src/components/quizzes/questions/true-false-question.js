import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
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
                <li className={`list-group-item 
                                ${!grade?"": 
                                (yourAnswer === "true" && question.correct === "true")?'list-group-item-success':
                                    (yourAnswer === "true" && question.correct === "false")?'list-group-item-danger':""}`}>
                    <div className="form-check">
                        <input onClick={() => {setYourAnswer("true")}}
                               className="form-check-input"
                               type="radio"
                               name={question._id}
                               disabled={grade}/> True
                        {
                            grade &&
                            <>
                                {
                                    (yourAnswer === "true" && question.correct === "true") &&
                                    <i className="fas fa-check wbdv-color-success align-middle float-right"/>
                                }
                                {
                                    (yourAnswer === "true" && question.correct !== "true") &&
                                    <i className="fas fa-times wbdv-color-danger align-middle float-right"/>
                                }
                            </>
                        }
                    </div>
                </li>
                <li className={`list-group-item 
                                ${!grade?"": 
                                (yourAnswer === "false" && question.correct === "false")?'list-group-item-success':
                                (yourAnswer === "false" && question.correct === "true")?'list-group-item-danger':""}`}>
                    <div className="form-check">
                        <input onClick={() => {setYourAnswer("false")}}
                               className="form-check-input"
                               type="radio"
                               name={question._id}
                               disabled={grade}/> False
                        {
                            grade &&
                            <>
                                {
                                    (yourAnswer === "false" && question.correct === "false") &&
                                    <i className="fas fa-check wbdv-color-success align-middle float-right"/>
                                }
                                {
                                    (yourAnswer === "false" && question.correct !== "false") &&
                                    <i className="fas fa-times wbdv-color-danger align-middle float-right"/>
                                }
                            </>
                        }
                    </div>
                </li>
            </ul>
            <br/>
            <p>Your Answer: {yourAnswer}</p>
            <button onClick={() => {setGrade(true)}}
                    type="button"
                    className="btn btn-success">Grade</button>
        </li>
    )
}

export default TrueFalseQuestion;