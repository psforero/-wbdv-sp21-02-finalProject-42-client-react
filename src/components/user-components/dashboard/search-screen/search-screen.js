import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';

const SearchScreen = (
  {
    advisories,
    departments,
    classes
  }
) => {
  const [searchType, setSearchType] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [student, setStudent] = useState('')
  const [groupSearch, setGroupSearch] = useState([])

  const handleSearchSelection = (value) => {
    setSearchType(value)
    setSearchTerm('')
    switch (value) {
      case 'advisory':
        setGroupSearch(advisories)
        break
      case 'class':
        setGroupSearch(classes)
        break
      case 'department':
        setGroupSearch(departments)
        break
      case 'all':
        setGroupSearch([])
        setSearchTerm('all')
        break
      default:
        setGroupSearch([])
        setSearchType('')
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
              <option value="all">All</option>
            </select>
          </div>
        </div>
        {
          searchType && searchTerm !== 'all' &&
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
                        <option>
                          {item}
                        </option>
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
                      to={`/dashboard/group/${searchType}/${searchTerm}`}>
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
                      to={`/dashboard/student/search/${student}`}>
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