import React from 'react';

const Square = ({ className, style }) => {
    return (
        <svg className={className} style={style} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="9" height="9" fill="white" />
        </svg>
    );
};

export default Square;