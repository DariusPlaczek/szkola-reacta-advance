import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, UsersList, UserDetails, Messages } from "./components/Pages";

import { Content, LeftSideBar } from "./components/SiteContainer";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

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
              <Route exact path="/message" component={Messages} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Content>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
