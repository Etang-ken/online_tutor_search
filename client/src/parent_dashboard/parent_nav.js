import { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Home from '../home';

const ParentNav = () => {
    const params = useParams();
    const history = useHistory();

    const logOut = () => {
        fetch("http://localhost:5000/parent/isUserAuth", {
            headers:{
                "x-access-token": localStorage.getItem(`${params.id.toString()}_token`)
            }
        })
        .then(res => res.json())
        .then(data => {
            const logout = window.confirm("Are you sure want to LogOut?");
            if(!data.isLoggedIn && logout){
                localStorage.removeItem(`${params.id.toString()}_token`);
                alert('LogOut Succeessful')
                history.push("/")
            } else {
                alert('Unsuccessful logout')
            }
        })
        .catch(err => console.log(err))
    }

    const token = localStorage.getItem(`${params.id.toString()}_token`);
    console.log(token)
    // useEffect(() => {
    //     fetch("http://localhost:5000/parent/isUserAuth", {
    //         headers:{
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     })
    //     .then(res => {
    //         console.log(res);
    //         return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         return data.isLoggedIn ? history.push("/"): null
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    if(token){
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
                            <li className="nav-item">
                                </li>
                                <input className="form-control me-2" type="search" placeholder="Search" arial-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="float-end p-3">
                    <button className="btn btn-secondary" onClick={logOut}>Log Out</button>
                </div>
            </div>
        )
    } else {
        history.push('/');
        return <Home />;
     };
}
 
export default ParentNav;