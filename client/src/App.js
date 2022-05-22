import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './admin_login';
import ParentLogin from './parent_login';
import TutorLogin from './tutor_login';
import Register from './register';

//tutor imports
import UpdateProfile from './tutor_dashboard/updateProfile';
import TutorNav from './tutor_dashboard/tutor_nav';
import MyProfile from './tutor_dashboard/my_profile';
import TutorHome from './tutor_dashboard/t_home';
import AddSubject from './tutor_dashboard/add_subject';
import DemoRequest from './tutor_dashboard/demo_requests';
import AppointedTutor from './tutor_dashboard/appoint_tutor';
import TutorRatings from './tutor_dashboard/ratings';
import ChangePassword from './tutor_dashboard/change_password';

//parent imports
import ParentNav from './parent_dashboard/parent_nav';
import ParentHome from './parent_dashboard/p_home';
import AppointTutor from './parent_dashboard/appoint_tutor';
import BooksNDemo from './parent_dashboard/booksndemo';
import MockTest from './parent_dashboard/mock_test';
import Ratings from './parent_dashboard/ratings';
import ViewTutor from './parent_dashboard/view_tutors';
import TutorInfo from './parent_dashboard/tutor_details';

// admin imports
import AdminNav from './admin_dashboard/admin_nav';
import ManageMock from './admin_dashboard/manage_mock';
import ManageTutor from './admin_dashboard/manage_tutor';
import ViewParents from './admin_dashboard/view_parents';
import ViewAppointment from './admin_dashboard/view_appointment';
import BookaTutor from './parent_dashboard/book_tutor';

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
          
        
        {/* tutor */}
        <Route path="/update_profile/:id">
            <UpdateProfile />
          </Route>
        <Route path="/t_my_profile/:id">
            <TutorNav/>
            <MyProfile/>
          </Route>
        <Route  path="/t_home/:id">
          <TutorNav/>
          <TutorHome/>
        </Route>
        <Route path="/t_add_subject/:id">
            <TutorNav/>
            <AddSubject/>
        </Route>
        <Route path="/t_demo_request/:id">
            <TutorNav/>
            <DemoRequest/>
        </Route>
        <Route path="/t_appointed_tutor/:id">
            <TutorNav/>
            <AppointedTutor/>
        </Route>
        <Route path="/t_ratings/:id">
            <TutorNav/>
            <TutorRatings/>
        </Route>
        <Route path="/t_change_password/:id">
              <TutorNav/>
            <ChangePassword/>
        </Route>
          

          {/* parent */}
        <Route exact path="/p_home/:id">
            <ParentNav/>
            <ParentHome/>
        </Route>
        <Route path="/p_appoint_tutor/:id">
            <ParentNav/>
            <AppointTutor/>
        </Route>
        <Route path="/p_booksndemo/:id">
            <ParentNav/>
            <BooksNDemo/>
        </Route>
        <Route path="/p_mock_test/:id">
            <ParentNav/>
            <MockTest/>
        </Route>
        <Route path="/p_ratings/:id">
            <ParentNav/>
            <Ratings/>
        </Route>
        <Route path="/p_view_tutor/:id">
            <ParentNav/>
            <ViewTutor/>
        </Route>
        <Route path="/p_tutor_details/:id">
            <TutorInfo/>
          </Route>
        <Route path="/p_book_tutor/:id">
          <BookaTutor/>
        </Route>


        {/* admin */}
        <Route exact path="/a_manage_mock/:id">
            <AdminNav/>
            <ManageMock/>
        </Route>
        <Route path="/a_manage_tutor/:id">
            <AdminNav/>
            <ManageTutor/>
        </Route>
        <Route path="/a_view_parents/:id">
            <AdminNav/>
            <ViewParents/>
        </Route>
        <Route path="/a_view_appointment/:id">
            <AdminNav/>
            <ViewAppointment/>
        </Route>          

      </Switch>


    </div>
    </Router>
    
  );
}

export default App;
