// const QUIZZES_URL = "http://localhost:3000/api/quizzes";
const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL

export const findQuestionsForQuiz= (qid) =>
    fetch(`${QUIZZES_URL}/quizzes/${qid}/questions`)
        .then(response => response.json())

export default {
    findQuestionsForQuiz
};