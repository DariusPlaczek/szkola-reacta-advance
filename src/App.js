import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home, UsersList } from './components/Pages'
import { Content, LeftSideBar } from './components/SiteContainer'

function App() {
  return (
    <Router>
      <div className="main-container">
        <LeftSideBar />
        <Content>
          <Switch>
            <Route path='/users' component={UsersList} />
            <Route path='/' component={Home} />
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

export default App;
