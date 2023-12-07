// // // // // // TrackDetails.js
// // // // // import React from 'react';
// // // // // import { useState, useEffect } from 'react';
// // // // // import { useParams } from 'react-router-dom';
// // // // // import { Link } from 'react-router-dom';
// // // // // import axios from 'axios';

// // // // // const TrackDetails = () => {
// // // // //   const {trackName} = useParams();
// // // // //   const [tracksDetails, setTracksDetails] = useState();
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);

// // // // //   console.log(tracksDetails);
// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //         try {
// // // // //           setLoading(true);
// // // // //           const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // // // //           setTracksDetails(response.data);
// // // // //         } catch (error) {
// // // // //           console.error('Error fetching data from API:', error);
// // // // //           setError('An error occurred while fetching data.');
// // // // //         } finally {
// // // // //           setLoading(false);
// // // // //         }
      
// // // // //     };

// // // // //     fetchData();
// // // // //   }, [trackName]);


// // // // //   console.log(trackName)
// // // // //   return (
// // // // //     <div>
      
// // // // //       <h2>{trackName} Details</h2>
      

      
// // // // //       {/* Add more details or content as needed */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TrackDetails;

// // // // // TrackDetails.js
// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, Link } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // const TrackDetails = () => {
// // // //   const { trackName } = useParams();
// // // //   const [tracksDetails, setTracksDetails] = useState();
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);

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

// // // //   return (
// // // //     <div>
// // // //       <h2>{trackName} Details</h2>

// // // //       {loading && <p>Loading...</p>}
// // // //       {error && <p>{error}</p>}

// // // //       {tracksDetails && (
// // // //         <div>
// // // //           {/* Display details from tracksDetails */}
// // // //           {/* Example: <p>{tracksDetails.someProperty}</p> */}

// // // //           {/* Link back to the home page */}
// // // //           <Link to="/home">Back to Home</Link>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrackDetails;

// // // // TrackDetails.js
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, Link } from 'react-router-dom';
// // // import axios from 'axios';

// // // const TrackDetails = () => {
// // //   const { trackName } = useParams();
// // //   const [tracksDetails, setTracksDetails] = useState();
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// // //         setTracksDetails(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching data from API:', error);
// // //         setError('An error occurred while fetching data.');
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [trackName]);

// // //   return (
// // //     <div>
// // //       <h2>{trackName} Details</h2>

// // //       {loading && <p>Loading...</p>}
// // //       {error && <p>{error}</p>}

// // //       {tracksDetails && (
// // //         <div>
// // //           <h3>All Track Details</h3>
// // //           <ul>
// // //             {Object.entries(tracksDetails).map(([key, value]) => (
// // //               <li key={key}>
// // //                 <strong>{key}:</strong> {value}
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           {/* Link back to the home page */}
// // //           <Link to="/home">Back to Home</Link>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default TrackDetails;

// // // TrackDetails.js
// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import axios from 'axios';

// // const TrackDetails = () => {
// //   const { trackName } = useParams();
// //   const [tracksDetails, setTracksDetails] = useState();
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
// //         setTracksDetails(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data from API:', error);
// //         setError('An error occurred while fetching data.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [trackName]);

// //   return (
// //     <div className="container mt-5">
// //       <h2 className="text-center mb-4">{trackName} Details</h2>

// //       {loading && <p className="text-center">Loading...</p>}
// //       {error && <p className="text-center text-danger">{error}</p>}

// //       {tracksDetails && (
// //         <div>
// //           <h3 className="mb-3">All Track Details</h3>
// //           <ul className="list-group">
// //             <li className="list-group-item">
// //               <strong>ID:</strong> {tracksDetails.id}
// //             </li>
// //             <li className="list-group-item">
// //               <strong>Name:</strong> {tracksDetails.name}
// //             </li>
// //             <li className="list-group-item">
// //               <strong>Artist:</strong> {tracksDetails.artist}
// //             </li>
// //             {/* Add more details based on your object structure */}
// //           </ul>

// //           {/* Link back to the home page */}
// //           <Link to="/home" className="btn btn-primary mt-3">
// //             Back to Home
// //           </Link>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default TrackDetails;
// // TrackDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Container, ListGroup, Spinner, Alert } from 'react-bootstrap'; // Import React Bootstrap components
// import axios from 'axios';

// const TrackDetails = () => {
//   const { trackName } = useParams();
//   const [tracksDetails, setTracksDetails] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
//         setTracksDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching data from API:', error);
//         setError('An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [trackName]);

//   return (
//     <Container>
//       <h2 className="mt-4">{trackName} Details</h2>

//       {loading && <Spinner animation="border" variant="primary" />}
//       {error && <Alert variant="danger">{error}</Alert>}

//       <ListGroup className="mt-3">
//         {tracksDetails.map((track, index) => (
//           <ListGroup.Item key={index} className="bg-info text-white">
//             <h3>{track.name}</h3>
//             <p>Artist: {track.artist}</p>
//             <p>Name: {track.name}</p>
//             <p>Popularity: {track.popularity}</p>
//             <p>Album: {track.album}</p>
//             <p>tempo: {track.tempo}</p>
//             {/* Add more details as needed */}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Container>
//   );
// };

// export default TrackDetails;

// TrackDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const TrackDetails = () => {
  const { trackName } = useParams();
  const [tracksDetails, setTracksDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tr, setTr] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/tracks/${trackName}`);
        setTracksDetails(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trackName]);

  const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toLocaleDateString() : 'Release Date: Unknown';
  };
  

  return (
    <Container>
      <h2 className="mt-4">{trackName} Details</h2>

      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <ListGroup className="mt-3">
        {tracksDetails.map((track, index) => (
          <ListGroup.Item key={index} className="bg-info text-white" >
            <h3>Track Name: {track.name}</h3>
            <p>Artist: {track.artist}</p>
            <p>Name: {track.name}</p>
            <p>Popularity: {track.popularity}</p>
            <p>Album:</p>
            
            <ul>
              <li>Title: {track.album_id.name}</li>
              <li>Release Date: {formatDate(new Date(track.album_id.releaseDate))}</li>
              {/* Add more album details as needed */}
            </ul>
            <p>Tempo: {track.tempo}</p>
            {/* Add more details as needed */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TrackDetails;
