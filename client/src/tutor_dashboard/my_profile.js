import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

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
            
            {/* {window.location.href === `http://localhost:3000/t_my_profile/${params.id}` && <><div className='border border-0 py-2 px-3 bg-dark col-3'><h4 className="p-3 text-white">User: {user.username}</h4></div>} */}
             <Link to={`/update_profile/${params.id}`}>
            <button className="btn border border-0 py-2 px-3 bg-secondary text-white search-icon float-end me-5">Update Profile</button>
            
            </Link>

            {/* {window.location.href === `http://localhost:3000/p_tutor_info/${params.id}` && <><button onClick={handleButtonClick} className="btn border border-0 py-2 px-3 bg-secondary text-white search-icon float-start ms-5 my-4">Back</button></>} */}
            <br /><br />

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