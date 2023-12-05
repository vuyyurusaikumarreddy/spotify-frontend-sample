import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from 'react-bootstrap/Dropdown';

const Playlist = () => {
  const [genreList, setGenreList] = useState([]);
  const [subGenreList, setSubGenreList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('default');
  const [selectedSubGenre, setSelectedSubGenre] = useState('default');
  const [playlistName, setPlaylistName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data from the external API
    // Data for Genres
    axios.get('http://localhost:8080/getGenres')
      .then(response => {
        setGenreList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
    // Data for Subgenres
    axios.get('http://localhost:8080/getSubGenres')
      .then(response => {
        setSubGenreList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  const handleDropdownClickGenre = (eventKey) => {
    setSelectedGenre(eventKey);
  };

  const handleDropdownClickSubGenre = (eventKey) => {
    setSelectedSubGenre(eventKey);
  };

  const handlePlaylistNameChange = event => {
    setPlaylistName(event.target.value);
    setError(''); // Clear the error when the user starts typing
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if (!playlistName.trim()) {
        // Display an error if the playlist name is empty or contains only spaces
        setError('Playlist name is required');
        return;
      }

      const uid = uuidv4();
      // Make the API call to create a playlist and perform any additional actions
      const response = await axios.post('http://localhost:8080/playlists/createPlaylist', {
        playlist_id: uid,
        genre: selectedGenre,
        subGenre: selectedSubGenre,
        playlist_name: playlistName,
      });

      // Process the response or perform additional actions if needed
      const responseData = response.data;
      console.log('API Response Data:', responseData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // const DropdownComponent = ({ options }) => {
  //   const [selectedOption, setSelectedOption] = useState('');
  
  //   const handleItemClick = (option) => {
  //     setSelectedOption(option);
  //   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Playlist Name Input Field */}
//         <label>
//           Playlist Name:
//           <input
//             type="text"
//             value={playlistName}
//             onChange={handlePlaylistNameChange}
//             style={{ width: '50%', padding: '4px', margin: '4px 0' }}
//           />
//         </label>
//         {/* Display error message */}
//         {error && <p style={{ color: 'red' }}>{error}</p>}



    
//   {/* function BasicExample() { */}
//     <Dropdown onSelect={handleDropdownClickGenre}>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//       {selectedGenre === 'default' ? 'Genre' : selectedGenre}
//       </Dropdown.Toggle>

//       <Dropdown.Menu style={{
//           maxHeight: '200px',
//           overflowY: 'auto',
//           position: 'fixed',
//           zIndex: 1000, // Adjust the z-index as needed
//         }}>
//         {genreList.map((item) => (
//           <Dropdown.Item key={item.id} eventKey={item.name} >
//             {item.name}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>

//     <Dropdown onSelect={handleDropdownClickSubGenre}>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//       {selectedSubGenre === 'default' ? 'SubGenre' : selectedSubGenre}
//       </Dropdown.Toggle>

//       <Dropdown.Menu style={{
//           maxHeight: '200px',
//           overflowY: 'auto',
//           position: 'fixed',
//           zIndex: 1000, // Adjust the z-index as needed
//         }}>
//         {subGenreList.map((item) => (
//           <Dropdown.Item key={item.id} eventKey={item.name} >
//             {item.name}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>



//         {/* Dropdown for Selecting Genre */}
//         {/* <label>
//           Genre:
//           <select value={selectedGenre} onChange={handleGenreChange} 
//           // style={{ width: '100%',fontSize : '1.5rem', backgroundColor : 'white' ,cursor:'pointer', padding: '0.675em 6em 0.675em 1em', border: '1px solid #caced1', borderRadius: '0.25rem', margin: '8px 0' }}
//           style={{appearance: 'none',
//           WebkitAppearance: 'none',
//           width: 'calc(100% - 1.5em)', // Adjusted width
//           fontSize: '1.15rem',
//           padding: '0.675em 1em', // Adjusted padding
//           backgroundColor: '#fff',
//           border: '1px solid #caced1',
//           borderRadius: '0.25rem',
//           color: '#000',
//           cursor: 'pointer',
//           overflow: 'hidden', // Optional: Handle overflow
//           textOverflow: 'ellipsis'}}
//           >
//             <option value="" disabled>Select a Genre</option>
//             {genreList.map(item => (
//               <option key={item.id} value={item.name}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </label> */}

//         {/* Dropdown for Selecting Sub Genre */}
//         {/* <label>
//           Sub Genre:
//           <select value={selectedSubGenre} onChange={handleSubGenreChange}style={{ width: '100%', padding: '8px', margin: '8px 0' }}>
//             <option value="" disabled>Select a Sub Genre</option>
//             {subGenreList.map(item => (
//               <option key={item.id} value={item.name}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </label> */}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             padding: '10px 15px',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             width: '100%',
//             margin: '8px 0',
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

const renderDropdown = (list, selected, handleDropdownClick, placeholder) => (
  <Dropdown onSelect={handleDropdownClick}>
    <Dropdown.Toggle variant="success" id={`dropdown-${placeholder}`}>
      {selected === 'default' ? placeholder : selected}
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
      {list.map((item) => (
        <Dropdown.Item key={item.id} eventKey={item.name}>
          {item.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

return (
  <div>
    <form onSubmit={handleSubmit}>
      {/* ... (playlist name input) */}
      <label>
        PlaylistName : //
      <input
        type="text"
        value={playlistName}
        onChange={handlePlaylistNameChange}
        style={{
          width: '50%',
          padding: '8px',
          margin: '8px 0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }}
      />
        </label>
        {/* Display error message */}
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {renderDropdown(genreList, selectedGenre, handleDropdownClickGenre, 'Genre')}
      {renderDropdown(subGenreList, selectedSubGenre, handleDropdownClickSubGenre, 'SubGenre')}

      {/* ... (submit button) */}
      <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '5px 5px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            margin: '8px 0',
          }}
        >
          Submit
        </button>
    </form>
  </div>
);
};
export default Playlist;
