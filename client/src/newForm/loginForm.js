import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(2, "You username must contain atleast 2 character...")
        .required("Required"),
        password: Yup.string()
        .min(4, "Password Should have atleast 4 characters...")
        .required("Required")
    });

    const  history = useHistory();
    const params = useParams();

    function handleLogin(e) {
        e.preventDefault();

        const form = e.target
        const user = {
            username: form[0].value,
            password: form[1].value
        }

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token)
        })
    }

    useEffect(() => {
        fetch("http://localhost:5000/isUserAuth", {
            headers:{
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/parent_routes"): null)
    }, [])


    return ( 
        <div className="form-wrapper parent_login">
                <div className="row head_div">
                <div className="mx-0 px-0 mt-2"> <h3 className="display-5 text-dark text-center admin_login_head">
                Parent LogIn Form
                </h3></div>
                </div>

                <div className="signup_box">
                    <h4 className="display-7 pt-5">Parent</h4>
                    <br/>

                <Formik initialValues={form} enableReinitialize validationSchema={validationSchema}>
                    <Form onSubmit={e =>handleLogin(e)} className="admin_login_form">  

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
                            name="password" 
                            type="password" 
                            className="mt-4 pl-2 input_forms" 
                            placeholder="Password..."
                            />
                            <ErrorMessage 
                            name="password" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            
                    

                        <input type="submit" value="Log In" className="mt-4 p-2 px-3 submit_button text-primary"/>
                        <br /><br />
                    </Form>
                </Formik>

                <div className="row">
                                <div className="col-sm-1">
                                    
                                </div>

                                <div className="col-sm-6 text-left option_buttons">
                                    <Link to="#" className="btn button-link text-left text-primary p-3 px-4">
                                        Forgotten Password?
                                    </Link>
                                </div>

                    <div className="col-sm-4 text-left option_buttons">
                        <Link to="/register" className="btn button-link text-left text-primary p-3 px-4">
                            Sign Up
                        </Link>
                    </div>

            </div>
                <br/><br/>

                <div><Link to="/" className="back_icon"><i className="far fa-arrow-alt-circle-left delete"></i> Back</Link></div>
                </div>
        </div>
    )
};

export default LogIn;
