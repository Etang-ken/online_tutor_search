import { Link,useParams } from 'react-router-dom';

const AdminNav = () => {
    const params = useParams();
    return ( 
        <div className="admin_nav">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand mx-5">Tuton</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#parentNavbar" arial-controls="parentNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="parentNavbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link to={`/a_manage_tutor/${params.id}`} className=" active nav-link mx-1"> Manage Tutor </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/a_manage_mock/${params.id}`} className="nav-link mx-1"> Manage Mock Test </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/a_view_parents/${params.id}`} className="nav-link mx-1" aria-current="page"> View Parents </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/a_view_appointment/${params.id}`} className="nav-link mx-1"> View Appointments </Link>
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
 
export default AdminNav;