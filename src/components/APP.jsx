import React from 'react';
import Main from './Main';
import '../styl/styles.css'

const APP = ({ history }) => {
    return (
        <div>
            <Main history={history} />
        </div>
    );
};

export default APP;