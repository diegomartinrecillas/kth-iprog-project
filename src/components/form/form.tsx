import React from 'react';
import InputField from '../inputfield/Inputfield';
import StandardBtn from '../standardbtn/standardbtn';

const Form = () => {
    return (
        <div className="d-flex flex-row">
            <div className="spacing-h spacing-h--medium" />
            <div className="d-flex flex-column">
                <div className="d-flex flex-row">
                    <InputField name="Programme" type="text" />
                    <div className="spacing-h spacing-h--medium" />
                    <InputField name="Course" type="text" />
                </div>
                <div className="spacing spacing--medium" />
                <div className="d-flex flex-row">
                    <InputField name="Title" type="text" />
                    <div className="spacing-h spacing-h--medium" />
                    <InputField name="Author" type="text" />
                </div>
                <div className="spacing spacing--medium" />
                <div className="d-flex flex-row">
                    <InputField name="Price" type="number" />
                    <div className="spacing-h spacing-h--medium" />
                    <InputField name="New Price" type="number" />
                </div>
                <div className="spacing spacing--medium" />
                <div className="d-flex flex-row">
                    <InputField name="Release Year" type="number" />
                    <div className="spacing-h spacing-h--medium" />
                    <InputField name="Collect location" type="text" />
                </div>
                <div className="spacing spacing--medium" />
                <InputField name="Description" type="textarea" />
            </div>
            <div className="spacing-h spacing-h--medium" />
            <div className="d-flex flex-column justify-content-between">
                <InputField name="Personal description" type="textarea" />
                <StandardBtn text="Add Book" icon="plus" />
            </div>

        </div>
    );
};

export default Form;
