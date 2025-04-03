import React, { useState } from 'react';


export const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

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
            <input type="email" value={email} onChange={handleEmailChange} />
            <button onClick={clearForm} className="button">
                Clear Form
            </button>
            
        </div>
    );
};