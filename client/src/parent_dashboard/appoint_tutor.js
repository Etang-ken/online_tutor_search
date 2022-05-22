import React, { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const Tutors = (props) => {
    
}

const AppointTutor = () => {

    const [bookedTutor, setBookedTutor] = useState([]);

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
       function getTutors() {
            axios.get(`http://localhost:5000/parent/user/${params.id}`)
            .then(res => {
                const booked = res.data.booked;
                booked.forEach(tutor => {
                    axios.get(`http://localhost:5000/tutor/user/${tutor}`)
                    .then(respond => {
                        const tutors = respond.data;
                        setBookedTutor(currentTutors =>[...currentTutors, tutors])
                    }).catch(err => console.log(err))
                })
            })
        }
        getTutors()
    }, []) 
    
    const deleteTutor = (id) => {
        const tuto = {
            tutor: id
        }
        const del = window.confirm("Are you sure want to unbook this tutor?");
        if(del) {
            axios.put(`http://localhost:5000/parent/remove/${params.id}`, tuto)
            .then(res => {
                console.log(res)
                alert("Tutor successfully deleted...")
                history.push(`/p_appoint_tutor/${params.id}`)
            })
        }
        console.log(tuto)
}
    // if(!bookedTutor){
    //     return null;
    // } else{
        console.log(bookedTutor)
    return ( 
        <div className="appoint_tutor">
            <div className="parent_d">
            <table className="mt-5">
                <thead>
                    <tr className="heads">
                        <th className="py-3">Order ID</th>
                        <th className="py-3">Subject</th>
                        <th className="py-3">Tutor Name</th>
                        <th className="py-3">Date - Time</th>
                        <th className="py-3">Payment Type</th>
                        <th className="py-3">Contact</th>
                        <th className="py-3">Note</th>
                        <th className="py-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        bookedTutor.map(tutor => {
                            return (
                                <tr key={tutor._id}>
                                    <td>{tutor.fullnames}</td>
                                    <td>{tutor.fullnames}</td>
                                    <td>{tutor.fullnames}</td>
                                    <td>{tutor.fullnames}</td>
                                    <td>{tutor.fullnames}</td>
                                    <td>{tutor.fullnames}</td>
                                    <td>{tutor.fullnames}</td>
                                    <td><button className="btn btn-danger" onClick={() => {deleteTutor(tutor._id)}}>Delete Tutor</button></td>
                                </tr>
                        )
                            })
                    }
                </tbody>
            </table>
        </div>
        </div>
     );
    // }
}
 
export default AppointTutor;