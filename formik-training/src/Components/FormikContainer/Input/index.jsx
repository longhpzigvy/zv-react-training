import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../TextError';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const InputField = props => {
    const { label, name, ...rest } = props
    
    return (
        <div>
            <h4 htmlFor={name}>{label}</h4>
            <Field name={name}>
                {
                    ({field}) => {
                        return (
                            <Input {...field} {...rest} />
                        );
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );  
}

export default InputField;