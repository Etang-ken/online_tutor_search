import { Link, useParams } from 'react-router-dom';

const ParentNav = () => {
    const params = useParams();
    return ( 
        <div className="parent_nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand mx-5">Tuton</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#parentNavbar" arial-controls="parentNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="parentNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to={`/p_home/${params.id}`} className="nav-link mx-1 active"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/p_booksndemo/${params.id}`} className="nav-link mx-1"> Request a Demo and Book </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/p_view_tutor/${params.id}`} className="nav-link mx-1"> View Tutor </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/p_appoint_tutor/${params.id}`}  className="nav-link mx-1" aria-current="page"> Appointed Tutor </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/p_mock_test/${params.id}`} className="nav-link mx-1"> Mock Tests </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/p_ratings/${params.id}`} className="nav-link mx-1"> Ratings </Link>
                            </li>
                            
                        </ul>

                        <form className="d-flex" action="">
                            <input className="form-control me-2" type="search" placeholder="Search" arial-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default ParentNav;