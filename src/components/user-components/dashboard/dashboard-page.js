import React from 'react'
import { connect } from 'react-redux';
import DetailsScreen from '../student-detail/details-screen';
import SearchScreen from './search-screen/search-screen';
import TableView from './search-screen/table-view';

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
        <TableView/>
        // <SearchScreen/>
      }
    </>
  )
}

const stpm = (state) => (
  {
    user: state.userReducer.user
  }
)

export default connect(stpm)(Dashboard)

