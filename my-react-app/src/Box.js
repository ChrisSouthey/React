import React from 'react';

const sizes = {
    s: '25%',
    sm: '25%',
    small: '25%',
    m: '50%',
    md: '50%',
    medium: '50%',
    l: '100%',
    lg: '100%',
    large: '100%',
};

export const Box = ({ size = 'medium', children, background = '#eee' }) => {
    const width = sizes[size.toLowerCase()] || sizes['medium'];

    const style = {
        width,
        background,
        padding: '1rem',
        margin: '1rem 0',
        border: '1px solid #ccc',
        borderRadius: '8px',
    };

    return <div style={style}>{children}</div>;
};