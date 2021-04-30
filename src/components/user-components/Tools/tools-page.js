import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import usersService from '../../../services/users-service';
import { Link, Route } from 'react-router-dom';
import AccountsTool from './accounts-tool';
import DataTool from './data-tool';
import LoadDatabase from './load-database-tool';

const Tools = ({ user }) => {
  const [activeTab, setActiveTab] = useState('')

  return (
    <div>
      <h1>{(user.type === 'ADMIN') ? 'Administrator tools' : 'Teacher tools'}</h1>
      <div className="row">
        <div className="col-2">
          <ul className="nav flex-column nav-pills me-3">
            <li className="nav-item">
              <Link onClick={() => setActiveTab('Accounts')}
                    className={`nav-link ${activeTab === 'Accounts' ? 'active' : ''}`}
                    to='/tools/accounts'>
                Accounts
              </Link>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <Link onClick={() => setActiveTab('Data')}*/}
            {/*        className={`nav-link ${activeTab === 'Data' ? 'active' : ''}`}*/}
            {/*        to='/tools/data'>*/}
            {/*    Data*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {
              user.type === 'ADMIN' &&
              <li className="nav-item">
                <Link onClick={() => setActiveTab('Load')}
                      className={`nav-link ${activeTab === 'Load' ? 'active bg-danger' : ''}`}
                      to='/tools/loadDB'>
                  Load Database
                </Link>
              </li>
            }
          </ul>
        </div>
        <div className="col-10">
          <Route path="/tools/accounts">
            <AccountsTool user={user}/>
          </Route>
          <Route path="/tools/data">
            <DataTool user={user}/>
          </Route>
          <Route path="/tools/loadDB">
            <LoadDatabase/>
          </Route>
        </div>
      </div>
    </div>
  )
}

const stpm = (state) => (
  {
    user: state.userReducer.user
  }
)

export default connect(stpm)(Tools)