import CourseManager from "./components/course-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/course-home"
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import {combineReducers, createStore} from "redux";
import quizReducer from "./reducers/quiz-reducer";
import {Provider} from "react-redux";
import questionReducer from "./reducers/question-reducer";

const reducer = combineReducers({
    quizReducer: quizReducer,
    questionReducer: questionReducer
})

const store = createStore(reducer)

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path="/courses">
                  <CourseManager/>
              </Route>
              <Provider store={store}>
                  <Route path="/courses/:courseId/quizzes" exact={true}>
                      <QuizzesList/>
                  </Route>
                  <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                      <Quiz/>
                  </Route>
              </Provider>
          </div>
      </BrowserRouter>
  );
}

export default App;
