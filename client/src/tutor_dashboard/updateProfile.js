import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';

const UpdateProfile = () => {

    const [form, setForm] = useState({
        fullnames: "",
        dateOfBirth: "",
        placeOfBirth: "",
        subject: "",
        location: "",
        sex: "",
        description: "",
        daysAvailable: [],
        timeAvailable: [],
        diplomas: "",
        schoolsTaught: "",
        yearsExperience: "",
        pricePerHour: "",
        platform: "",
        picture: ""
    });
    const  history = useHistory();
    const params = useParams();

    // const validationSchema = Yup.object().shape({
    //     fullnames: Yup.string()
    //     .min(4, "Username Should have atleast 2 characters...")
    //     .required("Required"),
    //     dateOfBirth: Yup.date()
    //     .nullable()
    //     .transform((curr, orig) => orig === '' ? null : curr)
    //     .required("Required"),
    //     placeOfBirth: Yup.string()
    //     .required("Required"),
    //     subject: Yup.string()
    //     .required("Required"),
    //     location: Yup.string()
    //     .required("Required"),
    //     sex: Yup.string()
    //     .required("Required"),
    //     description: Yup.string()
    //     .required("Required"),
    //     daysAvailable: Yup.string()
    //     .required("Required"),
    //     timeAvailable: Yup.string()
    //     .required("Required"),
    //     diplomas: Yup.string()
    //     .required("Required"),
    //     schoolsTaught: Yup.string()
    //     .required("Required"),
    //     yearsExperience: Yup.number()
    //     .required("Required"),
    //     pricePerHour: Yup.number()
    //     .required("Required"),
    //     platform: Yup.string()
    //     .required("Required"),
    //     picture: Yup.string()
    //     .required("Required")
    // });
    // validationSchema={validationSchema}
    
    const onSubmit = profile => {
        
        axios.put(`http://localhost:5000/tutor/update/${params.id}`, profile)
            .then(res => {
                if(res.status === 200){
                    console.log("Ok");
                    history.push(`/t_my_profile/${params.id}`)
                }
            }).catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/tutor/user/${params.id}`)
        .then(res => {
            setForm(res.data)
        }).catch(err => console.log(err))
    }, [`${params.id}`])
    

    return ( 
        <div className="form-wrapper register">
            <div className="row head_div">
                <div className="mx-0 px-0 mt-2"> <h3 className="display-5 text-dark text-center admin_login_head">
                Update Profile
                </h3></div>
                </div>

                <div className="signup_box">
                    <h4 className="display-7 pt-5">Profile</h4>
                    <br/>

                <Formik initialValues={form} onSubmit={onSubmit} enableReinitialize >
                    <Form className="admin_login_form">

                            <Field 
                            name="fullnames" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Full Names..." />
                            <ErrorMessage 
                            name="fullnames" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />
                        

                            <Field 
                            name="dateOfBirth" 
                            type="date" 
                            className="mt-5 pl-2 input_forms" 
                            placeholder="Date of Birth..." />
                            <ErrorMessage 
                            name="dateOfBirth" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />


                            <Field 
                            name="placeOfBirth" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Place of Birth..." />
                            <ErrorMessage 
                            name="placeOfBirth" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            <Field 
                            name="subject" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Subject..." />
                            <ErrorMessage 
                            name="subject" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />


                            <Field 
                            name="location" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Location..." />
                            <ErrorMessage 
                            name="location" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />


                            <label> 
                                <Field 
                                name="sex" type="radio"
                                value="Male"
                                className="pl-2 input_forms" 
                                /> Male
                            </label>

                            <label> 
                                <Field 
                                name="sex" type="radio"
                                value="Female"
                                className="pl-2 input_forms" 
                                /> Female
                            </label>
                            <ErrorMessage 
                                name="sex" 
                                className="d-block invalid-feedback" 
                                component="span" />
                            <br /><br />
                            


                            <Field 
                            name="description" as="textarea" 
                            className="pl-2 input_forms" 
                            placeholder="Description..." />
                            <ErrorMessage 
                            name="description" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />
                            
                            
                            <div id="days-group">Days Available</div>
                            <div role={"group"} aria-labelledby={"days-group"}>
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Monday, "/>
                                    Monday
                                </label>
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Tuesday, "/>
                                    Tuesday
                                </label>
                                <br />
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Wednesday, "/>
                                    Wednesday
                                </label>
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Thursday, "/>
                                    Thursday
                                </label>
                                <br />
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Friday, "/>
                                    Friday
                                </label>
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Saturday, "/>
                                    Saturday
                                </label>
                                <br />
                                <label className='p-3'>
                                    <Field type="checkbox" name="daysAvailable" value="Sunday, "/>
                                    Sunday
                                </label>
                            </div>
                            <br /><br />

                            <div id="time-group">Time Available</div>
                            <div role={"group"} aria-labelledby={"time-group"}>
                                <label className='p-3'>
                                    <Field type="checkbox" name="timeAvailable" value="8am-10am, "/>
                                    8am-10am
                                </label>
                                <label className='p-3'>
                                    <Field type="checkbox" name="timeAvailable" value="10am-12noon, "/>
                                    10am-12noon
                                </label>
                                <br />
                                <label className='p-3'>
                                    <Field type="checkbox" name="timeAvailable" value="12noon-2pm, "/>
                                    12noon-2pm
                                </label>
                                <label className='p-3'>
                                    <Field type="checkbox" name="timeAvailable" value="2pm-4pm, "/>
                                    2pm-4pm
                                </label>
                                <br />
                                <label className='p-3'>
                                    <Field type="checkbox" name="timeAvailable" value="4pm-6pm, "/>
                                    4pm-6pm
                                </label>
                                <label className='p-3'>
                                    <Field type="checkbox" name="timeAvailable" value="6pm-8pm(Online Only), "/>
                                    6pm-8pm (Online Only)
                                </label>
                            </div>
                            <br /><br />

                            {/* <Field 
                            name="daysAvailable" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Days Available..." />
                            <ErrorMessage 
                            name="daysAvailable" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            <Field 
                            name="timeAvailable" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Time Available..." />
                            <ErrorMessage 
                            name="timeAvailable" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br /> */}

                            <Field 
                            name="diplomas" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Diplomas..." />
                            <ErrorMessage 
                            name="diplomas" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            <Field 
                            name="schoolsTaught" type="text" 
                            className="pl-2 input_forms" 
                            placeholder="Schools Taught..." />
                            <ErrorMessage 
                            name="schoolsTaught" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />
                        
                        
                            <Field 
                            name="yearsExperience" 
                            type="number" 
                            className="mt-5 pl-2 input_forms" 
                            placeholder="Years of Experience..."
                            />
                            <ErrorMessage 
                            name="yearsExperience" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            
                            <label> 
                            Price Per Hour 
                            <Field 
                            name="pricePerHour" type="number"
                            className="pl-2 input_forms" 
                            /> 
                            </label>
                            <ErrorMessage 
                            name="pricePerHour" 
                            className="d-block invalid-feedback" 
                            component="span" />


                            
                            <h4>Platform Choice: </h4>
                            <Field name="platform" as="select">
                                <option value="">Choose...</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                                <option value="Both">Both</option>
                            </Field>
                            <br /><br />

                            
                            <Field 
                            name="picture" 
                            type="text" 
                            className="mt-5 pl-2 input_forms" 
                            placeholder="Picture..."
                            />
                            <ErrorMessage 
                            name="picture" 
                            className="d-block invalid-feedback" 
                            component="span" />
                            <br /><br />

                            {/* <h3>Register as: </h3>
                            <Field name="useAs" as="select">
                                <option value="">Choose...</option>
                                <option value="Admin">Admin</option>
                                <option value="Parent">Parent</option>
                                <option value="Tutor">Tutor</option>
                            </Field> */}
                            <br /><br />
                    

                        <input type="submit" value="Update" className="mt-4 p-2 px-3 submit_button text-primary"/>
                        <br /><br />
                    </Form>
                </Formik>

                    <br/>

                    <div><Link to="/tutor/my_profile" className="back_icon"><i className="far fa-arrow-alt-circle-left delete"></i> Back</Link></div>
                </div>
        </div>
    )
};

export default UpdateProfile;
