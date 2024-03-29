// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { InputGroup, FormControl, Container, Button, Table, Pagination } from 'react-bootstrap';
// import InsertAlbumForm from './InsertAlbumForm';

// const Playlist = () => {
//   const [playlists, setPlaylists] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const ITEMS_PER_PAGE = 15; // Number of items per page
//   const PAGES_TO_SHOW = 23; // Number of page numbers to show in pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showInsertForm, setShowInsertForm] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://localhost:8080/playlists/getPlaylists');
//         setPlaylists(response.data);
//         setFilteredData(response.data);
//       } catch (error) {
//         console.error('Error fetching data from API:', error);
//         setError('An error occurred while fetching data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAlbums();
//   }, []);

//   const handleInsertNewAlbum = () => {
//     // Implement the logic to insert a new album
//     console.log('Inserting a new album...');
//   };

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const maxPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
//   const startPage = Math.max(1, currentPage - Math.floor(PAGES_TO_SHOW / 2));
//   const endPage = Math.min(startPage + PAGES_TO_SHOW - 1, maxPages);

//   const renderPaginationItems = () => {
//     const items = [];

//     // Show the first page
//     items.push(
//       <Pagination.Item
//         key={1}
//         active={1 === currentPage}
//         onClick={() => paginate(1)}
//       >
//         1
//       </Pagination.Item>
//     );

//     // Add dots if there are more pages to show
//     if (startPage > 2) {
//       items.push(
//         <Pagination.Ellipsis key="ellipsis-first" disabled />
//       );
//       items.push(
//         <Pagination.Item
//           key={startPage}
//           onClick={() => paginate(startPage)}
//         >
//           {startPage}
//         </Pagination.Item>
//       );
//     }

//     // Render the pages
//     for (let number = startPage + 1; number <= endPage; number++) {
//       items.push(
//         <Pagination.Item
//           key={number}
//           active={number === currentPage}
//           onClick={() => paginate(number)}
//         >
//           {number}
//         </Pagination.Item>
//       );
//     }

//     // Add dots if there are more pages to show
//     if (endPage < maxPages - 1) {
//       items.push(
//         <Pagination.Ellipsis key="ellipsis-last" disabled />
//       );
//       items.push(
//         <Pagination.Item
//           key={maxPages}
//           onClick={() => paginate(maxPages)}
//         >
//           {maxPages}
//         </Pagination.Item>
//       );
//     }

//     return items;
//   };

//   const Filter = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearchTerm(searchTerm);
//     setFilteredData(playlists.filter(playlist => playlist.name.toLowerCase().includes(searchTerm)));
//   };

//   const handleShowInsertForm = () => setShowInsertForm(true);
//   const handleCloseInsertForm = () => setShowInsertForm(false);

//   return (
//     <Container>
//       <h1 className="app-title">Albums</h1>
//       <InputGroup className="mb-3">
//         <FormControl
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={Filter}
//         />
//       </InputGroup>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}

//       <Button variant="primary" onClick={handleShowInsertForm} className="mb-3">
//         Insert New Playlist
//       </Button>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Playlist Name</th>
//             <th>Genre</th>
//             <th>Sub Genre</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData
//             .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
//             .reduce((acc, album) => {
//                 // If the album with the same name does not exist, create a new row
//                 acc.push({
//                   name: album.name,
//                   genre: album.genre,
//                   subgenre: album.subgenre,
//                 });

//               return acc;
//             }, [])
//             .map((groupedAlbum, index) => (
//               <tr key={index}>
//                 <td>{groupedAlbum.name}</td>
//                 <td>{groupedAlbum.genre}</td>
//                 <td>{groupedAlbum.subgenre}</td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>

//       {maxPages > 1 && (
//         <Pagination className="pagination">
//           {renderPaginationItems()}
//         </Pagination>
//       )}

//       {/* InsertAlbumForm component */}
//       <InsertAlbumForm show={showInsertForm} handleClose={handleCloseInsertForm} />
//     </Container>
//   );
// };

// export default Playlist;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Container, Button, Table, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import InsertAlbumForm from './InsertAlbumForm';

const Playlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ITEMS_PER_PAGE = 15;
  const PAGES_TO_SHOW = 23;
  const [currentPage, setCurrentPage] = useState(1);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/playlists/getPlaylists');
        setPlaylists(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleInsertNewAlbum = () => {
    console.log('Inserting a new album...');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const maxPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startPage = Math.max(1, currentPage - Math.floor(PAGES_TO_SHOW / 2));
  const endPage = Math.min(startPage + PAGES_TO_SHOW - 1, maxPages);

  const renderPaginationItems = () => {
    const items = [];

    items.push(
      <Pagination.Item
        key={1}
        active={1 === currentPage}
        onClick={() => paginate(1)}
      >
        1
      </Pagination.Item>
    );

    if (startPage > 2) {
      items.push(
        <Pagination.Ellipsis key="ellipsis-first" disabled />
      );
      items.push(
        <Pagination.Item
          key={startPage}
          onClick={() => paginate(startPage)}
        >
          {startPage}
        </Pagination.Item>
      );
    }

    for (let number = startPage + 1; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < maxPages - 1) {
      items.push(
        <Pagination.Ellipsis key="ellipsis-last" disabled />
      );
      items.push(
        <Pagination.Item
          key={maxPages}
          onClick={() => paginate(maxPages)}
        >
          {maxPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setFilteredData(playlists.filter(playlist => playlist.name.toLowerCase().includes(searchTerm)));
  };

  const handleShowInsertForm = () => setShowInsertForm(true);
  const handleCloseInsertForm = () => setShowInsertForm(false);

  return (
    <Container>
      <h1 className="app-title">Playlists</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchTerm}
          onChange={Filter}
        />
      </InputGroup>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <Button variant="primary" onClick={handleShowInsertForm} className="mb-3">
        Insert New Playlist
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Playlist Name</th>
            <th>Genre</th>
            <th>Sub Genre</th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
            .reduce((acc, album) => {
              acc.push({
                name: album.name,
                genre: album.genre,
                subgenre: album.subgenre,
              });
              return acc;
            }, [])
            .map((groupedAlbum, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/playlistDetails/${groupedAlbum.name}`}>
                    {groupedAlbum.name}
                  </Link>
                </td>
                <td>{groupedAlbum.genre}</td>
                <td>{groupedAlbum.subgenre}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      {maxPages > 1 && (
        <Pagination className="pagination">
          {renderPaginationItems()}
        </Pagination>
      )}

      <InsertAlbumForm show={showInsertForm} handleClose={handleCloseInsertForm} />
    </Container>
  );
};

export default Playlist;
