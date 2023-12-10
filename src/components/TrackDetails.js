// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useParams } from 'react-router-dom';
// // // // // // import { Container, ListGroup, Spinner, Alert, Button } from 'react-bootstrap';
// // // // // // import axios from 'axios';

// // // // // // const TrackDetails = () => {
// // // // // //   const { trackName } = useParams();
// // // // // //   const [tracksDetails, setTracksDetails] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   // const [tr, setTr] = useState('');

// // // // // //   useEffect(() => {
// // // // // //     const fetchData = async () => {
// // // // // //       try {
// // // // // //         setLoading(true);
// // // // // //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // // // // //         setTracksDetails(response.data);
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching data from API:', error);
// // // // // //         setError('An error occurred while fetching data.');
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchData();
// // // // // //   }, [trackName]);

// // // // // //   // const formatDate = (dateString) => {
// // // // // //   //   return dateString ? new Date(dateString).toLocaleDateString() : 'Release Date: Unknown';
// // // // // //   // };

// // // // // //   const handleInsertToPlaylist = () => {

// // // // // //   }
  

// // // // // //   return (
// // // // // //     <Container>
// // // // // //       <h2 className="mt-4">{trackName} Details</h2>

// // // // // //       {loading && <Spinner animation="border" variant="primary" />}
// // // // // //       {error && <Alert variant="danger">{error}</Alert>}

// // // // // //       <ListGroup className="mt-3">
// // // // // //         {tracksDetails.map((track, index) => (
// // // // // //           <ListGroup.Item key={index} className="bg-info text-white" >
// // // // // //             <h3>Track Name: {track.name}</h3>
// // // // // //             <p>Artist: {track.artist}</p>
// // // // // //             <p>Name: {track.name}</p>
// // // // // //             <p>Popularity: {track.popularity}</p>
// // // // // //             <p>Album:</p>
            
// // // // // //             <ul>
// // // // // //               <li>Title: {track.album_id.name}</li>
// // // // // //               <li>Release Date: {track.album_id.releaseDate.toString()}</li>
// // // // // //               {/* Add more album details as needed */}
// // // // // //             </ul>
// // // // // //             <p>Tempo: {track.tempo}</p>
// // // // // //             <Button className='mt-3' onClick={handleInsertToPlaylist}>
// // // // // //               Insert to Playlist
// // // // // //             </Button>
// // // // // //             {/* Add more details as needed */}
// // // // // //           </ListGroup.Item>
// // // // // //         ))}
// // // // // //       </ListGroup>
// // // // // //     </Container>
// // // // // //   );
// // // // // // };

// // // // // // export default TrackDetails;



// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useParams, useNavigate } from 'react-router-dom';
// // // // // import { Container, ListGroup, Spinner, Alert, Button } from 'react-bootstrap';
// // // // // import axios from 'axios';

// // // // // const TrackDetails = () => {
// // // // //   const { trackName } = useParams();
// // // // //   const [tracksDetails, setTracksDetails] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // // // //         setTracksDetails(response.data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching data from API:', error);
// // // // //         setError('An error occurred while fetching data.');
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchData();
// // // // //   }, [trackName]);

// // // // //   const handleInsertToPlaylist = () => {

// // // // //     navigate('/');
// // // // //   };

// // // // //   return (
// // // // //     <Container>
// // // // //       <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
// // // // //         {trackName} Details
// // // // //       </h2>

// // // // //       {loading && <Spinner animation="border" variant="primary" />}
// // // // //       {error && <Alert variant="danger">{error}</Alert>}

// // // // //       <ListGroup className="mt-3">
// // // // //         {tracksDetails.map((track, index) => (
// // // // //           <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>
// // // // //             <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Track Name: {track.name}</h3>
// // // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Artist: {track.artist}</p>
// // // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Name: {track.name}</p>
// // // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Popularity: {track.popularity}</p>
// // // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Album:</p>

// // // // //             <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
// // // // //               <li style={{ marginBottom: '5px' }}>Title: {track.album_id.name}</li>
// // // // //               <li style={{ marginBottom: '5px' }}>Release Date: {track.album_id.releaseDate.toString()}</li>
// // // // //             </ul>
// // // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Tempo: {track.tempo}</p>
// // // // //             <Button
// // // // //               className="mt-3"
// // // // //               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
// // // // //               onClick={handleInsertToPlaylist}
// // // // //             >
// // // // //               Insert to Playlist
// // // // //             </Button>
// // // // //           </ListGroup.Item>
// // // // //         ))}
// // // // //       </ListGroup>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default TrackDetails;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, useNavigate } from 'react-router-dom';
// // // // import { Container, ListGroup, Spinner, Alert, Button, Modal, Form } from 'react-bootstrap';
// // // // import axios from 'axios';

// // // // const TrackDetails = () => {
// // // //   const { trackName } = useParams();
// // // //   const [tracksDetails, setTracksDetails] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // // //         setTracksDetails(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching data from API:', error);
// // // //         setError('An error occurred while fetching data.');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, [trackName]);

// // // //   const handleInsertToPlaylist = () => {
// // // //     setShowModal(true);
// // // //   };

// // // //   const handlePlaylistSelect = (playlist) => {
// // // //     setSelectedPlaylist(playlist);
// // // //     setShowModal(false);
// // // //     // Perform the logic for inserting the track into the selected playlist
// // // //     // ...
// // // //   };

// // // //   const handleAddNewPlaylist = () => {
// // // //     setShowModal(false);
// // // //     // Navigate to the page for creating a new playlist
// // // //     navigate('/create-playlist');
// // // //   };

// // // //   return (
// // // //     <Container>
// // // //       <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
// // // //         {trackName} Details
// // // //       </h2>

// // // //       {loading && <Spinner animation="border" variant="primary" />}
// // // //       {error && <Alert variant="danger">{error}</Alert>}

// // // //       <ListGroup className="mt-3">
// // // //         {tracksDetails.map((track, index) => (
// // // //           <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>
// // // //             {/* ... Track details as before ... */}
// // // //             <Button
// // // //               className="mt-3"
// // // //               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
// // // //               onClick={handleInsertToPlaylist}
// // // //             >
// // // //               Insert to Playlist
// // // //             </Button>
// // // //           </ListGroup.Item>
// // // //         ))}
// // // //       </ListGroup>

// // // //       {/* Playlist Selection Modal */}
// // // //       <Modal show={showModal} onHide={() => setShowModal(false)}>
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>Select Playlist</Modal.Title>
// // // //         </Modal.Header>
// // // //         <Modal.Body>
// // // //           <Form>
// // // //             {/* List of available playlists */}
// // // //             <Form.Group controlId="playlistSelect">
// // // //               <Form.Label>Select a playlist:</Form.Label>
// // // //               <Form.Control as="select" onChange={(e) => handlePlaylistSelect(e.target.value)}>
// // // //                 <option value="">-- Select Playlist --</option>
// // // //                 {/* Dynamically render playlist options here based on your data */}
// // // //                 <option value="playlist1">Playlist 1</option>
// // // //                 <option value="playlist2">Playlist 2</option>
// // // //               </Form.Control>
// // // //             </Form.Group>
// // // //             <hr />
// // // //             <Button variant="primary" onClick={handleAddNewPlaylist}>
// // // //               Add New Playlist
// // // //             </Button>
// // // //           </Form>
// // // //         </Modal.Body>
// // // //       </Modal>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default TrackDetails;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, useNavigate } from 'react-router-dom';
// // // // import { Container, ListGroup, Spinner, Alert, Button, Modal, Form } from 'react-bootstrap';
// // // // import axios from 'axios';

// // // // const TrackDetails = () => {
// // // //   const { trackName } = useParams();
// // // //   const [tracksDetails, setTracksDetails] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // // //         setTracksDetails(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching data from API:', error);
// // // //         setError('An error occurred while fetching data.');
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, [trackName]);

// // // //   const handleInsertToPlaylist = () => {
// // // //     setShowModal(true);
// // // //   };

// // // //   const handlePlaylistSelect = (playlist) => {
// // // //     setSelectedPlaylist(playlist);
// // // //     setShowModal(false);
// // // //     // Perform the logic for inserting the track into the selected playlist
// // // //     // ...
// // // //   };

// // // //   const handleAddNewPlaylist = () => {
// // // //     setShowModal(false);
// // // //     // Navigate to the page for creating a new playlist
// // // //     navigate('/create-playlist');
// // // //   };

// // // //   return (
// // // //     <Container>
// // // //       <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
// // // //         {trackName} Details
// // // //       </h2>

// // // //       {loading && <Spinner animation="border" variant="primary" />}
// // // //       {error && <Alert variant="danger">{error}</Alert>}

// // // //       <ListGroup className="mt-3">
// // // //         {tracksDetails.map((track, index) => (
// // // //           <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>
// // // //             <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Track Name: {track.name}</h3>
// // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Artist: {track.artist}</p>
// // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Name: {track.name}</p>
// // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Popularity: {track.popularity}</p>
// // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Album:</p>

// // // //             <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
// // // //               <li style={{ marginBottom: '5px' }}>Title: {track.album_id.name}</li>
// // // //               <li style={{ marginBottom: '5px' }}>Release Date: {track.album_id.releaseDate.toString()}</li>
// // // //             </ul>
// // // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Tempo: {track.tempo}</p>
// // // //             <Button
// // // //               className="mt-3"
// // // //               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
// // // //               onClick={handleInsertToPlaylist}
// // // //             >
// // // //               Insert to Playlist
// // // //             </Button>
// // // //           </ListGroup.Item>
// // // //         ))}
// // // //       </ListGroup>

// // // //       {/* Playlist Selection Modal */}
// // // //       <Modal show={showModal} onHide={() => setShowModal(false)}>
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>Select Playlist</Modal.Title>
// // // //         </Modal.Header>
// // // //         <Modal.Body>
// // // //           <Form>
// // // //             {/* List of available playlists */}
// // // //             <Form.Group controlId="playlistSelect">
// // // //               <Form.Label>Select a playlist:</Form.Label>
// // // //               <Form.Control as="select" onChange={(e) => handlePlaylistSelect(e.target.value)}>
// // // //                 <option value="">-- Select Playlist --</option>
// // // //                 {/* Dynamically render playlist options here based on your data */}
// // // //                 <option value="playlist1">Playlist 1</option>
// // // //                 <option value="playlist2">Playlist 2</option>
// // // //               </Form.Control>
// // // //             </Form.Group>
// // // //             <hr />
// // // //             <Button variant="primary" onClick={handleAddNewPlaylist}>
// // // //               Add New Playlist
// // // //             </Button>
// // // //           </Form>
// // // //         </Modal.Body>
// // // //       </Modal>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default TrackDetails;


// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import { Container, ListGroup, Spinner, Alert, Button, Modal, Form } from 'react-bootstrap';
// // // import axios from 'axios';

// // // const TrackDetails = () => {
// // //   const { trackName } = useParams();
// // //   const [tracksDetails, setTracksDetails] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [playlists, setPlaylists] = useState([]);
// // //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // //         setTracksDetails(response.data);

// // //         // Fetch playlists from the external API
// // //         const playlistsResponse = await axios.get('http://localhost:8080/playlists/getPlaylistNames');
// // //         console.log('Playlists Response:', playlistsResponse.data);
// // //         setPlaylists(playlistsResponse.data);
// // //       } catch (error) {
// // //         console.error('Error fetching data from API:', error);
// // //         setError('An error occurred while fetching data.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [trackName]);

// // //   const handleInsertToPlaylist = () => {
// // //     setShowModal(true);
// // //   };

// // //   const handlePlaylistSelect = (playlist) => {
// // //     setSelectedPlaylist(playlist);
// // //     setShowModal(false);
// // //     // Perform the logic for inserting the track into the selected playlist
// // //     // ...
// // //   };

// // //   const handleAddNewPlaylist = () => {
// // //     setShowModal(false);
// // //     // Navigate to the page for creating a new playlist
// // //     navigate('/create-playlist');
// // //   };

// // //   return (
// // //     <Container>
// // //       <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
// // //         {trackName} Details
// // //       </h2>

// // //       {loading && <Spinner animation="border" variant="primary" />}
// // //       {error && <Alert variant="danger">{error}</Alert>}

// // //       <ListGroup className="mt-3">
// // //         {tracksDetails.map((track, index) => (
// // //           <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>

// // //             <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Track Name: {track.name}</h3>
// // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Artist: {track.artist}</p>
// // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Name: {track.name}</p>
// // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Popularity: {track.popularity}</p>
// // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Album:</p>

// // //             <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
// // //               <li style={{ marginBottom: '5px' }}>Title: {track.album_id.name}</li>
// // //               <li style={{ marginBottom: '5px' }}>Release Date: {track.album_id.releaseDate.toString()}</li>
// // //             </ul>
// // //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Tempo: {track.tempo}</p>
// // //             {/* <Button
// // //               className="mt-3"
// // //               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
// // //               onClick={handleInsertToPlaylist}
// // //             ></Button> */}


// // //             <Button
// // //               className="mt-3"
// // //               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
// // //               onClick={handleInsertToPlaylist}
// // //             >
// // //               Insert to Playlist
// // //             </Button>
// // //           </ListGroup.Item>
// // //         ))}
// // //       </ListGroup>

// // //       {/* Playlist Selection Modal */}
// // //       <Modal show={showModal} onHide={() => setShowModal(false)}>
// // //         <Modal.Header closeButton>
// // //           <Modal.Title>Select Playlist</Modal.Title>
// // //         </Modal.Header>
// // //         <Modal.Body>
// // //           <Form>
// // //             {/* List of available playlists from the external API */}
// // //             <Form.Group controlId="playlistSelect">
// // //               <Form.Label>Select a playlist:</Form.Label>
// // //               <Form.Control as="select" onChange={(e) => handlePlaylistSelect(e.target.value)}>
// // //                 <option value="">-- Select Playlist --</option>
// // //                 {playlists.map((playlist, index) => (
// // //                   <option key={index} value={playlist}>
// // //                     {playlist}
// // //                   </option>
// // //                 ))}
// // //               </Form.Control>
// // //             </Form.Group>
// // //             <hr />
// // //             <Button variant="primary" onClick={handleAddNewPlaylist}>
// // //               Add New Playlist
// // //             </Button>
// // //           </Form>
// // //         </Modal.Body>
// // //       </Modal>
// // //     </Container>
// // //   );
// // // };

// // // export default TrackDetails;


// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate, Link } from 'react-router-dom';
// // import { InputGroup, FormControl, Container, Button, Table, Pagination, ListGroup, Alert, Spinner } from 'react-bootstrap';

// // import axios from 'axios';
// // import InserToPlaylist from './InsertToplaylist';

// // const TrackDetails = () => {
// //   const { trackName } = useParams();
// //   const [tracksDetails, setTracksDetails] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [showModal, setShowModal] = useState(false);
// //   const [playlists, setPlaylists] = useState([]);
// //   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
// //   const [showInsertForm, setShowInsertForm] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// //         setTracksDetails(response.data);

// //         // Fetch playlists from the external API
// //         const playlistsResponse = await axios.get('http://localhost:8080/playlists/getPlaylistNames');
// //         console.log('Playlists Response:', playlistsResponse.data);
// //         setPlaylists(playlistsResponse.data);
// //       } catch (error) {
// //         console.error('Error fetching data from API:', error);
// //         setError('An error occurred while fetching data.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [trackName]);

// //   const  handleInsertToPlaylist = () => {
// //     navigate('insert-track-to-playlist')
// //     setShowModal(true);
// //   };

// //   const handlePlaylistSelect = async (playlist) => {
// //     try {
// //       setSelectedPlaylist(playlist);
// //       setShowModal(false);

// //       // Make an external API call to insert the track into the selected playlist
// //       const response = await axios.post('http://localhost:8080/playlists/insertTrack', {
// //         playlistName: playlist,
// //         trackDetails: tracksDetails, // Pass the necessary track details here
// //       });

// //       console.log('Insert to Playlist Response:', response.data);

// //       // You can handle the response as needed, e.g., show a success message
// //       // ...

// //     } catch (error) {
// //       console.error('Error inserting track into playlist:', error);
// //       // Handle the error, show an error message, etc.
// //     }
// //   };

// //   const handleShowInsertForm = () => setShowInsertForm(true);
// //   const handleCloseInsertForm = () => setShowInsertForm(false);

// //   return (
// //     <Container>
// //       <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
// //         {trackName} Details
// //       </h2>

// //       {loading && <Spinner animation="border" variant="primary" />}
// //       {error && <Alert variant="danger">{error}</Alert>}

// //       <ListGroup className="mt-3">
// //         {tracksDetails.map((track, index) => (
// //           <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>

// //             <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Track Name: {track.name}</h3>
// //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Artist: {track.artist}</p>
// //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Name: {track.name}</p>
// //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Popularity: {track.popularity}</p>
// //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Album:</p>

// //             <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1rem' }}>
// //               <li style={{ marginBottom: '5px' }}>Title: {track.album_id.name}</li>
// //               <li style={{ marginBottom: '5px' }}>Release Date: {track.album_id.releaseDate.toString()}</li>
// //             </ul>
// //             <p style={{ fontSize: '1rem', marginBottom: '5px' }}>Tempo: {track.tempo}</p>

// //             <Button
// //               className="mt-3"
// //               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
// //               onClick={handleInsertToPlaylist}
// //             >
// //               Insert to Playlist
// //             </Button>
// //           </ListGroup.Item>
// //         ))}
// //       </ListGroup>

      
// //       <Button variant="primary" onClick={handleShowInsertForm} className="mb-3">
// //         Insert New Playlist
// //       </Button>

// //       <Table striped bordered hover>
// //         <thead>
// //           <tr>
// //             <th>Playlist Name</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {playlists
// //             .map((playlist_name, index) => (
// //               <tr key={index}>
// //                 <td>
// //                   <Link to={`/playlistdetails/${playlist_name}`}>
// //                     {playlist_name}
// //                   </Link>
// //                 </td>
// //               </tr>
// //             ))}
// //         </tbody>
// //       </Table>
// //       <InserToPlaylist show={showInsertForm} handleClose={handleCloseInsertForm} />

// //     </Container>
// //   );
// // };

// // export default TrackDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { InputGroup, FormControl, Container, Button, Table, Pagination, ListGroup, Alert, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import InsertToPlaylist from './InsertToplaylist';

// const TrackDetails = () => {
//   const { trackName } = useParams();
//   const [tracksDetails, setTracksDetails] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [playlists, setPlaylists] = useState([]);
//   const [selectedPlaylist, setSelectedPlaylist] = useState(null);
//   const [showInsertForm, setShowInsertForm] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
//         setTracksDetails(response.data);

//         // Fetch playlists from the external API
//         const playlistsResponse = await axios.get('http://localhost:8080/playlists/getPlaylistNames');
//         console.log('Playlists Response:', playlistsResponse.data);
//         setPlaylists(playlistsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data from API:', error);
//         setError('An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [trackName]);

//   const handleInsertToPlaylist = () => {
//     navigate('insert-track-to-playlist')
//     setShowModal(true);
//   };

//   const handlePlaylistSelect = async (playlist) => {
//     try {
//       setSelectedPlaylist(playlist);
//       setShowModal(false);

//       // Make an external API call to insert the track into the selected playlist
//       const response = await axios.post('http://localhost:8080/playlists/insertTrack', {
//         playlistName: playlist,
//         trackDetails: tracksDetails, // Pass the necessary track details here
//       });

//       console.log('Insert to Playlist Response:', response.data);

//       // You can handle the response as needed, e.g., show a success message
//       // ...

//     } catch (error) {
//       console.error('Error inserting track into playlist:', error);
//       // Handle the error, show an error message, etc.
//     }
//   };

//   const handleShowInsertForm = async () => {
//     try {
//       // Fetch playlists from the external API
//       const playlistsResponse = await axios.get('http://localhost:8080/playlists/getPlaylistNames');
//       console.log('Playlists Response:', playlistsResponse.data);

//       setPlaylists(playlistsResponse.data);
//       setShowInsertForm(true);
//     } catch (error) {
//       console.error('Error fetching playlists for form:', error);
//     }
//   };

//   const handleCloseInsertForm = () => setShowInsertForm(false);

//   return (
//     <Container>
//       <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
//         {trackName} Details
//       </h2>

//       {loading && <Spinner animation="border" variant="primary" />}
//       {error && <Alert variant="danger">{error}</Alert>}

//       <ListGroup className="mt-3">
//         {tracksDetails.map((track, index) => (
//           <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>

//             <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Track Name: {track.name}</h3>
//             {/* ... (existing code) */}

//             <Button
//               className="mt-3"
//               style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
//               onClick={handleInsertToPlaylist}
//             >
//               Insert to Playlist
//             </Button>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>

//       <Table striped bordered hover>
//         {/* ... (existing code) */}
//         <thead>
//            <tr>
//              <th>Playlist Name</th>
//            </tr>
//          </thead>
//          <tbody>
//            {playlists
//              .map((playlist_name, index) => (
//                <tr key={index}>
//                  <td>
//                    <Link to={`/playlistdetails/${playlist_name}`}>
//                      {playlist_name}
//                    </Link>
//                  </td>
//                </tr>
//              ))}
//          </tbody>
//        </Table>
//        console.log("pla");
//       <InsertToPlaylist show={showInsertForm} handleClose={handleCloseInsertForm} playlists={playlists} />

//     </Container>
//   );
// };

// export default TrackDetails;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button, Table, ListGroup, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import InsertToPlaylist from './InsertToplaylist';

const TrackDetails = () => {
  const { trackName } = useParams();
  const [tracksDetails, setTracksDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
        setTracksDetails(response.data);

        // Fetch playlists from the external API
        const playlistsResponse = await axios.get('http://localhost:8080/playlists/getPlaylistNames');
        setPlaylists(playlistsResponse.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trackName]);

  const handleInsertToPlaylist = () => {
    setShowInsertForm(true);
  };

  const handleCloseInsertForm = () => {
    setShowInsertForm(false);
  };

  return (
    <Container>
      <h2 className="mt-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
        {trackName} Details
      </h2>

      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <ListGroup className="mt-3">
        {tracksDetails.map((track, index) => (
          <ListGroup.Item key={index} className="bg-info text-white" style={{ marginBottom: '10px', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Track Name: {track.name}</h3>
            {/* ... (other track details) */}

            <p>Artist: {track.artist}</p>
            <p>Name: {track.name}</p>
            <p>Popularity: {track.popularity}</p>
            <p>Album:</p>
            
            <ul>
              <li>Title: {track.album_id.name}</li>
                <li>Release Date: {track.album_id.releaseDate.toString()}</li>
                {/* Add more album details as needed */}
            </ul>
            <p>Tempo: {track.tempo}</p>
            <Button
              className="mt-3"
              style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '8px 16px', cursor: 'pointer' }}
              onClick={handleInsertToPlaylist}
            >
              Insert to Playlist
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>


      <InsertToPlaylist show={showInsertForm} handleClose={handleCloseInsertForm} playlists={playlists} trackName={trackName}/>

    </Container>
  );
};

export default TrackDetails;
