import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from '../TextError';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const SelectField = props => {
    const { Option } = Select;
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <h4 htmlFor={name}>{label}</h4>
            <Field as='select' name={name} {...rest}>
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>
                                {option.key}
                            </option>
                        );
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default SelectField;