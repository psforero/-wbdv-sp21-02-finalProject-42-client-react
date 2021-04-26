import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ user, logout, tab, setTab }) => {
  const handleLogout = () => {
    setTab('/')
    logout()
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link onClick={() => setTab('Home')}
              className={`navbar-brand ${tab === 'Home' ? 'active' : ''}`}
              to="/">
          DaViz
        </Link>
        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav nav-pills nav-fill">
            <li className={`nav-item ${tab === 'AboutUs' ? 'active' : ''}`}>
              <Link onClick={() => setTab('AboutUs')}
                    className='nav-link'
                    to="/aboutUs">
                About Us
              </Link>
            </li>
            <li className={`nav-item ${tab === 'Join' ? 'active' : ''}`}>
              <Link onClick={() => setTab('Join')}
                    className='nav-link'
                    to="/join">
                Join
              </Link>
            </li>
            <li className={`nav-item ${tab === 'ContactUs' ? 'active' : ''}`}>
              <Link onClick={() => setTab('ContactUs')}
                    className='nav-link'
                    to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {
            user === undefined &&
            <Link onClick={() => setTab('')}
                  to="/login">
              <i className="fas fa-user align-middle my-2 my-sm-0">
                Sign In
              </i>
            </Link>
          }
          {
            user &&
            <Link onClick={() => handleLogout()}
                  to="/">
              <i className="fas fa-user align-middle my-2 my-sm-0">
                Sign Out
              </i>
            </Link>
          }
        </div>
      </nav>
      {
        user &&
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link onClick={() => setTab('Dashboard')}
                  className={`nav-link ${tab === 'Dashboard' ? 'active' : ''}`}
                  to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setTab('Profile')}
                  className={`nav-link ${tab === 'Profile' ? 'active' : ''}`}
                  to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setTab('Admin')}
                  className={`nav-link ${tab === 'Students' ? 'active' : ''}`}
                  to="/admin">Admin</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setTab('Directory')}
                  className={`nav-link ${tab === 'Directory' ? 'active' : ''}`}
                  to="/directory">Directory</Link>
          </li>
        </ul>
      }
    </>
  )
}


const stpm = (state) => (
  {
    user: state.userReducer.user
  }
)

const dtpm = (dispatch) => {
  return {
    logout: () => {
      dispatch({
        type: 'SET_CURRENT_USER',
        user: undefined
      })
    }
  }
}

export default connect(stpm, dtpm)(Navbar)