import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

 const ViewAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [book, setBook] = useState([]);
    const [tutors, setTutors] = useState([]);

    const params = useParams();

    // const bookedTutors = (parent_id) => {
    //     axios.get(`http://localhost:5000/parent/bookedTutors/${parent_id}`)
    //     .then(response => {
    //         // console.log(response)
    //         if(response.data > 0) {
    //             response.data.forEach(tutor => {
    //                 axios.get(`http://localhost:5000/tutor/user/${tutor}`)
    //                 .then(tut => {
    //                     setBook(tut.data.username)
    //                     return <p>{book}</p>
    //                 })
                    
    //             })
    //         } else {
    //             return <p>No Booked tutor</p>
    //         }
            
    //     })
    // }




    useEffect(() => {
        axios.get(`http://localhost:5000/parent/users`)
        .then(res => {
            return res.data.forEach(parent =>{
                axios.get(`http://localhost:5000/parent/bookedTutors/${parent._id}`)
                .then(response => {
                    // console.log(response)
                    if(response.data.length > 0){
                        response.data.forEach(tutor => {
                            axios.get(`http://localhost:5000/tutor/user/${tutor}`)
                            .then(tut => {
                                console.log(parent._id, tut.data.username)
                                return setBook(bookedTutor=> [...bookedTutor, tut.data]);
                            })
                        })
                    } else {
                        console.log('empty') 
                    }
                })
                // setBook(bookedTutor=> [...bookedTutor, tut.data]);
                return setAppointments(sParent => [...sParent, parent])
            })
        })
    }, [])
    
    if(!appointments && !tutors){
        return null;
    }
    return ( 
        <div className="view_appointments">
            <table className="table table-bordered p-2">
                <thead>
                    <tr>
                        <th>Registered Parents</th>
                        <th>Booked Tutors</th>
                    </tr>
                </thead>
                <tbody>
                            {
                                appointments.map(pName => {
                                    return (
                                        <tr key={pName._id}>
                                            <td>{pName.username}</td>
                                                {
                                                    book.map(tutor => {
                                                        if(pName.booked.includes(tutor._id)){
                                                        return (
                                                            <tr key={tutor._id}>
                                                                <td>{tutor.username}: {tutor.fullnames}</td>
                                                            </tr>
                                                        )}
                                                    })
                                                        
                                                }
                                        </tr>
                                    )
                                })
                        }

                </tbody>
            </table>
        </div>
     );
}
 
export default ViewAppointment;