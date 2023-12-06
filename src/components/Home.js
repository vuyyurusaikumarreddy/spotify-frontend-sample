import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [tracksList, setTracksList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    axios.get('http://localhost:8080/tracks')
      .then(response => {
        setTracksList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
},[]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Search App</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {/* {tracksList.map((item) => (
          <li key={`${item.field1}-${item.field2}`}>{item.name}</li>
        ))} */}
        {tracksList.map((item) => (
          item.id ? (
      <li key={item.id}>{item.name}</li>
    ) : null
  ))}
      </ul>
    </div>
  );
};

export default Home;
