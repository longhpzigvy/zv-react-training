import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

const RadioButtonField = props => {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <h4>{label}</h4>
            <Field as={Radio.Group} name={name} {...rest}>
                {
                        options.map((option, index) => {
                            return (
                                <Radio key={index} value={option.value} id={option.key}>
                                    {option.key}
                                </Radio>
                            );
                        })
                    
                }
            </Field>
            <ErrorMessage name={name}  component={TextError} />
        </div>
    )
}

export default RadioButtonField;