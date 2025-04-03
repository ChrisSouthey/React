import React, { useState } from 'react';


export const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    const emailError = "";

    const handleEmailChange = (event) => {

        setEmail(event.target.value);
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    };



    return (
        <div className="container">
            <label className="form-label">First Name</label>
            <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <label className="form-label">Last Name</label>
            <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <label className="form-label">Email</label>
            <input type="email" value={email} required requiredError="Please enter an email." validations={{matchRegexp:emailRegex}} validationErrors={{matchRegexp:'Enter a valid email.'}} onChange={handleEmailChange} />
            <button onClick={clearForm} className="button">
                Clear Form
            </button>
            
        </div>
    );
};