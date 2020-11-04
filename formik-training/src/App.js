import React from 'react';
import{ withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'antd/dist/antd.css';
import { Input, Checkbox, Radio } from 'antd';

const App = ({errors, touched, isSubmitting}) => {
    return (
        <Form>
            {/* Text */}
            <div>
                <h4>Email: </h4>
                { touched.email && errors.email && <h5 style={{color: 'red'}}>{errors.email}</h5> }
                <Field type='email' placeholder='Email' name='email' as={Input} />
            </div>

            {/* Password */}
            <div>
                <h4>Password: </h4>
                { touched.password && errors.password && <h5 style={{color: 'red'}}>{errors.password}</h5> }
                <Field type='password' placeholder='Password' name='password' as={Input} />
            </div>

            {/* Number */}
            <div>
                <h4>Number: </h4>
                <Field type='number' placeholder='Number' name='number' as={Input} />
            </div>
            
            {/* Radio */}
            <div>
                <h4>Gender: </h4>
                <Field type='radio' name='gender' value='male' children='Male' as={Radio} />
                <Field type='radio' name='gender' value='female' children='Female' as={Radio} />
            </div>

            {/* Check box */}
            <div>
                <h4>Fruit: </h4>
                <Field type='checkbox' name='fruits' value='Apple' children='Apple' as={Checkbox}/>
                <Field type='checkbox' name='fruits' value='Banana' children='Banana' as={Checkbox}/>
                <Field type='checkbox' name='fruits' value='Pear' children='Pear' as={Checkbox}/>
            </div>

            <button type='submit' disabled={isSubmitting}>Submit</button>
        </Form>
    );
}

export default withFormik({
    mapPropsToValues({email, password, number}) {
        return {
            email: email || '',
            password: password || '',
            number: number || null,
            fruits: [],
            gender: 'male',
            favorite: '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(9, 'Password must be 9 characters or longer.').required('Password is required'),
    }),
    handleSubmit(values, {setSubmitting}) {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
        }, 2000);
    },
})(App);