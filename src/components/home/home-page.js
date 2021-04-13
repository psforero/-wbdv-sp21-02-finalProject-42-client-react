import React, {useState} from 'react'
import {Link, Route} from "react-router-dom";
import BarChart from "../charts/bar-chart";
import {combineReducers, createStore} from "redux";
import scoreReducer from "../../reducers/scores-reducer";
import {Provider} from "react-redux";
import AboutUs from "./about-us-page";
import Students from "./students-page";
import StaffDirectory from "./staff-directory";
import LogIn from "./login-page";
import Register from "./register-page";
import SearchScreen from "../search-screen/search-screen";


const reducer = combineReducers({
    scoreReducer: scoreReducer
})

const store = createStore(reducer)

export default (
    {
        signedUser
    }) => {
    const [grade, setGrade] = useState(4)
    const [tab, setTab] = useState('Home')
    const [logged, setLog] = useState(signedUser!=undefined)
    return (
        <div className="container-fluid">
            <br/>
            <div className="sticky-top float-right">
                {
                    !logged &&
                    <Link onClick={() => setTab('Students')}
                          className="row "
                          to="/login">
                        <i className="fas fa-user align-middle"> Sign In</i>
                    </Link>
                }
                {
                    logged &&
                    <Link className="row " to="/">
                        <i onClick={() => {
                            setLog(false)
                            setTab('Home')
                        }}
                           className="fas fa-user align-middle"> Sign Out</i>
                    </Link>
                }
            </div>
            <Provider store={store}>
                <figure>
                    <div className="row justify-content-center">
                        <h1 className="justify-content-center display-1">Web Dev Learning Center</h1>
                    </div>
                </figure>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link onClick={() => setTab('Home')}
                              className={`nav-link ${tab=='Home'?'active':''}`}
                              to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setTab('AboutUs')}
                              className={`nav-link ${tab=='AboutUs'?'active':''}`}
                              to="/aboutUs">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setTab('Students')}
                              className={`nav-link ${tab=='Students'?'active':''}`}
                              to="/students">Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setTab('StaffDirectory')}
                              className={`nav-link ${tab=='StaffDirectory'?'active':''}`}
                              to="/staff">Staff Directory</Link>
                    </li>
                </ul>
                <hr className="solid"/>
                <Route path="/" exact={true}>
                    <div className="wbdv-banner-image"></div>
                    <div>
                        <br/>
                        <h3 className="display-5">How do we compare to State and National Average?</h3>
                        <div className="col input-group">
                            <select onChange={(e) =>
                                setGrade(e.target.value)}
                                    className="form-control form-select-lg mb-4">
                                <option value="4">Grade 4</option>
                                <option value="8">Grade 8</option>
                                <option value="12">Grade 12</option>
                            </select>
                        </div>
                        <BarChart grade={grade}/>
                    </div>
                    <div>
                        <h3 className="display-5">Upcoming Events</h3>
                    </div>
                </Route>
                <Route path="/aboutUs" >
                    <AboutUs/>
                </Route>
                <Route path="/students" >
                    <Students logged={logged}/>
                </Route>
                <Route path="/staff" >
                    <StaffDirectory/>
                </Route>
                <Route path="/login">
                    <LogIn setLog={setLog}
                           setTab={setTab}/>
                </Route>
                <Route path="/register">
                    <Register setTab={setTab}/>
                </Route>
                <Route path="/search">
                    <SearchScreen/>
                </Route>
            </Provider>
        </div>
        )
}
