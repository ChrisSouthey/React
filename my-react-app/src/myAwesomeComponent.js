import React from 'react';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';

export const MyAwesomeComponent = () => {
    const handleButtonClick = () => {
        alert("This button does an alert!!! :D");
    };

    return (
        <Box size="med" background="#f0f0f0">
            <Text size="large" color="#000fff">Week 3 lab!!!! :D</Text>
            <Button color="#bf0000" onClick={handleButtonClick}>Click here for cool stuff</Button>
        </Box>
    );
};