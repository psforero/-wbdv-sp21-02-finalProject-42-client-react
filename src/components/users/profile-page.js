import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Students from "../home/students-page";
import userService from '../../services/user-service'

const Profile= () => {
    const history = useHistory()
    const [edit, setEdit] = useState(false)
    const logout = () => {
        history.push("/")
    }
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
            })
    }, [])
    return (
        <div>
            <div className="row float-right">
                <div className="col-auto">
                    <a onClick={logout}
                       className="fas fa-user align-middle"> Sign Out</a>
                </div>
                <div className="col-auto">
                    {
                        !edit &&
                        <a onClick={logout}
                           className="fas fa-user-edit align-middlet"> Edit </a>
                    }
                </div>
            </div>
            <h1> Profile </h1>
            <h4> Welcome {currentUser.username}</h4>
            {console.log(currentUser)}
            {JSON.stringify(currentUser)}
            {
                !edit &&
                <div>
                    <Students logged={true}
                              student={currentUser}/>
                </div>
            }
            {
                edit &&
                <div>
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
                                   id="username"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="phone"
                               className="col-sm-2 col-form-label">
                            Phone
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   placeholder="(555) 123-4324"
                                   title="Please type your phone"
                                   className="form-control"
                                   id="phone"/>
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
                        <label htmlFor="dob"
                               className="col-sm-2 col-form-label">
                            DOB
                        </label>
                        <div className="col-sm-10">
                            <input type="date"
                                   value="2345-12-21"
                                   className="form-control"
                                   id="dob"/>
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
                                <option>Faculty</option>
                                <option>Student</option>
                                <option>Staff</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">

                        </label>
                        <div className="col-sm-10">
                            <div className="btn btn-success btn-block">
                                Update
                            </div>
                        </div>
                    </div>
                    <a onClick={() => setEdit(false)}
                       className="float-right"> cancel</a>
                </div>
            }
        </div>
    );
}
export default Profile;
