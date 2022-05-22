import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';

const BookaTutor = () => {

    const [form, setForm] = useState({
        username: "",
        email: ""
    });

    // const

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email("You have to enter a valid email address...")
        .required("Required"),
        username: Yup.string()
        .min(2, "Password Should have atleast 4 characters...")
        .required("Required")
    });

    const params = useParams();
    const history = useHistory();

    const onSubmit = book => {
        let pId;
        axios.get("http://localhost:5000/parent/users")
        .then(res => {
            const findBooked = res.data;
            const found = findBooked.find(booked => {
                if(book.email === booked.email){
                    console.log("True")
                    return pId = booked._id;
                }
            })
            const tuto = params.id.toString();
            const tutor = {
                tutor: tuto
            }
            console.log(tutor)
            if(found) {
                axios.put(`http://localhost:5000/parent/update/${pId.toString()}`, tutor)
                .then(data => {
                    console.log(data, tutor)
                    history.push(`/p_view_tutor/${pId}`)
                    alert("Booking Successful...")
            })
            .catch(err => console.log(err));
        }
        else {
            alert("Enter email your registered with...")
        }
        })
    }

    return ( 
        <div className="form-wrapper parent_login">

                <div className="signup_box">
                    <h4 className="display-7 pt-5">Book Tutor</h4>
                    <br/>

                        <Formik initialValues={form} onSubmit={onSubmit} enableReinitialize validationSchema={validationSchema}>
                            <Form className="admin_login_form">  

                                    <Field 
                                    name="username" 
                                    type="text" 
                                    className="pl-2 input_forms" 
                                    placeholder="Username..." />
                                    <ErrorMessage 
                                    name="username" 
                                    className="d-block invalid-feedback" 
                                    component="span" />
                                
                                
                                    <Field 
                                    name="email" 
                                    type="email" 
                                    className="mt-4 pl-2 input_forms" 
                                    placeholder="E-mail..."
                                    />
                                    <ErrorMessage 
                                    name="email" 
                                    className="d-block invalid-feedback" 
                                    component="span" />
                                    <br /><br />

                                    
                            

                                <input type="submit" value="Log In" className="mt-4 p-2 px-3 submit_button text-primary"/>
                                <br /><br />
                            </Form>
                        </Formik>
                </div>

        </div>
     );
}
 
export default BookaTutor;