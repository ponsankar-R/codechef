import React from 'react'
import './RegisterForm.css'
import { useNavigate } from 'react-router-dom';
function RegisterForm({type}) {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(type==='owner'){
            navigate('/Owner')
        }
        else if(type==="customer"){
            navigate('/Customer')
        }
        
    }
  return (
    
    <div className='RegisterForm'>
        <div className='RegisterFormBox'>
            <h1 className='registerboxname'>Register Form</h1>
            <input className='username' type='text' placeholder=' Enter your email / phone Number ' />
            <input  className='password' type='password' placeholder='Enter your password ' />
            <button type='submit' onClick={handleSubmit} className='RegisterButton'>Register</button>
            
            
        </div>
    </div>
  )
}

export default RegisterForm