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
                        <Route exact path="/parent_routes/p_home">
                            <ParentHome/>
                        </Route>
                        <Route path="/parent_routes/appoint_tutor">
                            <AppointTutor/>
                        </Route>
                        <Route path="/parent_routes/booksndemo">
                            <BooksNDemo/>
                        </Route>
                        <Route path="/parent_routes/mock_test">
                            <MockTest/>
                        </Route>
                        <Route path="/parent_routes/ratings">
                            <Ratings/>
                        </Route>
                        <Route path="/parent_routes/view_tutor">
                            <ViewTutor />
                        </Route>
                        </Switch>
                    </div>
            
            </div>
        </Router>
     );
}
 
export default ParentRouter;