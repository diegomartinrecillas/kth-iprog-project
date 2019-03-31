import React from 'react';
import Searchbar from '../searchbar/Searchbar';
import Form from '../form/form';

import styles from './Forminformation.module.scss';

const Forminformation = () => {
    return (
        <div className="editbook-view">
            <div className="container">
                <div className="spacing" />
                <Searchbar />
                <div className="spacing spacing--large" />
                <div className="text-label text-label--large">EDIT BOOK</div>
            </div>
            <div className="container">
                <div className="spacing spacing--medium" />
                <div className={styles.form}>
                    <div className="d-flex flex-row">
                        <div className={styles.cover}></div>
                        <div className="spacing-h spacing-h--large" />
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forminformation;
