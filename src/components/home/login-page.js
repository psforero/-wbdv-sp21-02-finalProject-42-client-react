import React, {useState} from "react";
import {Link} from "react-router-dom";

const LogIn= (
    {
        setLog,
        setTab,
        users = [
            {id: '123', user: 'ironman', email:'ironman@wblc.org'},
            {id: '234', user: 'blackwidow', email:'blcackwidow@wblc.org'}
        ]
    }
) => {
    const verifyLogIn = () => {

    }
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
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
                           onChange={(e) =>
                               setUsername(e.target.value)}/>
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
                           onChange={(e) =>
                               setPassword(e.target.value)}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col-sm-10">
                    <Link onClick = {()=> setLog(true)}
                          className="btn btn-primary btn-block"
                          to={`/students`}>
                        Sign in
                    </Link>
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
export default LogIn;