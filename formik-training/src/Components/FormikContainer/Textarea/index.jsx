import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const Textarea = props => {
    const { TextArea } = Input;
    const { label, name, ...rest } = props;
    return (
        <div>
            <h4 htmlFor={name}>{label}</h4>
            <Field name={name}>
                {
                    ({field}) => {
                        return (
                            <TextArea {...rest} id={name} {...field} /> 
                        );
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;