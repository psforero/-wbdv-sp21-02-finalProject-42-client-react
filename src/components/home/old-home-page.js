import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';
import BarChart from '../charts/bar-chart';
import { combineReducers, createStore } from 'redux';
import scoreReducer from '../../reducers/scores-reducer';
import { Provider } from 'react-redux';
import AboutUs from './about-us-page';
import Students from '../user-components/student-detail/students-page';
import Directory from '../user-components/directory';
import LogIn from '../users/login-page';
import Register from '../users/register-page';
import SearchScreen from '../user-components/dashboard/search-screen/search-screen';
import Profile from '../user-components/profile-page';
import userReducer from '../../reducers/user-reducer';


const reducer = combineReducers({
  scoreReducer: scoreReducer,
  userReducer: userReducer
})

const store = createStore(reducer)

const OldHome = (
  {
    signedUser
  }) => {
  const [grade, setGrade] = useState(4)
  const [tab, setTab] = useState('Home')
  const [loginStatus, setLoginStatus] = useState(signedUser !== undefined)
  return (
    <div className="container-fluid">
      <br/>
      <div className="sticky-top float-right">
        {
          !loginStatus &&
          <Link onClick={() => setTab('Students')}
                className="row "
                to="/login">
            <i className="fas fa-user align-middle"> Sign In</i>
          </Link>
        }
        {
          loginStatus &&
          <Link className="row " to="/">
            <i onClick={() => {
              setLoginStatus(false)
              setTab('Home')
            }}
               className="fas fa-user align-middle"> Sign Out</i>
          </Link>
        }
      </div>
      <Provider store={store}>

        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link onClick={() => setTab('Home')}
                  className={`nav-link ${tab === 'Home' ? 'active' : ''}`}
                  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setTab('AboutUs')}
                  className={`nav-link ${tab === 'AboutUs' ? 'active' : ''}`}
                  to="/aboutUs">About Us</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setTab('Students')}
                  className={`nav-link ${tab === 'Students' ? 'active' : ''}`}
                  to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setTab('Directory')}
                  className={`nav-link ${tab === 'Directory' ? 'active' : ''}`}
                  to="/staff">Staff Directory</Link>
          </li>
        </ul>
        <hr className="solid"/>
        <Route path="/" exact={true}>
          <figure>
            <div className="row justify-content-center">
              <h1 className="justify-content-center display-1">Student Data Visualizer</h1>
            </div>
          </figure>
          <div className="wbdv-banner-image"/>
        </Route>
        <Route path="/aboutUs">
          <AboutUs/>
        </Route>
        <Route path="/students">
          <Students logged={loginStatus}/>
        </Route>
        <Route path="/staff">
          <Directory/>
        </Route>
        <Route path="/login">
          <LogIn setLog={setLoginStatus}
                 setTab={setTab}/>
        </Route>
        <Route path="/register">
          <Register setTab={setTab}/>
        </Route>
        <Route path="/search">
          <SearchScreen setTab={setTab}/>
        </Route>
        <Route path="/profile">
          <Profile setTab={setTab}/>
        </Route>
      </Provider>
    </div>
  )
}

export default OldHome