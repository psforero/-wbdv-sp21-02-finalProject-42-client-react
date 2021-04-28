import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userService from '../../services/users-service'
import { connect } from 'react-redux';

const Register = (
  {
    register,
    setTab
  }
) => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    username: '',
    password: ''
  })
  const [match, setMatch] = useState(true)
  const history = useHistory()

  const verifyMatch = (verify) => {
    if (verify !== credentials.password) {
      setMatch(false)
    } else {
      setMatch(true)
    }
  }

  const handleRegister = () => {
    let valid = Object.keys(credentials).every(field => credentials[field] !== '')

    if (valid) {
      register(credentials, history, setTab)
    } else {
      alert('Please fill out all fields')
    }
  }

  return (
    <div>
      <h1>Register Account</h1>
      <div className="mb-3 row">
        <label htmlFor="firstName"
               className="col-sm-2 col-form-label">
          First name
        </label>
        <div className="col-sm-10">
          <input value={credentials.firstName}
                 onChange={(e) =>
                   setCredentials({ ...credentials, firstName: e.target.value })}
                 type="text"
                 placeholder="John"
                 title="Please type your first name"
                 className="form-control"
                 id="firstName"/>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="lastName"
               className="col-sm-2 col-form-label">
          Last name
        </label>
        <div className="col-sm-10">
          <input value={credentials.lastName}
                 onChange={(e) =>
                   setCredentials({ ...credentials, lastName: e.target.value })}
                 type="text"
                 placeholder="Smith"
                 title="Please type your last name"
                 className="form-control"
                 id="lastName"/>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="username"
               className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input value={credentials.username}
                 onChange={(e) =>
                   setCredentials({ ...credentials, username: e.target.value })}
                 type="text"
                 placeholder="john123"
                 title="Please type your username"
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
          <input value={credentials.email}
                 onChange={(e) =>
                   setCredentials({ ...credentials, email: e.target.value })}
                 type="text"
                 placeholder="js@email.com"
                 title="Please type your email"
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
                  className="form-control"
                  value={credentials.type}
                  onChange={(e) =>
                    setCredentials({ ...credentials, type: e.target.value })}>
            <option disabled value={''}>Select one</option>
            <option value="STUDENT">Student</option>
            <option value="STAFF">Staff</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="inputPassword"
               className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input value={credentials.password}
                 onChange={(e) =>
                   setCredentials({ ...credentials, password: e.target.value })}
                 type="password"
                 className="form-control"
                 id="inputPassword"/>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="verifyPassword"
               className="col-sm-2 col-form-label ">
          Verify Password
        </label>
        <div className="col-sm-10">
          <input onChange={(e) => verifyMatch(e.target.value)}
                 type="password"
                 className={`form-control ${match ? '' : 'bg-danger'}`}
                 id="verifyPassword"/>
          {
            !match &&
            <p>passwords do not match</p>
          }
        </div>
      </div>

      <p>{JSON.stringify(credentials)}</p>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">

        </label>
        <div className="col-sm-10">
          <button onClick={() => handleRegister()}
                  className="btn btn-primary btn-block"
                  disabled={!match}>
            Register
          </button>
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

const stpm = (state) => ({
  user: state.userReducer.user
})

const dtpm = (dispatch) => {
  return {
    register: async (credentials, history, setTab) =>
      userService.register(credentials)
        .then((user) => {
          if (user === 0) {
            alert('user already exits')
          } else {
            dispatch({
              type: 'SET_CURRENT_USER',
              user
            })
            setTab('Dashboard')
            history.push('/dashboard')
          }
        })
  }
}

export default connect(stpm, dtpm)(Register)
