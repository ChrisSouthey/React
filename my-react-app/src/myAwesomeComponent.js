import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';

export const MyAwesomeComponent = () => {
    const handleButtonClick = () => {
        alert("This button does an alert!!! :D");
    };

    return (
        <Box size="large" background="#f0f0f0">
            <Text size="small" color="#ddd000">Week 3 lab!!!! :D</Text>
            <Button color="#000fff" onClick={handleButtonClick}>Click here for cool stuff</Button>
        </Box>
    );
};