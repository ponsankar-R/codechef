import React,{useState} from 'react'
import './Register.css'
import RegisterForm from './RegisterForm.js';
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Register() {
    const [RegisterNav,setRegisterNav] = useState('false');
    const handleOwnerRegister=()=>{
        setRegisterNav("ownerLogin")
    }
    const handleCustomerRegister=()=>{
        setRegisterNav("customerLogin")
    } 
    

  return (
    <div >
        <div className='Register'>
            <p className='welcomenote'>
                Welcome to the Guest Booking application if you need to give your home to rent then register as a owner or if you want to book a home then register as a customer 
                
            </p>
                <button onClick={handleOwnerRegister} className='ownerRegister'><AiOutlineHome />Register as  Owner </button>
                <button onClick={handleCustomerRegister} className='customerRegister'><CgProfile />Register as  Customer</button>
                {RegisterNav==='ownerLogin'? <RegisterForm type="owner"/>:RegisterNav==="customerLogin" ? <RegisterForm type="customer"/> :<></>}


        </div>
    </div>
  )
}

export default Register