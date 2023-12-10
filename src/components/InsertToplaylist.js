// import React, { useState, useEffect } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useParams } from 'react-router-dom';

// const InserToPlaylist = ({ show, handleClose }) => {
//   const [formData, setFormData] = useState({
//     track_name: '',
//     playlist_name: '',
//   });

//   const [playlists, setPlaylists] = useState([]);
//   const track_name = useParams();

//   useEffect(() => {
//     const fetchPlaylists = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/playlists/getPlaylistNames');
//         console.log('Playlist Names:', response.data);
//         setPlaylists(response.data);
//       } catch (error) {
//         console.error('Error fetching playlist names:', error);
//       }
//     };
//     fetchPlaylists();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Generate UUID for the playlist
//       const playlist_id = uuidv4();

//       // Include the UUID in the request payload
//       const response = await axios.post(
//         'http://localhost:8080/playlists/insertTrackToPlaylist',
//         { ...formData},
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       // Handle the API response as needed
//       console.log('API Response:', response.data);

//       // Show success notification
//       toast.success(`Track ${formData.track_name} inserted successfully! to ${formData.playlist_name}`, {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       setFormData({
//         playlist_name: '',
//         track_name: '',
//       });

//       // Close the modal after the state has been updated
//       handleClose();
//     } catch (error) {
//       console.error('Error inserting playlist:', error);
//       // You may handle the error or display a message to the user
//     }
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Insert to Playlist</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>

//             <Form.Group controlId="formPlaylist">
//               <Form.Label>Select a Playlist</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="playlist_name"
//                 value={formData.playlist_name}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select Playlist</option>
//                 {playlists.map((playlist_name, index) => (
//                   <option key={index} value={playlist_name}>
//                     {playlist_name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Insert track to Playlist
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//       <ToastContainer />
//     </>
//   );
// };

// export default InserToPlaylist;


import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const InsertToPlaylist = ({ show, handleClose, playlists , trackName}) => {
  const [formData, setFormData] = useState({
    track_name: trackName,
    playlist_name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Include the UUID in the request payload
      const response = await axios.post(
        'http://localhost:8080/playlists/insertTrackToPlaylist',
        { track_name: formData.track_name, playlist_name: formData.playlist_name },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the API response as needed
      console.log('API Response:', response.data);

      // Show success notification
      console.log(formData);
      toast.success(`Track ${formData.track_name} inserted successfully! to ${formData.playlist_name}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        playlist_name: '',
        track_name: '',
      });

      // Close the modal after the state has been updated
      handleClose();
    } catch (error) {
      console.error('Error inserting playlist:', error);
      // You may handle the error or display a message to the user
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert to Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPlaylist">
              <Form.Label>Select a Playlist</Form.Label>
              <Form.Control
                as="select"
                name="playlist_name"
                value={formData.playlist_name}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Playlist</option>
                {playlists.map((playlist, index) => (
                  <option key={index} value={playlist}>
                    {playlist}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Insert Playlist
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default InsertToPlaylist;
