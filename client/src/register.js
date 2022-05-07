import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Register = () => {

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
            axios.post(
                "http://localhost:5000/tutor/register", regUser
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
                        history.push("/tutor_login")
                    }
                }else {
                    Promise.reject("No way near");
                }
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
        <div className="form-wrapper register">
            <div className="row head_div">
                <div className="mx-0 px-0 mt-2"> <h3 className="display-5 text-dark text-center admin_login_head">
                SignUp Form 
                </h3></div>
                </div>

                <div className="signup_box">
                    <h4 className="display-7 pt-5">Sign Up</h4>
                    <br/>

                <Formik initialValues={form} onSubmit={onSubmit} enableReinitialize validationSchema={validationSchema}>
                    <Form className="admin_login_form">

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
//         <div className="register">
//             <div className="row head_div">
//                 <div className="mx-0 px-0 mt-2"> <h3 className="display-5 text-dark text-center admin_login_head">
//                 SignUp Form</h3></div>
//                 </div>

//                 <div className="signup_box">
//                     <h4 className="display-7 pt-5">Sign Up</h4>
//                     <br/>
//                     <form onSubmit={onSubmit} className="admin_login_form">

//                         <input 
//                         type="text" 
//                         className="pl-2 input_forms" 
//                         placeholder="Full Names..."
//                         id="name"
//                         value={form.name}
//                         onChange={(e) => updateForm({ name: e.target.value })} 
//                         />

                        
//                         <input 
//                         type="email" 
//                         name="username" 
//                         className="mt-5 pl-2 input_forms" 
//                         placeholder="E-mail..."
//                         id="email"
//                         value={form.email}
//                         onChange={(e) => updateForm({ email: e.target.value })} 
//                         />
                        
//                         <br/><br/>
                        
//                         <input 
//                         type="password" 
//                         className="mt-4 pl-2 input_forms" 
//                         placeholder="Password..."
//                         id="password"
//                         value={form.password}
//                         onChange={(e) => updateForm({ password: e.target.value })} 
//                         />

//                         <br/><br/>
//                         {/* <input 
//                         type="password" 
//                         className="my-4 pl-2 input_forms" 
//                         placeholder="Confirm Password..."
//                         /> */}

//                         <br />
//                         <h3>Register as: </h3>
//                         <select name="select" id="select" onChange={(e) => updateForm({ useAs: e.target.value})}>
//                             <option value="">Choose...</option>
//                             <option value="Admin">Admin</option>

//                             <option value="Parent">Parent</option>
                            
//                             <option value="Tutor">Tutor</option>
//                         </select>

//                         <br/><br />
//                         <input type="submit" value="LogIn" className="mt-4 p-2 px-3 submit_button text-primary"/>
//                     </form>
//                         <br/>
//                     <div className="row">
//                         <div className="col-sm-1">
                            
//                         </div>

//                         <div className="col-sm-6 text-left option_buttons">
//                             <Link to="#" className="btn button-link text-left text-primary p-3 px-4">
//                                 Forgotten Password?
//                             </Link>
//                         </div>

//                         <div className="col-sm-4 text-left option_buttons">
//                             <Link to="/" className="btn button-link text-left text-primary p-3 px-4">
//                                 Already Have an Account?
//                             </Link>
//                         </div>

//                 </div>
//                     <br/>

//                     <div><Link to="/" className="back_icon"><i className="far fa-arrow-alt-circle-left delete"></i> Back</Link></div>
//                 </div>

//         </div>
//      );
// }
 
// export default Register;