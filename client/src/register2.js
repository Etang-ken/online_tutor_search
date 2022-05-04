import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegisterForm from './newForm/registerForm';

const RegisterUser = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onSubmit = regUser => {
        axios.post(
            "http://localhost:5000/record/add", regUser
        )
        .then(res => {
            if (res.status === 200){
                alert('User successfully registered')
            } else {
                Promise.reject();
            }
        }).catch(err => alert('Something went wrong'))
    }

    return (
        <RegisterForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Register
            </RegisterForm>
    )

}

export default RegisterUser;