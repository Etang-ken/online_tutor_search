import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const NewNav = () => {
    let params = useParams();

    return ( 
        <div className="container-fluid overflow-hidden nav_side">
            <nav>
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link to={`/t_home/${params.id}`} className="nav-link mx-1"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/t_my_profile/${params.id}`} className="nav-link mx-1"> My Profile </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/t_add_subject/${params.id}`} className="nav-link active mx-1" aria-current="page"> Add Subject </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/t_demo_request/${params.id}`} className="nav-link mx-1"> Demo Request </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/t_appointed_tutor/${params.id}`} className="nav-link mx-1"> Appointed Tutor </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/t_ratings/${params.id}`} className="nav-link mx-1"> Ratings </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/t_change_password/${params.id}`} className="nav-link mx-1"> Change Password </Link>
                    </li>

                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default NewNav;