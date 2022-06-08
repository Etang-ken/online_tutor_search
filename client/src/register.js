import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, useParams } from "react-router";
import { Link } from 'react-router-dom';

const Register = () => {
    const params = useParams();
    const [form, setForm] = useState({
        username: "",
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
      

    const onSubmit = regUser => {

        //admin
        if(regUser.useAs === "Admin"){
            axios.get("http://localhost:5000/admin/users")
        .then(respond => {
            axios.post(
                "http://localhost:5000/admin/register", regUser
            )
            .then(res => {
                if (res.status === 200){
                    
                    const userExist = respond.data;
                    const userFound = userExist.find((user, index) => {
                        if(user.username === regUser.username || user.email === regUser.email){
                            return true;
                        }
                    })

                    if(userFound){
                        alert("Username or E-mail already exists. Please input a new Username or E-mail...");
                    }else{
                        alert("Successful Registration");
                        history.push("/admin_login")
                    }
                }else {
                    Promise.reject("No way near");
                }
            }).catch(err => alert('Something went wrong'))
        })
        }

        //parent
        if(regUser.useAs === "Parent"){
            axios.get("http://localhost:5000/parent/users")
        .then(respond => {
            axios.post(
                "http://localhost:5000/parent/register", regUser
            )
            .then(res => {
                if (res.status === 200){
                    const userExist = respond.data;
                    const userFound = userExist.find((user, index) => {
                        if(user.username === regUser.username || user.email === regUser.email){
                            return true;
                        }
                    })

                    if(userFound){
                        alert("Username or E-mail already exists. Please input a new Username or E-mail...");
                    }else{
                        alert("Successful Registration");
                        history.push("/parent_login")
                    }
                }else {
                    Promise.reject("No way near");
                }
            }).catch(err => alert('Something went wrong'))
        })
        }

        if(regUser.useAs === "Tutor"){
            axios.get("http://localhost:5000/tutor/users")
        .then(respond => {
            console.log(respond.data)
            axios.post(
                "http://localhost:5000/tutor/register", regUser
            )
            .then(res => {
                console.log(respond.data)
                if (res.status === 200){
                    const userExist = respond.data;
                    const userFound = userExist.find((user, index) => {
                        if(user.username === regUser.username || user.email === regUser.email){
                            return true;
                        }
                    })

                    if(userFound){
                        alert("Username or E-mail already exists. Please input a new Username or E-mail...");
                    }else{
                        axios.get("http://localhost:5000/tutor/users")
                            .then(newData =>  {
                                const userValues = newData.data;
                                let id = "";
                                const userFound = userValues.find(newUser => {
                                    if(newUser.username === regUser.username && newUser.email === regUser.email){
                                        id = newUser._id;
                                        return id = newUser._id.toString();
                                    }
                                })
                                console.log(id)
                                history.push("/tutor_login")
                    }).catch(err => console.log(err));
                  }
                }else {

                   
                    Promise.reject("No way near");
                }

                //getting new db values
                
            }).catch(err => alert('Something went wrong'))
        })
  

    }
       
    
    }

    

    useEffect(() => {
        fetch("http://localhost:5000/parent/isUserAuth", {
            headers:{
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/parent_routes"): null)
    }, [])

    return ( 
        <div className="form-wrapper">

            <div className="container register mt-4">

                <div className="row">
                {/* left side */}
                <div className="col-sm-7">
                    <div className="imagetext">
                        <h1>Welcome to <span className='tuton'>Tuton</span></h1>
                        <p>A platform for parents/student to get the best tutors in<br /> the country. </p>
                    </div>
                    <img src={require('./assets/7001.jpg')} alt="" className='image-style' />
                </div>

                {/* right side */}
                <div className="col-sm-5">
                <div className="signup_box m-0">
                    <h5 className='text-end me-5 mt-3'><img src="" alt="" /><strong>Tuton</strong></h5>
                
                    <h3 className="signup_text text-start">
                        <strong>
                            Sign Up
                        </strong>
                    </h3>
                    <p className='text-start ms-4 text-secondary account_v'>
                        Already have an account? 
                        <Link to='/parent_login' className='signin ms-1'> 
                        Sign In
                        </Link>
                    </p>
                    <p className="google p-1 mb-2">
                        <Link to="#">
                            <img src={require('./assets/google.png')} alt="" className='googleimg'/>
                            <span className='ms-5 text-center'>
                                Sign Up with Google
                            </span>
                        </Link>
                    </p>
                    <p className='p_line'>Or</p>
                    <br/>

                <Formik initialValues={form} onSubmit={onSubmit} enableReinitialize validationSchema={validationSchema}>
                    <Form className='ms-4'>
                            <label htmlFor="username">Username</label><br />
                            <Field 
                            name="username" type="text" 
                            className="input_forms py-2" 
                            placeholder="Username..." />
                            <ErrorMessage 
                            name="username" 
                            className="d-block invalid-feedback error-message" 
                            component="span" /> <br />
                        
                            <label htmlFor="email">E-mail</label><br />
                            <Field 
                            name="email" 
                            type="text" 
                            className="input_forms py-2" 
                            placeholder="E-mail..." />
                            <ErrorMessage 
                            name="email" 
                            className="d-block invalid-feedback error-message" 
                            component="span" /> <br />
                        
                            <label htmlFor="password">Password</label><br />
                            <Field 
                            name="password" 
                            type="password" 
                            className="input_forms py-2" 
                            placeholder="Password..."
                            />
                            <ErrorMessage 
                            name="password" 
                            className="d-block invalid-feedback error-message" 
                            component="span" />
                            <br />

                            <label>Register As: </label>
                            <Field name="useAs" as="select" className="py-2">
                                <option value="" disabled>Choose...</option>
                                <option value="Admin">Admin</option>
                                <option value="Parent">Parent</option>
                                <option value="Tutor">Tutor</option>
                            </Field>
                            <ErrorMessage 
                            name="select" 
                            className="d-block invalid-feedback error-message" 
                            component="span" />
                            <br />
                    

                        <input type="submit" value="Register" className="submit p-2 mt-4 ms-3"/>
                        <br />
                    </Form>
                </Formik>

               
                    <br/>

                </div>
                </div>
                </div>
            </div>

                
        </div>
    )
};

export default Register;
