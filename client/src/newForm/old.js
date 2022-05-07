import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Register = () => {

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
            "http://localhost:5000/login", logUser
        )
        .then(res => {
            console.log(res.data)
            return res.data;
        })
        .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
        }).catch(err => console.log(err))
        
        
    }

    useEffect(() => {
        fetch("http://localhost:5000/isUserAuth", {
            headers:{
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/parent_routes"): null)
        .catch(err => console.log(err))
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