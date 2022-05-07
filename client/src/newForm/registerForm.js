import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Register = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        useAs: ""
    });
    const  history = useHistory();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(2, "Username Should have atleast 2 characters...")
        .required("Required"),
        email: Yup.string()
        .email("You have to enter a valid email address...")
        .required("Required"),
        password: Yup.string()
        .min(4, "Password Should have atleast 4 characters...")
        .required("Required"),
        useAs: Yup.string()
        .required("Required")
    });

    async function handleRegister(e) {
        e.preventDefault();

        const form = e.target
        const user = {
            username: form[0].value,
            email: form[1].value,
            password: form[2].value,
            useAs: form[3].value
        }

        fetch("http://localhost:5000/register", {
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
        <div className="form-wrapper register">
            <div className="row head_div">
                <div className="mx-0 px-0 mt-2"> <h3 className="display-5 text-dark text-center admin_login_head">
                SignUp Form 
                </h3></div>
                </div>

                <div className="signup_box">
                    <h4 className="display-7 pt-5">Sign Up</h4>
                    <br/>

                <Formik initialValues={form} enableReinitialize validationSchema={validationSchema}>
                    <Form onSubmit={e => handleRegister(e)} className="admin_login_form">

                            <Field 
                            name="username" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Full Names..." />
                            <ErrorMessage 
                            name="username" 
                            className="d-block invalid-feedback" 
                            component="span" />
                        

                            <Field 
                            name="email" 
                            type="text" 
                            className="mt-5 pl-2 input_forms" 
                            placeholder="E-mail..." />
                            <ErrorMessage 
                            name="email" 
                            className="d-block invalid-feedback" 
                            component="span" />
                        
                        
                            <Field 
                            name="password" 
                            type="password" 
                            className="mt-5 pl-2 input_forms" 
                            placeholder="Password..."
                            />
                            <ErrorMessage 
                            name="password" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            <h3>Register as: </h3>
                            <Field name="useAs" as="select">
                                <option value="">Choose...</option>
                                <option value="Admin">Admin</option>
                                <option value="Parent">Parent</option>
                                <option value="Tutor">Tutor</option>
                            </Field>
                            <br /><br />
                    

                        <input type="submit" value="Register" className="mt-4 p-2 px-3 submit_button text-primary"/>
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
                            <Link to="/" className="btn button-link text-left text-primary p-3 px-4">
                                Already Have an Account?
                            </Link>
                        </div>

                </div>
                    <br/>

                    <div><Link to="/" className="back_icon"><i className="far fa-arrow-alt-circle-left delete"></i> Back</Link></div>
                </div>
        </div>
    )
};

export default Register;
