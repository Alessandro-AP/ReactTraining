import React, { Component } from "react";
import { Formik } from "formik";
import {Button, Input, Select, Tag} from "antd";
import '../../css/AddStudentForm.css'

const { Option } = Select;

class AddStudentForm extends Component {
    render(){
        return(
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', gender: 'male', }}
              validate={values => {
                const errors = {};
                //Check Values
                if (!values.email) {
                  errors.email = 'Email Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if(!values.gender) {
                    errors.gender = 'Gender Required';
                }
                if(!values.firstName) {
                    errors.firstName = 'First Name Required';
                }
                if(!values.lastName) {
                    errors.lastName = 'Last Name Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                submitForm,
                isSubmitting,
                isValid
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    className="input_addStudent"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    placeholder='First Name'
                  />
                  {errors.firstName && touched.firstName && <Tag className="error_tag">{errors.firstName}</Tag>}
                  <Input
                    className="input_addStudent"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    placeholder='Last Name'
                  />
                  {errors.lastName && touched.lastName && <Tag className="error_tag">{errors.lastName}</Tag>}
                  <Input
                    className="input_addStudent"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='Email'
                  />
                  {errors.email && touched.email && <Tag className="error_tag">{errors.email}</Tag>}
                  <Select name="gender" className="input_addStudent" placeholder='Please select a gender' style={{ width: 300 }}  onChange={handleChange} >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                  {errors.gender && touched.gender && <Tag className="error_tag">{errors.gender}</Tag>}
                  <Button type="submit" onClick={() => submitForm()} disabled={isSubmitting | (touched && !isValid)}>
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
        );
    }
}

export default AddStudentForm;