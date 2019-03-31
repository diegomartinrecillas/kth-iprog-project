import React from 'react';

interface Button {
    text: string;
    icon: string;
}
const StandardBtn = (button: Button) => {
    return (
        <button className="standard-btn"><i className={"fas fa-" + button.icon} />{button.text}</button>
    );
};

export default StandardBtn;
