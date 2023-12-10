// // import React, { useState, useEffect } from 'react';
// // import { Modal, Button, Form } from 'react-bootstrap';
// // import axios from 'axios';
// // import Select from 'react-select';
// // import { useNavigate } from 'react-router-dom';

// // const InsertTrackForm = ({ show, handleClose, handleAddNewAlbumClick }) => {
// //   const [trackName, setTrackName] = useState('');
// //   const [artist, setArtist] = useState('');
// //   const [albums, setAlbums] = useState([]);
// //   const [selectedAlbum, setSelectedAlbum] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [showInsertForm, setShowInsertForm] = useState(false);
// //   const [filteredData, setFilteredData] = useState([]);

// //   const Filter = (event) => {
// //     const searchTerm = event.target.value.toLowerCase();
// //     setSearchTerm(searchTerm);
// //     setFilteredData(albums.filter(track => track.name.toLowerCase().includes(searchTerm) || track.artist.toLowerCase().includes(searchTerm)));
// //   };

// //   const fetchAlbums = async () => {
// //     try {
// //       setLoading(true);
// //       let url;

// //       // Check if the artist field is provided
// //       if (artist.trim().length===0) {
// //         url = `http://localhost:8080/albums/artist?artist_name=${artist}`;
// //       } else {
// //         // If artist field is not given, fetch all albums
// //         url = 'http://localhost:8080/albums/getAlbums';
// //       }

// //       const response = await axios.get(url);
// //       const albumOptions = response.data.map(album => ({ label: album, value: album }));
// //       albumOptions.push({ label: 'Add New Album', value: 'add-new-album' });
// //       setAlbums(albumOptions);
// //     } catch (error) {
// //       console.error('Error fetching data from API:', error);
// //       setError('An error occurred while fetching data.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (artist.trim() !== '') {
// //       fetchAlbums();
// //     }
// //   }, [artist]);

// //   const handleSelectChange = selectedOption => {
// //     if (selectedOption && selectedOption.value === 'add-new-album') {
// //       // Use React Router to navigate to the "add new album" page
// //       navigate('/albums');
// //     } else {
// //       setSelectedAlbum(selectedOption);
// //     }
// //   };

// //   const handleSave = () => {
// //     console.log('Saving track details:', { trackName, artist, selectedAlbum });
// //     handleClose();
// //   };

// //   return (
// //     <Modal show={show} onHide={handleClose}>
// //       <Modal.Header closeButton>
// //         <Modal.Title>Insert New Track</Modal.Title>
// //       </Modal.Header>
// //       {error && <p className="error-message">{error}</p>}
// //       <Modal.Body>
// //         <Form>
// //           <Form.Group controlId="formTrackName">
// //             <Form.Label>Track Name</Form.Label>
// //             <Form.Control
// //               type="text"
// //               placeholder="Enter track name"
// //               value={trackName}
// //               onChange={e => setTrackName(e.target.value)}
// //             />
// //           </Form.Group>
// //           <Form.Group controlId="formArtist">
// //             <Form.Label>Artist</Form.Label>
// //             <Form.Control
// //               type="text"
// //               placeholder="Enter artist"
// //               value={artist}
// //               onChange={e => setArtist(e.target.value)}
// //             />
// //           </Form.Group>
// //           <Form.Group controlId="formAlbum">
// //             <Form.Label>Album</Form.Label>
// //             <Select options={albums} value={selectedAlbum} onChange={handleSelectChange} />
// //           </Form.Group>
// //         </Form>
// //       </Modal.Body>
// //       <Modal.Footer>
// //         <Button variant="secondary" onClick={handleClose}>
// //           Close
// //         </Button>
// //         <Button variant="primary" onClick={handleSave}>
// //           Save Track
// //         </Button>
// //       </Modal.Footer>
// //     </Modal>
// //   );
// // };

// // export default InsertTrackForm;


// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import Select from 'react-select';
// import { useNavigate } from 'react-router-dom';

// const InsertTrackForm = ({ show, handleClose, handleAddNewAlbumClick }) => {
//   const [trackName, setTrackName] = useState('');
//   const [artist, setArtist] = useState('');
//   const [albums, setAlbums] = useState([]);
//   const [selectedAlbum, setSelectedAlbum] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   const Filter = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//     setFilteredData(albums.filter(album => album.name.toLowerCase().includes(searchTerm)));
//   };

//   const fetchAlbums = async () => {
//     try {
//       setLoading(true);
//       let url;

//       // Check if the artist field is provided
//       if (artist.trim().length === 0) {
//         url = `http://localhost:8080/albums/artist?artist_name=${artist}`;
//       } else {
//         // If the artist field is not given, fetch all albums
//         url = 'http://localhost:8080/albums/getAlbums';
//       }

//       const response = await axios.get(url);
//       const albumOptions = response.data.map(album => ({ label: album.name, value: album.id, artist: album.artist }));
//       albumOptions.push({ label: 'Add New Album', value: 'add-new-album' });
//       setAlbums(albumOptions);
//       setFilteredData(albumOptions);
//     } catch (error) {
//       console.error('Error fetching data from API:', error);
//       setError('An error occurred while fetching data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (artist.trim() !== '') {
//       fetchAlbums();
//     }
//   }, [artist]);

//   const handleSelectChange = selectedOption => {
//     if (selectedOption && selectedOption.value === 'add-new-album') {
//       // Use React Router to navigate to the "add new album" page
//       navigate('/albums');
//     } else {
//       setSelectedAlbum(selectedOption);
//     }
//   };

//   const handleSave = () => {
//     console.log('Saving track details:', { trackName, artist, selectedAlbum });
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Insert New Track</Modal.Title>
//       </Modal.Header>
//       {error && <p className="error-message">{error}</p>}
//       <Modal.Body>
//         <Form>
//           <Form.Group controlId="formTrackName">
//             <Form.Label>Track Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter track name"
//               value={trackName}
//               onChange={(e) => setTrackName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="formArtist">
//             <Form.Label>Artist</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter artist"
//               value={artist}
//               onChange={(e) => setArtist(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group controlId="formAlbum">
//             <Form.Label>Album</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Search or Select Album"
//               value={searchTerm}
//               onChange={Filter}
//             />
//             <Select options={filteredData} value={selectedAlbum} onChange={handleSelectChange} />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSave}>
//           Save Track
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default InsertTrackForm;


import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const InsertTrackForm = ({ show, handleClose, handleAddNewAlbumClick }) => {
  const [trackName, setTrackName] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState();
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // const Filter = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   setSearchTerm(searchTerm);
  //   setFilteredData(albums.filter(album => album.name.toLowerCase().includes(searchTerm)));
  // };

  // const Filter = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   setSearchTerm(searchTerm);
  //   setFilteredData(
  //     albums.filter((album) => 
  //       album && album.name && album.name.toLowerCase().includes(searchTerm)
  //     )
  //   );
  // };

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      let url;

      // Check if the artist field is provided
      // if (artist.trim().length === 0) {
      //   url = `http://localhost:8080/albums/artist?artist_name=${artist}`;
      // } else {
        // If the artist field is not given, fetch all albums
        url = 'http://localhost:8080/albums/getAlbums';
      // }

      const response = await axios.get(url);
      const albumOptions = response.data;
      
      // Filter the data based on the searchTerm
      // setFilteredData(albumOptions.filter(album => album.name.toLowerCase().includes(searchTerm)));
      // setAlbums(albumOptions);
    } catch (error) {
      console.error('Error fetching data from API:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (artist.trim() !== '') {
      fetchAlbums();
    }
  }, [artist]);

  const handleSelectChange = selectedOption => {
    if (selectedOption && selectedOption.value === 'add-new-album') {
      // Use React Router to navigate to the "add new album" page
      navigate('/albums');
    } else {
      setSelectedAlbum(selectedOption);
    }
  };

  const handleSave = () => {
    console.log('Saving track details:', { trackName, artist, selectedAlbum });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Insert New Track</Modal.Title>
      </Modal.Header>
      {error && <p className="error-message">{error}</p>}
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTrackName">
            <Form.Label>Track Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter track name"
              value={trackName}
              onChange={(e) => setTrackName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formArtist">
            <Form.Label>Artist</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAlbum">
            <Form.Label>Album</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Album"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Track
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InsertTrackForm;
