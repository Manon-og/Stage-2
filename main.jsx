import React, { useState } from 'react';
import axios from 'axios';

function Main() {
  const [favorites, setFavorites] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/', { favorites })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setFavorites(''); 
  };

  const language = (event) => {
    setFavorites(event.target.value);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={favorites}
          onChange={language}
          placeholder="Ur fav language"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
  }

export default Main;
