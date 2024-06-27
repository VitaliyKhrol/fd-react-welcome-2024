
import styles from "./SignUp.module.css";
import React, { Component } from 'react';
import { SCHEMA } from "../../schemas";
import { Formik,Form,Field } from "formik";


function SignUpForm(props) {

    const formikSubmit =(data, formikBag) =>{
        console.log(data,formikBag)
        formikBag.resetForm();
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        pass: ''
    }


    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={formikSubmit}
        >
            {(formikProps) => {
                return (
                    <Form className={styles.form}
                    >
                        <Field
                            name="firstName"
                            placeholder="firstName"
                        />
                        <Field
                            name="lastName"
                            placeholder="lastName"
                        />
                        <Field
                            name="email"
                            placeholder="email"
                        />
                        <Field
                            name="pass"
                            placeholder="password"
                        />
                        <button>Send</button>

                    </Form>
                )

            }}
        </Formik>

    );

}

export default SignUpForm;