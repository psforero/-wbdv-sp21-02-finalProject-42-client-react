import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/user-reducer';
import spreadsheetReducer from './reducers/spreadsheet-reducer';
import { Provider } from 'react-redux';

import Navbar from './components/home/navbar';
import Home from './components/home/home-page'
import Dashboard from './components/user-components/dashboard/dashboard-page';
import Profile from './components/user-components/profile/profile-page';
import Directory from './components/user-components/directory/directory';
import Tools from './components/user-components/Tools/tools-page';

import APIsDemo from './components/APIsDemo';



const reducer = combineReducers({
  userReducer: userReducer,
  spreadsheetReducer: spreadsheetReducer
})

const store = createStore(reducer)

function App() {
  const [tab, setTab] = useState('Home')
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid">
          <Navbar tab={tab} setTab={setTab}/>
          <Route path="/">
            <Home tab={tab} setTab={setTab}/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/tools">
            <Tools/>
          </Route>
          <Route path="/directory">
            <Directory/>
          </Route>
          <Route path="/demo">
            <APIsDemo/>
          </Route>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
