import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import DetailsScreen from '../student-detail/details-screen';
import SearchScreen from './search-screen/search-screen';
import TableView from './search-screen/table-view';
import DetailsScreenTeacherView from '../student-detail/details-screen-teacher-view';
import StudentSearchResult from './search-screen/student-search-result';
import { Route, useParams } from 'react-router-dom';
import spreadsheetService from '../../../services/spreadsheet-service';



const Dashboard = (
  {
    user,
    studentData,
    advisories,
    departments,
    classes,
    loadData
  }
) => {
  useEffect(() => {
    loadData()
  }, [])


  return (
    <>
      {
        studentData.length !== 0 &&
        <>
          <br/>
          <button className='btn btn-success fas fa-sync-alt'
                  onClick={() => loadData()}>
            Reload data
          </button>
          {
            user.type === 'STUDENT' &&
            <DetailsScreen
              user={user}
              individualData={studentData.find(student => {
                return student.firstName === user.firstName && student.lastName === user.lastName
              })}/>
          }
          {
            user.type !== 'STUDENT' &&
            <>
              <SearchScreen advisories={advisories} classes={classes} departments={departments}/>
            </>
          }
        </>
      }

      <Route
        path={[
          '/dashboard/group/:group/:searchTerm',
        ]}
        exact={true}
        render={() =>
          <TableView studentData={studentData} departments={departments}/>}>
      </Route>

      <Route
        path={[
          '/dashboard/student/:lastName/:firstName',
        ]}
        exact={true}
        render={() =>
          <DetailsScreenTeacherView
            user={user}
            studentData={studentData}/>}>
      </Route>

      <Route
        path={[
          '/dashboard/student/search/:searchName',
        ]}
        exact={true}
        render={() =>
          <StudentSearchResult studentData={studentData} departments={departments}/>}>
      </Route>

    </>
  )
}

const stpm = (state) => (
  {
    studentData: state.spreadsheetReducer.studentData,
    advisories: state.spreadsheetReducer.advisories,
    departments: state.spreadsheetReducer.departments,
    classes: state.spreadsheetReducer.classes,
    user: state.userReducer.user
  }
)

const dtpm = (dispatch) => {
  return {
    loadData: () =>
      spreadsheetService.getAllData()
        .then((response) => {
          dispatch({
            type: 'SET_DATA',
            studentData: response.studentData,
            advisories: response.advisories,
            departments: response.departments,
            classes: response.classes
          })
        })
  }
}

export default connect(stpm, dtpm)(Dashboard)

