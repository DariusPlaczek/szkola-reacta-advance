import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home, UsersList, UserDetails } from './components/Pages'
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
<Switch>
      <Route exact path='/users/:id' component={UserDetails} />

      </Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
