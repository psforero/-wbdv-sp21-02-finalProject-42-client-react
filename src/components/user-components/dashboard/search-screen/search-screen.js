import React, { useState } from 'react';
import advisoryReducer from '../../../../reducers/advisories-reducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import AdvisorySearch from './advisory-search';
import { Route } from 'react-router-dom';
import DetailsScreen from '../../student-detail/details-screen';

const reducer = combineReducers({
  advisoryReducer: advisoryReducer
})

const store = createStore(reducer)

const SearchScreen = () => {
  const [searchType, setSearchType] = useState('Advisory')
  const [search, setSearch] = useState('Enter Advisory Name')
  const [student, setStudent] = useState(null)

  return (
    <Provider store={store}>
      <div>
        <h2>Search </h2>
        <select onChange={(e) => {
          setSearchType(e.target.value)
          setSearch(`Enter ${e.target.value} name`)
        }}
                className="form-control">
          <option>Advisory</option>
          <option>Student</option>
        </select>
        <br/>
        <input className="form-control"
               type="text"
               placeholder={search}
               onChange={(e) =>
                 setSearch(e.target.value)}/>
        <br/>
        <AdvisorySearch advisoryToSearch={search}
                        setStudent={setStudent}
                        searchType={searchType}/>

      </div>
      <Route path="/profile/search/:advisor/:studentName" exact={true}>
        <DetailsScreen student={student}/>
      </Route>
    </Provider>
  )
}

export default SearchScreen;