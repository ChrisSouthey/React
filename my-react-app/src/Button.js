import React from 'react';

export const Button = ({ color = '#007bff', onClick, children }) => {
    const style = {
        backgroundColor: color,
        border: 'none',
        padding: '0.5rem 1rem',
        color: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
    };

    return <button style={style} onClick={onClick}>{children}</button>;
};