import React, { useState, useEffect } from 'react';
import userService from '../../../services/users-service'
import { connect } from 'react-redux';

const Profile = ({ user, update }
) => {
  const [edit, setEdit] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [currentUser, setCurrentUser] = useState({ user })
  const [match, setMatch] = useState(false)

  useEffect(() => {
    setCurrentUser(user);
  }, [user])

  const verifyMatch = (verify) => {
    if (verify !== currentUser.password) {
      setMatch(false)
    } else {
      setMatch(true)
    }
  }

  const handleUpdate = () => {
    if (match && currentUser.password && currentUser.email) {
      update(currentUser, setEdit)
    } else {
      alert('Fields can\'t be empty and passwords must match')
    }
  }

  return (
    <div>
      <div className="row float-right">
        <div className="col-auto">
          {
            !edit &&
            <button className="btn btn-outline-dark fas fa-user-edit align-middlet"
                    onClick={() => setEdit(true)}>
              Edit
            </button>
          }
          {
            edit &&
            <button className="btn btn-link"
                    onClick={() => {
                      setEdit(false)
                      setCurrentUser(user)
                    }}>
              cancel
            </button>
          }
        </div>
      </div>
      <h1> Profile </h1>
      <>
        <div className="mb-3 row">
          <label
            className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <h5>{currentUser.username}</h5>
          </div>
        </div>

        <div className="mb-3 row">
          <label
            className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <h5>{currentUser.firstName}</h5>
          </div>
        </div>

        <div className="mb-3 row">
          <label
            className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <h5>{currentUser.lastName}</h5>
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
          <label htmlFor="email"
                 className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            {
              edit &&
              <input type="email"
                     value={currentUser.email}
                     onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
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
            {edit ? 'Enter new password' : 'Password'}
          </label>
          <div className="col-sm-10">

            {
              edit &&
              <input
                value={currentUser.password}
                onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
                type="password"
                placeholder="password123"
                className="form-control"
                id="dob">
              </input>
            }
            {
              !edit &&
              <>
                <h5 className="col-10">
                  {showPass ? user.password : Array(user.password.length + 1).join('*')}
                </h5>
                <button className="btn btn-sm btn-outline-dark col-auto"
                        onClick={() => setShowPass(!showPass)}>
                  {showPass ? 'Hide' : 'Show'}
                </button>
              </>
            }
          </div>
        </div>

        {
          edit && (currentUser.password !== user.password) &&
          <div className="mb-3 row">
            <label htmlFor="confirmPassword"
                   className="col-sm-2 col-form-label">
              Confirm password
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
        }


        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"/>
          <div className="col-sm-10">
            <div className="btn btn-success btn-block"
                 onClick={() => handleUpdate()}>
              Update
            </div>
          </div>
        </div>
        {
          edit &&
          <button onClick={() => {
            setEdit(false)
            setCurrentUser(user)
          }}
                  className="btn btn-link float-right">
            cancel
          </button>
        }
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"/>
          <div className="col-sm-10">
            <p>
              * Only email and password can be edited.
              {(user.type === 'ADMIN') ? ' To manage other accounts go to the Admin tab.' :
                ' If you need to make corrections to other fields talk to an administrator.'}
            </p>
          </div>
        </div>
      </>
    </div>
  )
}

const stpm = (state) => (
  {
    user: state.userReducer.user
  }
)

const dtpm = (dispatch) => {
  return {
    update: async (user, setEdit) => {
      try {
        const updated = await userService.updateUser(user)
        dispatch({
          type: 'SET_CURRENT_USER',
          user: updated
        })
        setEdit(false)
      } catch (e) {
        alert(`Something went wrong: ${e}`)
      }
    },
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
