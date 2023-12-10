import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InsertAlbumForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    playlist_id: '',
    playlist_name: '',
    genre: '',
    subgenre: '',
  });

  const [genreOptions, setGenreOptions] = useState([]);
  const [subgenreOptions, setSubgenreOptions] = useState([]);

  useEffect(() => {
    const fetchGenreOptions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/genres/getNames');
        console.log('Genre Options:', response.data);
        setGenreOptions(response.data);
      } catch (error) {
        console.error('Error fetching genre options:', error);
      }
    };

    const fetchSubgenreOptions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/subgenres/getNames');
        console.log('Subgenre Options:', response.data);
        setSubgenreOptions(response.data);
      } catch (error) {
        console.error('Error fetching subgenre options:', error);
      }
    };

    fetchGenreOptions();
    fetchSubgenreOptions();
  }, []);

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
      // Generate UUID for the playlist
      const playlist_id = uuidv4();

      // Include the UUID in the request payload
      const response = await axios.post(
        'http://localhost:8080/playlists/createPlaylist',
        { ...formData, playlist_id: playlist_id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the API response as needed
      console.log('API Response:', response.data);

      // Show success notification
      toast.success(`Playlist ${formData.playlist_name} inserted successfully!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        playlist_id: '',
        playlist_name: '',
        genre: '',
        subgenre: '',
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
          <Modal.Title>Insert New Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPlaylistName">
              <Form.Label>Playlist Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter playlist name"
                name="playlist_name"
                value={formData.playlist_name}
                
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                as="select"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Genre</option>
                {genreOptions.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSubGenre">
              <Form.Label>Sub Genre</Form.Label>
              <Form.Control
                as="select"
                name="subgenre"
                value={formData.subgenre}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Sub Genre</option>
                {subgenreOptions.map((subgenre, index) => (
                  <option key={index} value={subgenre}>
                    {subgenre}
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

export default InsertAlbumForm;
