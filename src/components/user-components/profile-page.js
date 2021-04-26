import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Students from './student-detail/students-page';
import userService from '../../services/users-service'
import { connect } from 'react-redux';

const Profile = ({ user }
) => {
  const [edit, setEdit] = useState(false)

  const [currentUser, setCurrentUser] = useState({ user })
  useEffect(() => {
    setCurrentUser(user);
  }, [user])

  return (
    <div>
      <div className="row float-right">
        <div className="col-auto">
          {
            !edit &&
            <a onClick={() => setEdit(true)}
               className="fas fa-user-edit align-middlet"> Edit </a>
          }
        </div>
        <div className="col-auto">
          <h4> Welcome {currentUser.username}</h4>
        </div>

      </div>
      <h1> Profile </h1>
      {/*{*/}
      {/*  !edit &&*/}
      {/*  <div>*/}
      {/*    <Students logged={true}*/}
      {/*              student={currentUser}/>*/}
      {/*  </div>*/}
      {/*}*/}

      {
        <>
          <div className="mb-3 row">
            <label htmlFor="username"
                   className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              {
                edit &&
                <input type="text"
                       placeholder="johnny"
                       title="Please type your username"
                       className="form-control"
                       id="username"/>
              }
              {
                !edit &&
                <h5>{currentUser.username}</h5>
              }
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="fistName"
                   className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              {
                edit &&
                <input type="text"
                       placeholder="John"
                       title="Please type your first name"
                       className="form-control"
                       id="firstName"/>
              }
              {
                !edit &&
                <h5>{currentUser.firstName}</h5>
              }
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="lastName"
                   className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              {
                edit &&
                <input type="text"
                       placeholder="John"
                       title="Please type your last name"
                       className="form-control"
                       id="lastName"/>
              }
              {
                !edit &&
                <h5>{currentUser.lastName}</h5>
              }
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email"
                   className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              {
                edit &&
                <input type="email"
                       placeholder="alice@wonderland.com"
                       title="Please type your email address"
                       className="form-control"
                       id="email"/>
              }
              {
                !edit &&
                <h5>{currentUser.email}</h5>
              }

            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password"
                   className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              {
                edit &&
                <input type="password"
                       placeholder="password123"
                       className="form-control"
                       id="dob"/>
              }
              {
                !edit &&
                <h5>{currentUser.password}</h5>
              }

            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="role"
                   className="col-sm-2 col-form-label">
              Role
            </label>
            <div className="col-sm-10">
              <h5>{currentUser.type}</h5>
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
        </>
      }
    </div>
  );
}

const stpm = (state) => (
  {
    user: state.userReducer.user
  }
)

const dtpm = (dispatch) => {
  return {
    logout: (history) => {
      dispatch({
        type: 'SET_CURRENT_USER',
        user: {}
      })
      history.push('/')
    }
  }
}

export default connect(stpm, dtpm)(Profile)
