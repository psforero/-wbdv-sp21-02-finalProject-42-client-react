import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import sheetsService from '../../../../services/gsheets-service';
import StudentCard from '../student-card';
import { Link, Route } from 'react-router-dom';

const AdvisorySearch = (
  {
    advisories,
    getAdvisoryList,
    getAdvisoryRows,
    getAllStudents,
    advisoryToSearch,
    advisoryRows,
    setStudent,
    searchType,
    students
  }) => {

  const [exists, setExists] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null)

  useEffect(() => {
    getAdvisoryList()
  }, [getAdvisoryList])

  const checkIfExists = () => {
    const keys = Object.keys(advisories)
    if (keys.includes(advisoryToSearch)) {
      setExists(true)
      getAdvisoryRows(advisoryToSearch)
    } else {
      setExists(false)
      alert(`Theres no advisory named ${advisoryToSearch} \n available advisories are: ${keys}`)
    }
  }

  const checkStudent = () => {
    getAllStudents(advisories)
    let exists = false
    for (let student in students) {
      let rec = students[student]
      if (rec.Name === advisoryToSearch) {
        setSelectedStudent(rec)
        exists = true
        break;
      }
    }
    if (!exists) {
      setSelectedStudent(null)
      alert(`There is no student named ${advisoryToSearch}`)
    }
  }

  const selector = () => {
    if (searchType === 'Advisory') {
      return checkIfExists()
    } else {
      return checkStudent()
    }
  }

  return (
    <>
      <Link className="btn btn-primary"
            onClick={() => selector()}
            to={`/profile/search/${advisoryToSearch}`}>
        Search
      </Link>
      {
        searchType === 'Advisory' &&
        <Route path="/profile/search/:advisor" exact={true}>
          {
            searchType === 'Advisory' &&
            <>
              <h1>Existing Advisories</h1>
              <ul className="list-group">
                {
                  Object.keys(advisories).map((name) =>
                    <li key={name}>
                      {name}
                    </li>
                  )
                }
              </ul>
              {
                exists &&
                <>
                  <h1>Students for {advisoryToSearch}</h1>
                  <div className="row">
                    {
                      advisoryRows.map((row) =>
                        <StudentCard row={row}
                                     advisor={advisoryToSearch}
                                     setStudent={setStudent}/>
                      )
                    }
                  </div>
                </>
              }
            </>
          }
        </Route>
      }
      {
        (searchType === 'Student' && selectedStudent !== null) &&
        <div className="row">
          <StudentCard row={selectedStudent}
                       advisor={selectedStudent.Advisor}
                       setStudent={setStudent}/>
        </div>

      }
    </>
  )
}

const stpm = (state) => {
  return {
    advisories: state.advisoryReducer.advisories,
    advisoryRows: state.advisoryReducer.rowsObj,
    students: state.advisoryReducer.students
  }
}

const dtpm = (dispatch) => {
  return {
    getAdvisoryList: async () => {
      await sheetsService.getAdvisoryList()
        .then(advisories => dispatch({
          type: 'FIND_ALL_ADVISORIES',
          advisories: advisories
        }))
    },
    getAdvisoryRows: async (advisoryToSearch) => {
      await sheetsService.getAdvisoryRows(advisoryToSearch)
        .then(rows => dispatch({
            type: 'GET_ALL_ADVISORY_STUDENTS',
            rows: rows
          }
        ))
    },
    getAllStudents: async (advisories) => {
      await sheetsService.getAllStudents(advisories)
        .then(students => dispatch({
            type: 'GET_ALL_STUDENTS',
            students: students
          }
        ))
    }
  }
}

export default connect(stpm, dtpm)(AdvisorySearch)
