import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup(){
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setTimeout(() => {
        navigate('/welcome');
      }, 2000);
    };
  
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>Name:</div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <div>Email:</div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}


export default Signup;