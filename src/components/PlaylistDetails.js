import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Spinner, Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlaylistDetails = () => {
  const { playlistName } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // Fetch playlist details using the playlistName
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/playlists/getPlaylistsAndTracks/${playlistName}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch when the component mounts
  }, [playlistName]);

  // Handle deletion of a track
  const handleDeleteTrack = async (track_name) => {
    try {
      setLoading(true);
      // Call your external API for deletion
      await axios.delete(`http://localhost:8080/playlistTrack/deleteTrackFromPlaylist?playlist_name=${playlistName}&track_name=${track_name}`);
      // Refetch the updated playlist details
      fetchData();
      // Display a success notification
      toast.success(`Track "${track_name}" deleted successfully!`);
    } catch (error) {
      console.error('Error deleting track:', error);
      setError('An error occurred while deleting the track.');
    } finally {
      setLoading(false);
    }
  };

  const handleInsertNewTrack = () =>{
    navigate("/home")
  }

  return (
    <Container>
      <h2 className="mt-3">Playlist Details</h2>
      <p>Playlist name: {playlistName}</p>

      {loading && <Spinner animation="border" role="status" className="mt-3">
        <span className="sr-only">Loading...</span>
      </Spinner>}

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      <Button onClick={handleInsertNewTrack} className='mt-3'>
        Insert new track
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Track Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.track_name}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteTrack(item.track_name)} className="p-2">
                  <FaTrash size={20} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Container>
  );
};

export default PlaylistDetails;
