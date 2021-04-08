// const QUIZZES_URL = "http://localhost:3000/api/quizzes";
const QUIZZES_URL = process.env.REACT_APP_QUIZ_URL

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}/quizzes`)
        .then(response => response.json())

export const findQuizById = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())


const api = {
    findAllQuizzes, findQuizById
};

export default api;