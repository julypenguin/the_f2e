import React from 'react';

const Circle = ({ className, style }) => {
    return (
        <svg className={className} style={style} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.5" fill="white" />
        </svg>
    );
};

export default Circle;