import React from 'react';
import "bloomer";
import IssueList from './components/IssueList';
import Issue from './components/Issue';
import IssueDetail from './components/IssueDetail';
import "bulma/css/bulma.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <Link to='/'>IssueList</Link>
            <Link to='/blog'>Issue</Link>
            <Link to='/about'>IssueDetail</Link>
        </nav>
      </div>
        <Switch>
              <Route exact path={`${url}/:id`}><IssueList />
              </Route>
              <Route path='/Issue'><Issue />
              </Route>
                <Route path='/IssueDetails'><IssueDetail />
              </Route>
              <Route path="*">
                <Redirect to='/' />
              </Route>
        </Switch>
    </Router>
  );
}

export default App;
