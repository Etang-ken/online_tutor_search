import React, {  useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import TutorInfo from "./tutor_details";

const Tutors = (props) => (
    <tr>
        <td>{props.tutor.fullnames}</td>
        <td>{props.tutor.subject}</td>
        <td>{props.tutor.location}</td>
        <td>${props.tutor.pricePerHour}</td>
        <td>{props.tutor.email}</td>
        <td>{props.tutor.yearsExperience}</td>
        <td>
            <Link className="btn btn-primary p-2 my-2" to={`/p_tutor_details/${props.tutor._id}`}>View Full Profile</Link> |  
             <Link className="btn btn-success p-2 my-2" to='/'>Book Tutor</Link>
            
        </td>
        
    </tr>
);

const ViewTutor = () => {

    const [tutors, setTutors] = useState([]);

    const params = useParams();
    console.log("params" +params.id);

    useEffect(() => {
        async function getTutors() {
            const response = await fetch("http://localhost:5000/tutor/users");

            if(!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const tutors = await response.json();
            setTutors(tutors);
        }

        getTutors();
        return;
    }, [tutors.length]);

    function tutorList() {
        return tutors.map((tutor) => {
            console.log(tutor._id);
            return (
                <Tutors tutor={tutor} key={tutor._id} />
            );
        });
    }


    return ( 
        <div className="request_demo">
            {/* {window.location.href === `http://localhost:3000/p_tutor/${params.id}` && <TutorInfo param={params.id} />} */}
              <div className="parent_d">
              <br /><h3>Available Tutors...</h3>
                <table className="mt-5">
                    <thead>
                    <tr className="heads">
                        <th className="py-3">Tutor Name</th>
                        <th className="py-3">Subject</th>
                        <th className="py-3">Location</th>
                        <th className="py-3">Price per Hour</th>
                        <th className="py-3">E-mail</th>
                        <th className="py-3">Years of Experience</th>
                        <th className="py-3">Action</th>
                    </tr>
                    </thead>

                    <tbody>{tutorList()}</tbody>
                </table>
            </div>
        </div>
     );
}
 
export default ViewTutor;