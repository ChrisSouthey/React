import React from 'react';

const fontSizes = {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
};

export const Text = ({ size = 'medium', color = '#000', children }) => {
    const style = {
        fontSize: fontSizes[size.toLowerCase()] || fontSizes['medium'],
        color,
    };

    return <p style={style}>{children}</p>;
};