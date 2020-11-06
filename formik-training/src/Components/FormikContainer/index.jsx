import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import 'antd/dist/antd.css';


const FormikContainer = props => {
    const checkboxOptions =[
        {key: 'Option1', value: 'cOption1'},
        {key: 'Option2', value: 'cOption2'},
        {key: 'Option3', value: 'cOption3'},
    ];
    const radioOptions =[
        {key: 'Option1', value: 'rOption1'},
        {key: 'Option2', value: 'rOption2'},
        {key: 'Option3', value: 'rOption3'},
    ]
    const dropdownOption = [
        {key: 'Select an option' , value: ''},
        {key: 'Option1' , value: 'option1'},
        {key: 'Option2' , value: 'option2'},
        {key: 'Option3' , value: 'option3'}
    ];
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
    });
    const onSubmit = values => {
        console.log(values);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl  
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                                placeholder='Email'
                            />
                            <FormikControl 
                                control='textarea'
                                label='Description'
                                name='description'
                                placeholder='Description'
                            />
                            <FormikControl 
                                control='select'
                                label='Pick one option'
                                name='selectOption'
                                options={dropdownOption}
                            />
                            <FormikControl 
                                control='radio'
                                label='Pick one option'
                                name='radioOption'
                                options={radioOptions}
                            />
                            <FormikControl 
                                control='checkbox'
                                label='Checkbox Topics'
                                name='checkboxOption'
                                options={checkboxOptions}
                            />
                            <br/>
                            <button type='submit'>submit</button>
                        </Form>
                    );
                }
            }
        </Formik>
    );
}

export default FormikContainer;