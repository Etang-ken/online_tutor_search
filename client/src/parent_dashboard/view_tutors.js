import React, {  useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import TutorInfo from "./tutor_details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSearch 
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
    const [searchItem, setSearchItem] = useState('');
    const [newTut, setNewTut] = useState([]);
    const [user, setUser] = useState('');


    const getInput = (e) => {
        // console.log(e.target.value);
        setSearchItem(e.target.value)
    }

    // console.log(getInput)
    const params = useParams();

    useEffect(() => {
    
        // async function getTutors() {
        //     const response = await fetch("http://localhost:5000/tutor/users");

        //     if(!response.ok) {
        //         const message = `An error occured: ${response.statusText}`;
        //         window.alert(message);
        //         return;
        //     }

        //     const tutors = await response.json();
        //     setTutors(tutors);
        // }

        // getTutors();

        axios.get(`http://localhost:5000/parent/user/${params.id}`)
        .then(output => {
            setUser(output.data.username);
        })

        axios.get(`http://localhost:5000/admin/user/62a4e1563b511e9fe0dda81b`)
        .then(res => {
        const adminData = res.data.approvedTutors;
        axios.get("http://localhost:5000/tutor/users")
            .then( res2 => {
                const tutorData = res2.data;
                tutorData.forEach(tutor => {
                    if(adminData.includes(tutor._id)){
                        return setTutors(currentTutors =>[...currentTutors, tutor])
                    }
                    
                })
            })
         })

        return;
    }, []);

    // function tutorList() {
    //     return tutors.map((tutor) => {
    //         return (
    //             <Tutors tutor={tutor} key={tutor._id} />
    //         );
    //     });
    // }
    
    

    function tutorList() {
        return tutors.filter(tutor => { 
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
                <Tutors tutor={filteredTutor} key={filteredTutor._id} />
            );
        });
    }

    if(!newTut){
        return null;
    } 
    console.log(newTut)
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

                <table>
                        <tbody>
                            <tr>
                                <td className="py-3">User</td>
                                <td className="py-3"><h3 className="text-success display-7 text-right text-bold">{user}</h3></td>
                            </tr>
                        </tbody>
                </table>
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