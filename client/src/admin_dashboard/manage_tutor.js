import React, {  useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import TutorInfo from "../parent_dashboard/tutor_details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSearch 
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ManageTutor = () => {

    const [tutors, setTutors] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [approve, setApprove] = useState([])


    const getInput = (e) => {
        // console.log(e.target.value);
        setSearchItem(e.target.value)
    }

    // console.log(getInput)
    const params = useParams();
    const history = useHistory();

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


    //approve tutor
    const approveTutor = (Id) => {
        const tutorId = {
            tutor: Id
        }
        axios.put(`http://localhost:5000/admin/approvedTutors/${params.id}`, tutorId)
        .then(res => {
            axios.get(`http://localhost:5000/admin/user/${params.id}`)
            .then(respond => {
                window.location.reload(true)
            
        })
        })

    }
    
    useEffect(() => {
        const Tutors = axios.get(`http://localhost:5000/admin/user/${params.id}`)
        .then(respond => {
            const tutors = respond.data.approvedTutors;
            tutors.forEach(tutor => {
                setApprove(currentTutors =>[...currentTutors, tutor]);
            })
        })
    
    }, [])
        
    console.log(approve)
    
    

    // useEffect((id) => {
    //     axios.get(`http://localhost:5000/admin/user/${params.id}`)
    //     .then(respond => {
    //         const tutors = respond.data.approvedTutors;
    //         tutors.find(tutor => {
    //             if(tutor === id){
    //                 document.querySelector('.not-approved').classList.add("d-none");
    //                 document.querySelector('.approved').classList.remove("d-none");
    //             }
    //         })
    //     })
    // })
    // // console.log(approve)

    
    return ( 
        <div className="view_tutors">
            {/* {window.location.href === `http://localhost:3000/p_tutor/${params.id}` && <TutorInfo param={params.id} />} */}
              <div className="parent_d">
              <br /><h3>Available Tutors...</h3>
              <input 
              type="search" 
              name="search-bar" 
              id="search" 
              placeholder="Subject or Location..."
              onChange={getInput}
              />
              {searchItem === "" && <span><FontAwesomeIcon icon={faSearch} className="search-icon"/></span>}
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

                    <tbody>{
                        tutors.filter(tutor => { 
                            return (tutor
                                .location
                                .toLowerCase()
                                .includes(searchItem
                                    .toLowerCase()
                                    )
                                    ||
                                tutor
                                .subject
                                .toLowerCase()
                                .includes(searchItem
                                    .toLowerCase()
                                    )
                                )
                                })
                                .map((filteredTutor) => {
                                return (
                                    <tr key={filteredTutor._id}>
                                        <td>{filteredTutor.fullnames}</td>
                                        <td>{filteredTutor.subject}</td>
                                        <td>{filteredTutor.location}</td> 
                                        <td>${filteredTutor.pricePerHour}</td>
                                        <td>{filteredTutor.email}</td>
                                        <td>{filteredTutor.yearsExperience}</td>
                                        <td>
                                            <Link className="btn btn-primary p-2 my-2" to={`/p_tutor_details/${filteredTutor._id}`}>View Full Profile</Link> |  
                                            {   approve.includes(filteredTutor._id) ?
                                                <button 
                                                className="btn btn-success p-2 my-2 approved">
                                                    Approved
                                                </button>
                                                :
                                                <button 
                                                className="btn btn-danger p-2 my-2 not-approved" 
                                                onClick={()=>approveTutor(filteredTutor._id)}>
                                                    Approve
                                                </button>
                                                
                                                
                                                
                                            }
                                            
                                        </td>
                                    
                                </tr>
                            );
                            }) 
                    }
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default ManageTutor;