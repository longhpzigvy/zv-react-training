import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

const CheckboxGroupField = props => {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <h4>{label}</h4>
            <Field name={name}>
                {
                    ({field}) => {
                        return (
                            options.map((option, index) => {
                                return (
                                    <React.Fragment key={index}>
                                    <input
                                        {...field} 
                                        type='checkbox'
                                        value={option.value}
                                        id={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                    </React.Fragment>
                                );
                            })
                        );
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
}

export default CheckboxGroupField;