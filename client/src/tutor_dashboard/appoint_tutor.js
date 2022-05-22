import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const AppointedTutor = () => {

    const [bookedParents, setBookedParents] = useState([]);

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        function getBookedParents() {
            axios.get("http://localhost:5000/parent/users")
            .then(res => {
                const bookedTutors = res.data;
                bookedTutors.forEach(tutor => {
                    tutor.booked.find(tut => {
                        if(tut === params.id) {
                            setBookedParents(prev =>  [...prev, tutor])
                        }
                    })
                })
            })
        }
        getBookedParents()
    }, [])
    console.log(bookedParents)
    if(!bookedParents){
        return null;
    }
    return ( 
        <div className="appoint_tutor">
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

                <tbody>{
                    bookedParents.map(parent => {
                       return(
                            <tr key={parent._id}>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                                <td>{parent.username}</td>
                            </tr>
                             ) 
                         })
                         }
                </tbody>
            </table>
        </div>
        </div>
        </div>
     );
}
 
export default AppointedTutor;