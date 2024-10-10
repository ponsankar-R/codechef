import React, { useState } from 'react';
import './HomeForm.css';

function HomeForm({ setIsFormOpen }) {
  const [homeName, setHomeName] = useState('');
  const [homeSize, setHomeSize] = useState('');
  const [homePrice, setHomePrice] = useState('');
  const [homeLocation, setHomeLocation] = useState('');
  const [minPeriod, setMinPeriod] = useState('');
  const [maxPeriod, setMaxPeriod] = useState('');
  const [homes,setHomes] = useState([]);


 
    
  const handleFormClose = () => {
    setIsFormOpen(false);
  };
 
  const handleHomeFormSubmit = (event) => {
    event.preventDefault();
    setIsFormOpen(false);
    
    homes.push({ homeName, homeSize, homePrice, homeLocation, minPeriod, maxPeriod });
    localStorage.setItem('homes', JSON.stringify(homes));

  
  };

  return (
    <div className='HomeForm'>
      <button onClick={handleFormClose} className='closeButton'>X</button>
      <div className='homeformgreat'>Hello, Enter your Home details</div>
      <form onSubmit={handleHomeFormSubmit}>
        <input
          type="text"
          className='HomeNameinput'
          placeholder="Enter Your Home Name"
          value={homeName}
          onChange={(e) => setHomeName(e.target.value)}
          required
          minLength={1}
          maxLength={20}
        />
        <input
          type='text'
          className='HomeSizeinput'
          placeholder="Enter Your Home Size example: 5 rooms"
          value={homeSize}
          onChange={(e) => setHomeSize(e.target.value)}
          required
          minLength={1}
          maxLength={20}
        />
        <input
          type='text'
          className='HomePriceinput'
          placeholder="Enter Your Home Price Per Room example: ₹500"
          value={homePrice}
          onChange={(e) => setHomePrice(e.target.value)}
          required
          minLength={3}
          maxLength={20}
        />
        <input
          type='text'
          className='HomeLocationinput'
          placeholder="Enter Your Home Location example: Karur"
          value={homeLocation}
          onChange={(e) => setHomeLocation(e.target.value)}
          required
          minLength={4}
          maxLength={20}
        />
        <input
          type='text'
          className='HomeMinPeriodinput'
          placeholder="Enter Minimum Booking Period eg:1 day"
          value={minPeriod}
          onChange={(e) => setMinPeriod(e.target.value)}
          required
          minLength={4}
          maxLength={20}
        />
        <input
          type='text'
          className='HomeMaxPeriodinput'
          placeholder="Enter Maximum Booking Period eg:35days"
          value={maxPeriod}
          onChange={(e) => setMaxPeriod(e.target.value)}
          required
          minLength={4}
          maxLength={20}
        />
        <button type="submit"  className='homeFormSubmit'>Submit</button>
      </form>
    </div>
  );
}

export default HomeForm;