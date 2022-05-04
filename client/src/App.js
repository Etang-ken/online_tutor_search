import logo from './logo.svg';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './admin_login';
import ParentLogin from './newForm/registerForm';
import TutorLogin from './tutor_login';
import Register from './register';

import AdminRoutes from './admin_dashboard/admin_routes';
import ParentRouter from './parent_dashboard/parent_router';
import TutorRouter from './tutor_dashboard/tutor_router';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/admin_login">
            <AdminLogin/>
          </Route>
          <Route path="/parent_login">
            <ParentLogin/>
          </Route>
          <Route path="/tutor_login">
            <TutorLogin/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/admin_routes">
            <AdminRoutes/>
          </Route>
          <Route path="/parent_routes">
            <ParentRouter/>
          </Route>
          <Route path="/tutor_routes">
            <TutorRouter/>
          </Route>
      </Switch>


    </div>
    </Router>
    
  );
}

export default App;
