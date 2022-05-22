import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppointTutor from './appoint_tutor';
import BooksNDemo from './booksndemo';
import MockTest from './mock_test';
import ParentNav from './parent_nav';
import ParentHome from './p_home';
import Ratings from './ratings';
import ViewTutor from './view_tutors';

const ParentRouter = () => {
    return ( 
        <Router>
            <div className="parent_router">
                <ParentNav/>
                    <div className="content3">
                        <Switch>
                        <Route exact path="/parent_routes/p_home/:id">
                            <ParentHome/>
                        </Route>
                        <Route path="/parent_routes/appoint_tutor/:id">
                            <AppointTutor/>
                        </Route>
                        <Route path="/parent_routes/booksndemo/:id">
                            <BooksNDemo/>
                        </Route>
                        <Route path="/parent_routes/mock_test/:id">
                            <MockTest/>
                        </Route>
                        <Route path="/parent_routes/ratings/:id">
                            <Ratings/>
                        </Route>
                        <Route path="/parent_routes/view_tutor/:id">
                            <ViewTutor />
                        </Route>
                        </Switch>
                    </div>
            
            </div>
        </Router>
     );
}
 
export default ParentRouter;