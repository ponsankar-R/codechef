import React, { useState, useEffect } from 'react';
import './Owner.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import HomeForm from './HomeForm.js';

function Owner() {
    const [isFormOpen, setIsFormOpen] = useState(true);
    const [homes, setHomes] = useState([]);

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    useEffect(() => {
        const fetchHomesFromLocalStorage = () => {
            const storedHomes = JSON.parse(localStorage.getItem('homes')) || [];
            console.log(storedHomes)
            setHomes(storedHomes);
        };

        fetchHomesFromLocalStorage();

        const handleStorageChange = () => {
            fetchHomesFromLocalStorage();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className='ownerPage'>
            <div className='houseownerwelecom'>You are Registered as House Owner. Welcome!</div>
            <button className='addHomebutton' onClick={handleOpenForm}>
                <IoIosAddCircleOutline />
            </button>
            {isFormOpen && <HomeForm className="homeformnav" setIsFormOpen={setIsFormOpen} />}
            <div className='homesList'>
                {homes.map((home, index) => (
                    <div key={index} className='homeItem'>
                        {home}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Owner;