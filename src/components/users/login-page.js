import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import userService from "../../services/user-service";
import {connect} from "react-redux";

const LogIn= (
    {
        setTab,
        login
    }
) => {
    const [credentials, setCredentials] = useState({username:'', password: ''})
    const history = useHistory()
    // const login = () => {
    //     userService.login(credentials)
    //         .then((user) => {
    //             console.log(user)
    //             if(user === 0){
    //                 alert("login failed, try again")
    //             }else{
    //                 history.push("/profile")
    //             }
    //         })
    // }
    return (
        <div>
            <h1>Sign In</h1>
            <div className="mb-3 row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           placeholder="johnny"
                           title="Please type your username"
                           className="form-control"
                           id="username"
                           value={credentials.username}
                           onChange={(e) =>
                               setCredentials({...credentials, username: e.target.value})}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="inputPassword"
                       className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password"
                           className="form-control"
                           id="inputPassword"
                           value={credentials.password}
                           onChange={(e) =>
                               setCredentials({...credentials, password: e.target.value})}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col-sm-10">
                    <button onClick = {() => login(credentials, history)}
                          className="btn btn-primary btn-block">
                        Sign in
                    </button>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col">
                    <a href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="col">
                    <Link to="/register" className="d-flex justify-content-center">
                        Register Account
                    </Link>
                </div>
                <div className="col">
                    <Link onClick={() => setTab('Home')}
                          to="/"
                          className="float-right">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}

const stpm = (state) => ({
    user: state.userReducer.user
})

const dtpm = (dispatch) => {
    return {
        login: (credentials, history) =>
            userService.login(credentials)
                .then((user) => {
                    if(user === 0){
                        alert("login failed, try again")
                    }else{
                        dispatch({
                            type: 'SET_CURRENT_USER',
                            user
                        })
                        history.push("/profile")
                    }
                })
    }
}

export default connect(stpm, dtpm) (LogIn)