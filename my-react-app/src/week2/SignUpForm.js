import React, { useState } from 'react';

export const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+$/;

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);

        if (!value) {
            setErrors((prev) => ({ ...prev, firstName: "First name is required." }));
        } else if (!nameRegex.test(value)) {
            setErrors((prev) => ({ ...prev, firstName: "First name must contain only letters." }));
        } else {
            setErrors((prev) => ({ ...prev, firstName: "" }));
        }
    };

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);

        if (!value) {
            setErrors((prev) => ({ ...prev, lastName: "Last name is required." }));
        } else if (!nameRegex.test(value)) {
            setErrors((prev) => ({ ...prev, lastName: "Last name must contain only letters." }));
        } else {
            setErrors((prev) => ({ ...prev, lastName: "" }));
        }
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (!value) {
            setErrors((prev) => ({ ...prev, email: "Email is required." }));
        } else if (!emailRegex.test(value)) {
            setErrors((prev) => ({ ...prev, email: "Invalid email format." }));
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setErrors({});
    };

    const isFormValid = Object.values(errors).every(error => error === '');

    const handleSubmit = () => {
        if (isFormValid) {
            clearForm();
            setShowForm(false);
        }
    };

    return (
        <div className="container">
            {showForm && (
                <>
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        required
                        onChange={handleEmailChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <button onClick={clearForm} className="button">
                        Clear Form
                    </button>

                    <button 
                        onClick={handleSubmit} 
                        className="button" 
                        disabled={!isFormValid}
                    >
                        Submit
                    </button>
                </>
            )}
        </div>
    );
};
