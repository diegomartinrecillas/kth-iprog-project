import React from 'react';
import styles from './Inputfield.module.scss';

interface Field {
    name: string;
    type: string;
}

const InputField = (field: Field) => {

    return (
        <div className={"d-flex flex-column " + styles['input-field']}>
            <label htmlFor={field.name} className="input-label">{field.name}</label>
            {field.type === 'dropdown' ? '' : null}
            {field.type === 'text' ? <input className="input" type="text" name={field.name} placeholder={field.name} /> : null}
            {field.type === 'textarea' ? <textarea className="input" name={field.name} placeholder={field.name} /> : null}
            {field.type === 'number' ? <input className="input" type="number" name={field.name} placeholder={field.name} /> : null}

        </div>
    );
};

export default InputField;
