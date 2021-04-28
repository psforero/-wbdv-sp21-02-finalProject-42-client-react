import React, { useEffect, useState } from 'react';
import advisoryReducer from '../../../../reducers/spreadsheet-reducer';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import AdvisorySearch from './advisory-search';
import { Link, Route } from 'react-router-dom';
import DetailsScreen from '../../student-detail/details-screen';
import spreadsheetService from '../../../../services/spreadsheet-service';
import StudentCard from '../student-card';
import TableView from './table-view';

const SearchScreen = () => {
  const [searchType, setSearchType] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [student, setStudent] = useState(null)
  const [groupSearch, setGroupSearch] = useState([])

  const [exists, setExists] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null)

  const handleSearchSelection = (value) => {
    setSearchType(value)
    switch (value) {
      case 'advisory':
        spreadsheetService.getAdvisors()
          .then((advisories) => {
            setGroupSearch(advisories)
          })
        setSearchType(value)
        break
      case 'class':
        spreadsheetService.getClasses()
          .then((classes) => {
            setGroupSearch(classes.reduce((a, b) => a.concat(b), []))
          })
        setSearchType(value)
        break
      case 'department':
        spreadsheetService.getDepartments()
          .then((departments) => {
            setGroupSearch(departments.reduce((a, b) => a.concat(b), []))
          })
        break
      default:
        console.log('default')
        setGroupSearch([])
        setSearchType('')
    }
  }

  const selector = () => {
    if (searchType === 'Advisory') {
      return true//checkIfExists()
    } else {
      return false//checkStudent()
    }
  }

  return (
    <>
      <div>
        <h2>Search </h2>
        <div className="mb-3 row">
          <label htmlFor="searchType"
                 className="col-sm-2 col-form-label">
            Search by
          </label>
          <div className="col-sm-10">
            <select id="searchType"
                    className="form-control"
                    value={searchType}
                    onChange={(e) => {
                      handleSearchSelection(e.target.value)
                    }}>
              <option disabled value={''}>Select one</option>
              <option value="advisory">Advisory</option>
              <option value="class">Class</option>
              <option value="department">Department</option>
            </select>
          </div>
        </div>
        {
          searchType &&
          <>
            <div className="mb-3 row">
              <label htmlFor="searchGroup"
                     className="col-sm-2 col-form-label">
                Select {searchType}
              </label>
              <div className="col-sm-10">
                <select id="searchGroup"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value)
                        }}>
                  <option disabled value={''}>Select one</option>
                  {
                    groupSearch.map((item) => {
                      return (
                        <option value={item}>{item}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
          </>
        }

        {
          searchTerm &&
          <>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">

              </label>
              <div className="col-sm-10">
                <Link className="btn btn-primary"
                      onClick={() => selector()}
                      to={`/dashboard/search/asdfdsa`}>
                  Load!
                </Link>
              </div>
            </div>
          </>
        }

        <p>or</p>

        <div className="mb-3 row">
          <label htmlFor="studentName"
                 className="col-sm-2 col-form-label">
            Search for a student
          </label>
          <div className="col-sm-10">
            <input value={student}
                   onChange={(e) => setStudent(e.target.value)}
                   type="text"
                   placeholder="e.g. Jason Lewis"
                   title="Enter student to search"
                   className="form-control"
                   id="studentName"/>
          </div>
        </div>

        {
          student &&
          <>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">
              </label>
              <div className="col-sm-10">
                <Link className="btn btn-primary"
                      onClick={() => selector()}
                      to={`/dashboard/search/${student}`}>
                  Find!
                </Link>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default SearchScreen