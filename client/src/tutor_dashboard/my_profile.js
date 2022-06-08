import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser,
    faCalendarCheck,
    faBook,
    faDollarSign,
    faMapMarkerAlt,
    faNotesMedical
} from '@fortawesome/free-solid-svg-icons';

const MyProfile = () => {
    const params = useParams();
    const history = useHistory();

    const [user, setUser] = useState([]);

    const handleButtonClick = () => {
        history.go(-1);
    }

    useEffect(() => {
        async function getTutors() {
            const response = await fetch(`http://localhost:5000/tutor/user/${params.id}`);
        
            if(!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const user = await response.json();
            setUser(user);
        }
        getTutors();
        
        
    }, [history])
   
    if(!user){
        return null;
    }
    // console.log(user.username, user.location)
    return ( 
        <div className="my_profile">

            {/* first row */}
            <div className="row num1">

                <div className="col-sm-3 row p-3 profile-image">
                    <div className="col-3">
                        <h1 className='display-3  ms-3'><FontAwesomeIcon icon={faUser} /></h1>
                    </div>
                    <div className="col-9 p-2 ps-4">
                        <h4 className='fw-bold'>Welcome,</h4>
                        <h5>{user.username}</h5>
                    </div>
                </div>

                <div className="col-sm-9 full-names mt-5 py-4 text-start row">
                    <div className="col-8">
                        <h3 className="display-6">
                            {user.fullnames}
                        </h3>
                        <p>Profile lastly updated at, 00 : 00 AM </p>
                    </div>
                    <div className="col-4 text-center circle">
                        <p>75%</p>
                    </div>
                   
                </div>

            </div>

            {/* second row */}
            <div className="row num2 p-3 mt-5">
                <div className="col-sm-3 row m-3 pt-2 pb-5 box-1">
                    <div className="col-9">
                        <h4>PRICE PER HOUR</h4>
                        <h2 className='display-6'>{user.pricePerHour}</h2>
                    </div>
                    <div className="col-3">
                        <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faDollarSign} /></h1>
                    </div>
                </div>

                <div className="col-sm-3 row m-3 pt-2 pb-5 box-2">
                    <div className="col-9">
                        <h4>YEARS OF EXPERIENCE</h4>
                        <h2 className="col-9">{user.yearsExperience}</h2>
                    </div>
                    <div className="col-3">
                        <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faCalendarCheck} /></h1>
                    </div>
                </div>

                <div className="col-sm-3 row m-3 pt-2 pb-5 box-3">
                    <div className="col-9">
                        <h4>SUBJECTS</h4>
                        <h3 className='h5'>{user.subject}</h3>
                    </div>
                    <div className="col-3">
                        <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faBook} /></h1>
                    </div>
                </div>

                <div className="col-sm-3 row m-3 pt-2 pb-5 box-4">
                    <div className="col-9">
                        <h4>LOCATION</h4>
                        <h3 className='h5'>{user.location}</h3>
                    </div>
                    <div className="col-3">
                        <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faMapMarkerAlt} /></h1>
                    </div>
                </div>
            </div>

            {/* third row */}
            <div className="row num3 p-3">
                <div className="col-sm-6 row m-3 pt-2 pb-5 box-1">
                    <div className="col-9">
                        <h4>DESCRIPTION</h4> 
                        <p className=''>{user.description}</p>
                    </div>
                    <div className="col-3">
                        <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faNotesMedical} /></h1>
                    </div>
                </div>

                <div className="col-sm-6 row">
                    <div className="col-sm-3 row m-3 pt-2 pb-5 box-3">
                            <div className="col-9">
                                <h4>SUBJECTS</h4>
                                <h3 className='h5'>{user.subject}</h3>
                            </div>
                            <div className="col-3">
                                <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faBook} /></h1>
                            </div>
                        </div>

                        <div className="col-sm-3 row mt-3 ms-3 mb-3 pt-2 pb-5 box-4">
                            <div className="col-9">
                                <h4>LOCATION</h4>
                                <h3 className='h5'>{user.location}</h3>
                            </div>
                            <div className="col-3">
                                <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faMapMarkerAlt} /></h1>
                            </div>
                        </div>

                        <div className="col-sm-3 row m-3 pt-2 pb-5 box-3">
                            <div className="col-9">
                                <h4>SUBJECTS</h4>
                                <h3 className='h5'>{user.subject}</h3>
                            </div>
                            <div className="col-3">
                                <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faBook} /></h1>
                            </div>
                        </div>

                        <div className="col-sm-3 row mt-3 ms-3 mb-3 pt-2 pb-5 box-4">
                            <div className="col-9">
                                <h4>LOCATION</h4>
                                <h3 className='h5'>{user.location}</h3>
                            </div>
                            <div className="col-3">
                                <h1 className='display-3 box-logo'><FontAwesomeIcon icon={faMapMarkerAlt} /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            
            {/* {window.location.href === `http://localhost:3000/t_my_profile/${params.id}` && <><div className='border border-0 py-2 px-3 bg-dark col-3'><h4 className="p-3 text-white">User: {user.username}</h4></div>} */}
             <Link to={`/update_profile/${params.id}`}>
            <button className="btn border border-0 py-2 px-3 bg-secondary text-white search-icon float-end me-5">Update Profile</button>
            
            </Link>

            {/* {window.location.href === `http://localhost:3000/p_tutor_info/${params.id}` && <><button onClick={handleButtonClick} className="btn border border-0 py-2 px-3 bg-secondary text-white search-icon float-start ms-5 my-4">Back</button></>} */}
            <br /><br />
            <div className="p-2 row">
                <div className="col-sm-4">

                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th className='table-active' scope='col'>###</th>
                        <td scope='col'>Values</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='table-active' scope='row'>Full Names</th>
                        <td colSpan='2'>{user.fullnames}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Date of Birth</th>
                        <td colSpan='2'>{user.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Place of Birth</th>
                        <td colSpan='2'>{user.placeOfBirth}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Subject</th>
                        <td colSpan='2'>{user.subject}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Location</th>
                        <td colSpan='2'>{user.location}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Sex</th>
                        <td colSpan='2'>{user.sex}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Description</th>
                        <td colSpan='2'>{user.description}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Days Available</th>
                        <td colSpan='2'>
                            {user.daysAvailable} </td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Time Available</th>
                        <td colSpan='2'>{user.timeAvailable}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Diplomas</th>
                        <td colSpan='2'>{user.diplomas}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Schools Taught</th>
                        <td colSpan='2'>{user.schoolsTaught}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Years of Experience</th>
                        <td colSpan='2'>{user.yearsExperience}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Price per Hour</th>
                        <td colSpan='2'>${user.pricePerHour}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Platforn Choice</th>
                        <td colSpan='2'>{user.platform}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Picture</th>
                        <td colSpan='2'>{user.picture} </td>
                    </tr>
                </tbody>
            </table>

            {/* {window.location.href === `http://localhost:3000/p_tutor_info/${params.id}` && <div className='d-flex justify-content-end'><Link className="btn btn-success p-2 mt-2 mb-4 me-5" to='/'>Book Tutor</Link></div>} */}
            
        </div> 
     );
}
 
export default MyProfile;