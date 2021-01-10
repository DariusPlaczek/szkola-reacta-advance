import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

import { Home, UsersList, UserDetails, TestOne } from './components/Pages'
import { Content, LeftSideBar } from './components/SiteContainer'


function App() {
  return (
    <Router>
      <div className="main-container">
        <LeftSideBar />
        <Content>
          <Switch>
            <Route exact path='/users'>
              <UsersList />
            </Route>
            <Route path='/user/:id' component={UserDetails} />
            <Route exact path='/' component={Home} />
            <Route path='/tests' component={TestOne} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
