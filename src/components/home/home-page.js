import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';
import AboutUs from './about-us-page';
import LogIn from '../user-login/login-page';
import Register from '../user-login/register-page';
import Join from './join-page';
import Contact from './contact-page';
import Navbar from './navbar';

const Home = ({ tab, setTab }) => {
  return (
    <div>
      <div className="sticky-top float-right row">
      </div>

      <Route path="/" exact={true}>
        <figure>
          <div className="row justify-content-center">
            <h1 className="justify-content-center display-1">DaViz</h1>
          </div>
        </figure>
        <div className="wbdv-banner-image"/>
      </Route>
      <Route path="/aboutUs">
        <AboutUs/>
      </Route>
      <Route path="/join">
        <Join/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/login">
        <LogIn setTab={setTab}/>
      </Route>
      <Route path="/register">
        <Register setTab={setTab}/>
      </Route>
    </div>
  )
}

export default Home