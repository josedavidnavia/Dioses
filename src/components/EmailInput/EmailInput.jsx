import React, { useState } from 'react';
import Button from '../Button/Button';
import './EmailInput.css';
const EmailInput = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (email.includes('@')) {
            onSubmit(email);
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px', width: '300px' }}
            />
            <Button text="Start" onClick={handleSubmit} style={{ marginTop: '20px' }} />
        </div>
    );
};

export default EmailInput;
