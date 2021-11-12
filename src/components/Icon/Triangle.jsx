import React from 'react';

const Triangle = ({ className, style }) => {
    return (
        <svg className={className} style={style} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0.470581L0.5 9.52941H11.5L6 0.470581Z" fill="white" />
        </svg>
    );
};

export default Triangle;