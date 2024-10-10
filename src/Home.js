import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
  
    if (username.trim() && password.trim()) {
      // Clear the input fields
      setUsername('');
      setPassword('');
      // Navigate to Page2
      navigate('/Page2');
      const userData = {
        username: username,
        password: password
      };
    
      axios.post('http://localhost:3009/register', userData)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error registering user:', error);
        });
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      
     </div>
  );
}

export default Home;
