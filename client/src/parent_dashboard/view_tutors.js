import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tutors = (props) => (
    <tr>
        <td>{props.tutor.email}</td>
        <td>{props.tutor.username}</td>
        <td>{props.tutor.useAs}</td>
        <td>{props.tutor.useAs}</td>
        <td>{props.tutor.useAs}</td>
        
    </tr>
);

const ViewTutor = () => {

    const [tutors, setTutors] = useState([]);

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
            return (
                <Tutors tutor={tutor} key={tutor._id} />
            );
        });
    }


    return ( 
        <div className="request_demo">
              <div className="parent_d">
              <br /><h3>Available Tutors...</h3>
                <table className="mt-5">
                    <thead>
                    <tr className="heads">
                        <th className="py-3">Subject</th>
                        <th className="py-3">Tutor Name</th>
                        <th className="py-3">Date - Time</th>
                        <th className="py-3">Note</th>
                        <th className="py-3">Status</th>
                    </tr>
                    </thead>

                    <tbody>{tutorList()}</tbody>
                </table>
            </div>
        </div>
     );
}
 
export default ViewTutor;