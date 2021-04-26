import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from '../profile-page';
import SearchScreen from '../dashboard/search-screen/search-screen';
import DetailsScreen from './details-screen';

const Students = (
  {
    logged,
    student
  }
) => {
  const [activeTab, setActiveTab] = useState('Records')
  return (
    <div>
      {
        logged &&
        <div className="row">
          <div className="col-2">
            <ul className="nav flex-column nav-pills me-3">
              <li className="nav-item">
                <Link onClick={() => setActiveTab('Profile')}
                      className={`nav-link ${activeTab == 'Profile' ? 'active' : ''}`}
                      to='/profile/details'>
                  Details
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => setActiveTab('Search')}
                      className={`nav-link ${activeTab == 'Search' ? 'active' : ''}`}
                      to='/profile/search'>
                  Search
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-10">
            <Route path="/profile/search">
              <SearchScreen/>
            </Route>
            <Route path="/profile/details">
              <DetailsScreen student={student}/>
            </Route>
          </div>
        </div>
      }
    </div>
  );
}
export default Students;