import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AddSubject from './add_subject';
import AppointTutor from './appoint_tutor';
import ChangePassword from './change_password';
import DemoRequest from './demo_requests';
import MyProfile from './my_profile';
import Ratings from './ratings';
import TutorNav from './tutor_nav';
import TutorHome from './t_home';

const TutorRouter = () => {
    
    const params = useParams();
    return ( 
        <Router>
        <div className="tutor_router">
            <TutorNav/>
                <div className="content3">
                    <Switch>
                    <Route exact path="/tutor_routes/t_home/:id">
                        <TutorHome/>
                    </Route>
                    <Route path="/tutor_routes/add_subject/:id">
                        <AddSubject/>
                    </Route>
                    <Route path="/tutor_routes/demo_request/:id">
                        <DemoRequest/>
                    </Route>
                    <Route path="/tutor_routes/appointed_tutor/:id">
                        <AppointTutor/>
                    </Route>
                    <Route path="/tutor_routes/ratings/:id">
                        <Ratings/>
                    </Route>
                    <Route path="/tutor_routes/change_password/:id">
                        <ChangePassword/>
                    </Route>
                    
                    </Switch>
                </div>
        
        </div>
    </Router>
     );
}
 
export default TutorRouter;