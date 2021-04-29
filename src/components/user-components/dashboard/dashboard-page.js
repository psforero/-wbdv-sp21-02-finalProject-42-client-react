import React from 'react'
import { connect } from 'react-redux';
import DetailsScreen from '../student-detail/details-screen';
import TableView from './search-screen/table-view';
import SearchScreen from './search-screen/search-screen';
import { Route } from 'react-router-dom';
import DataCompile from './search-screen/data-compile';

const Dashboard = (
  {
    user
  }
) => {
  return (
    <>
      {
        user.type === 'STUDENT' &&
        <DetailsScreen student={user}/>
      }
      {
        user.type !== 'STUDENT' &&
        <SearchScreen/>
      }

      <Route
        path={[
          '/dashboard/:group/:searchTerm',
        ]}
        exact={true}
        render={() =>
          <DataCompile/>}>
      </Route>

      <Route path="/dashboard/student">
        <DetailsScreen student={user}/>
      </Route>
    </>
  )
}

const stpm = (state) => (
  {
    user: state.userReducer.user
  }
)

export default connect(stpm)(Dashboard)

