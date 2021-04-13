import React from "react";
import {Link} from "react-router-dom";

const Register= (
    {
        setTab
    }
) => {
    return (
        <div>
            <h1>Sign Up</h1>

            <div className="mb-3 row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           placeholder="johnny"
                           title="Please type your username"
                           value="alice"
                           className="form-control"
                           id="username"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="email"
                       className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input type="email"
                           placeholder="alice@wonderland.com"
                           className="form-control"
                           id="email"/>
                </div>
            </div>


            <div className="mb-3 row">
                <label htmlFor="role"
                       className="col-sm-2 col-form-label">
                    Role
                </label>
                <div className="col-sm-10">
                    <select id="role"
                            className="form-control">
                        <option>Staff</option>
                        <option>Student</option>
                        <option>Admin</option>
                    </select>
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
                           id="inputPassword"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="verifyPassword"
                       className="col-sm-2 col-form-label">
                    Verify Password
                </label>
                <div className="col-sm-10">
                    <input type="password"
                           className="form-control"
                           id="verifyPassword"/>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col-sm-10">
                    <a className="btn btn-primary btn-block"
                       href="/profile/profile.template.client.html">
                        Sign up
                    </a>
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col">
                    <Link to="/login">
                        Login
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
export default Register;
