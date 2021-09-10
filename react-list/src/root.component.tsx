import React from 'react'
import UserList from './components/UserList';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Root: React.FC = () => {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
    </Router>
  )
}

export default Root;