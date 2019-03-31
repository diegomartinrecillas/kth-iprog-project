import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Forminformation from '../../components/forminformation/forminformation';

const Edit = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-4">
                    <Sidebar />
                </div>
                <div className="col-lg-8">
                    <Forminformation />
                </div>
            </div>
        </div>
    );
};

export default Edit;
