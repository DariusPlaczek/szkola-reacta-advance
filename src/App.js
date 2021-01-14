import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, UsersList, UserDetails } from "./components/Pages";

import { Content, LeftSideBar } from "./components/SiteContainer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Router>
      <div className="main-container">
        <Provider store={store}>
          <LeftSideBar />
          <Content>
            <Switch>
              <Route exact path="/users">
                <UsersList />
              </Route>
              <Route path="/user/:id" component={UserDetails} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Content>
        </Provider>
      </div>
    </Router>
  );
}

export default App;

//https://codesandbox.io/s/cool-violet-t9fvg?file=/src/redux.js
