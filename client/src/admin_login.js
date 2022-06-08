import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';

const AdminLogIn = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const  history = useHistory();
    const params = useParams();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(2, "Password Should have atleast 4 characters...")
        .required("Required"),
        password: Yup.string()
        .min(4, "Password Should have atleast 4 characters...")
        .required("Required")
    });

    const onSubmit = logUser => {
        axios.post(
            "http://localhost:5000/admin/login", logUser
        )
        .then(res => {
            console.log(res.data)
            return res.data;
        })
        .then(data => {
            localStorage.setItem('token', data.token)
            if(data.message === "Success"){
                axios.get("http://localhost:5000/admin/users")
                .then(newData => {
                    console.log(newData.data)
                    const userValues = newData.data;
                    let id = "";
                    const userFound = userValues.find(newUser => {
                        if(newUser.username === logUser.username){
                            id = newUser._id;
                            return id = newUser._id.toString();
                        }
                    })
                    alert("LogIn Successful...");
                    history.push(`/a_view_parents/${id}`)
                })
            } else {
                alert(data.message)
            }
        }).catch(err => console.log(err))
        
        
    }

    useEffect(() => {
        fetch("http://localhost:5000/admin/isUserAuth", {
            headers:{
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/admin_routes"): null)
        .catch(err => console.log(err))
    }, [])

    return ( 
        <div className="form-wrapper parent_login container mt-4">

                <div className="signup_box row">
                    <div className="col-sm-5">
                        <h5 className='text-end me-5 mt-3'><img src="" alt="" /><strong>Tuton</strong></h5>
                        
                        <h4 className="signup_text text-start">
                            <strong>
                                Sign In as Admin
                            </strong>
                        </h4>
                        
                        <p className="google p-1 mb-2">
                            <Link to="#">
                                <img src={require('./assets/google.png')} alt="" className='googleimg text-start'/>
                                <span className='ms-5 text-start'>
                                    Continue with Google
                                </span>
                            </Link>
                        </p>
                        <p className='p_line'>Or</p>
                        <br/>


                        <Formik initialValues={form} onSubmit={onSubmit} enableReinitialize validationSchema={validationSchema}>
                            <Form className='ms-4 text-center'>  

                                <p className='m-0 text-start'><label htmlFor="username">Username</label></p>
                                <Field 
                                name="username" 
                                type="text" 
                                className="py-2 input_forms" 
                                placeholder="Username..." />
                                <ErrorMessage 
                                name="username" 
                                className="d-block invalid-feedback" 
                                component="span" /><br />
                            
                            <p className='m-0 text-start'><label htmlFor="username">Password</label></p>
                                <Field 
                                name="password" 
                                type="password" 
                                className=" py-2 input_forms" 
                                placeholder="Password..."
                                />
                                <ErrorMessage 
                                name="password" 
                                className="d-block invalid-feedback" 
                                component="span" />
                                <br />

                                
                        

                                <input type="submit" value="Sign In" className="submit p-2 mt-4 ms-2"/>
                                <br /><br />
                            </Form>
                        </Formik>

                        
                            <div className="text-center">
                            <p className='text-center text-secondary account_v'>
                                Don't have an account? 
                                <Link to='/register' className='signin ms-1'> 
                                Sign Up
                                </Link>
                                </p>
                            
                                <Link to='#' className='forgot-password'> 
                                Forgot Password?
                                </Link><br />

                                <Link to='/tutor_login' className='btn submit2 p-2 mt-4 ms-2'> 
                                Sign In as Tutor
                                </Link>
                            </div>
                                
                            
                        
                    </div>

                
                <div className="col-sm-7">
                    <div className="imagetext">
                        <h1>Welcome to <span className='tuton'>Tuton</span></h1>
                        <p>A platform for parents/student to get the best tutors in<br /> the country. </p>
                    </div>
                    <img src={require('./assets/login2.jpg')} alt="" className='image-style ms-5' />
                </div> 
                
                </div>
        </div>
    )
};

export default AdminLogIn;
