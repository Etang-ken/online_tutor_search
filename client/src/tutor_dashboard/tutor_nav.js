import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
    faUser,
    faAdd,
    faPlayCircle,
    faBook,
    faLock,
    faStar
 } from '@fortawesome/free-solid-svg-icons';

const TutorNav = () => {
    let params = useParams();

    return ( 
        <div className="container-fluid overflow-hidden nav_side">
            <nav>
                <div>
                <ul className="navbar-nav me-auto mt-5 mb-lg-0">

                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_home/${params.id}`} className="nav-link text-light font-weight-bold mx-1"> <FontAwesomeIcon icon={faHome} className="me-1"/> Home </Link>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_my_profile/${params.id}`} className="nav-link text-light font-weight-bold mx-1"> <FontAwesomeIcon icon={faUser} className="me-1"/> My Profile </Link>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_add_subject/${params.id}`} className="nav-link text-light font-weight-bold active mx-1" aria-current="page"> <FontAwesomeIcon icon={faAdd} className="me-1"/> Add Subject </Link>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_demo_request/${params.id}`} className="nav-link text-light font-weight-bold mx-1"> <FontAwesomeIcon icon={faPlayCircle} className="me-1"/> Demo Lectures </Link>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_appointed_tutor/${params.id}`} className="nav-link text-light font-weight-bold mx-1"> <FontAwesomeIcon icon={faBook} className="me-1"/> Appointements </Link>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_ratings/${params.id}`} className="nav-link text-light font-weight-bold mx-1"> <FontAwesomeIcon icon={faStar} className="me-1"/> Ratings </Link>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <Link to={`/t_change_password/${params.id}`} className="nav-link text-light font-weight-bold mx-1"> <FontAwesomeIcon icon={faLock} className="me-1"/> Change Password </Link>
                    </li>

                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default TutorNav;