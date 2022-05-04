import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminNav from './admin_nav';
import ManageMock from './manage_mock';
import ManageTutor from './manage_tutor';
import ViewParents from './view_parents';
import ViewAppointment from './view_appointment';

const AdminRoutes = () => {
    return ( 
        <Router>
            <div className="admin_routes">
            <AdminNav/>
                <div className="content2">
                    <Switch>
                    <Route exact path="/admin_routes/manage_mock">
                        <ManageMock/>
                    </Route>
                    <Route path="/admin_routes/manage_tutor">
                        <ManageTutor/>
                    </Route>
                    <Route path="/admin_routes/view_parents">
                        <ViewParents/>
                    </Route>
                    <Route path="/admin_routes/view_appointment">
                        <ViewAppointment/>
                    </Route>
                    </Switch>
                </div>
            </div>
        </Router>
     );
}
 
export default AdminRoutes;