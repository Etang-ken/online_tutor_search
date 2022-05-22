import React,{ useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import AppointTutor from './appoint_tutor';

const TutorInfo = () => {

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
    
    
    // const bookTutor = (tuto) => {
    //     user.bookTutor = user.;
    //     console.log(user)
    // }
    // const tutor = user;
    return ( 
        <div className="tutor_details">
            {/* {window.location.href.includes(`http://localhost:3000/p_appoint_tutor/`) && <AppointTutor tutor={bookTutor(tutor)}/>} */}
            
      

            {window.location.href === `http://localhost:3000/p_tutor_details/${params.id}` && <><button onClick={handleButtonClick} className="btn border border-0 py-2 px-3 bg-secondary text-white search-icon float-start ms-5 my-4">Back</button></>}
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
                        <th className='table-active' scope='row'>Platform Choice</th>
                        <td colSpan='2'>{user.platform}</td>
                    </tr>
                    <tr>
                        <th className='table-active' scope='row'>Picture</th>
                        <td colSpan='2'>{user.picture} </td>
                    </tr>
                </tbody>
            </table>

            <div className='float-end'><Link className="btn btn-success p-2 mt-2 mb-4 me-5" to={`/p_book_tutor/${params.id}`}>Book Tutor</Link></div>
            
        </div> 
     );
}
 
export default TutorInfo;