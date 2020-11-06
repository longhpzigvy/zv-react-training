import React from 'react';
import CheckboxGroupField from '../CheckboxGroupField';
import Input from '../Input';
import RadioButtonField from '../RadioButtonField';
import SelectField from '../SelectField';
import Textarea from '../Textarea';

const FormikControl = props => {
    const { control, ...rest } = props;
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <SelectField {...rest} />
        case 'radio':
            return <RadioButtonField {...rest} />
        case 'checkbox':
            return <CheckboxGroupField {...rest} />
        default:
            return null;
    }
}

export default FormikControl;