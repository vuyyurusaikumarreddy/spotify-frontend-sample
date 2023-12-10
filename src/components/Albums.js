// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { InputGroup, FormControl, Container, Button, Table, Pagination } from 'react-bootstrap';
// import InsertAlbumForm from './InsertAlbumForm';

// const Albums = () => {
//   const [albums, setAlbums] = useState([]);
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
//         const response = await axios.get('http://localhost:8080/albums/getAlbumsAndArtist');
//         setAlbums(response.data);
//         setFilteredData(response.data)
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
//   const maxPages = Math.ceil(albums.length / ITEMS_PER_PAGE);
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
//     setFilteredData(albums.filter(album => album.name.toLowerCase().includes(searchTerm) || album.artist.toLowerCase().includes(searchTerm)));
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
//         Insert New Track
//       </Button>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Album Name</th>
//             <th>Release Date</th>
//             <th>Artist</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData
//           .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
//           .map((album, index) => (
//             <tr key={index}>
//               <td>{album.name}</td>
//               <td>{album.release_date.toString()}</td>
//               <td>{album.artist}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination component */}
//       {maxPages > 1 && (
//         <Pagination className="pagination">
//           {renderPaginationItems()}
//         </Pagination>
//       )}
//       <InsertAlbumForm show={showInsertForm} handleClose={handleCloseInsertForm} />
//     </Container>
    
//   );
// };

// export default Albums;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { InputGroup, FormControl, Container, Button, Table, Pagination } from 'react-bootstrap';
// import InsertAlbumForm from './InsertAlbumForm';

// const Albums = () => {
//   const [albums, setAlbums] = useState([]);
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
//         const response = await axios.get('http://localhost:8080/albums/getAlbumsAndArtist');
//         setAlbums(response.data);
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
//   const maxPages = Math.ceil(albums.length / ITEMS_PER_PAGE);
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
//     setFilteredData(albums.filter(album => album.name.toLowerCase().includes(searchTerm) || album.artist.toLowerCase().includes(searchTerm)));
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
//         Insert New Album
//       </Button>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Album Name</th>
//             <th>Release Date</th>
//             <th>Artist</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData
//             .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
//             .map((album, index) => (
//               <tr key={index}>
//                 <td>{album.name}</td>
//                 <td>{album.release_date.toString()}</td>
//                 <td>{album.artist}</td>
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

// export default Albums;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Container, Button, Table, Pagination } from 'react-bootstrap';
import InsertAlbumForm from './InsertAlbumForm';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ITEMS_PER_PAGE = 15; // Number of items per page
  const PAGES_TO_SHOW = 23; // Number of page numbers to show in pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/albums/getAlbumsAndArtist');
        setAlbums(response.data);
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
    // Implement the logic to insert a new album
    console.log('Inserting a new album...');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const maxPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startPage = Math.max(1, currentPage - Math.floor(PAGES_TO_SHOW / 2));
  const endPage = Math.min(startPage + PAGES_TO_SHOW - 1, maxPages);

  const renderPaginationItems = () => {
    const items = [];

    // Show the first page
    items.push(
      <Pagination.Item
        key={1}
        active={1 === currentPage}
        onClick={() => paginate(1)}
      >
        1
      </Pagination.Item>
    );

    // Add dots if there are more pages to show
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

    // Render the pages
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

    // Add dots if there are more pages to show
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
    setFilteredData(albums.filter(album => album.name.toLowerCase().includes(searchTerm) || album.artist.toLowerCase().includes(searchTerm)));
  };

  const handleShowInsertForm = () => setShowInsertForm(true);
  const handleCloseInsertForm = () => setShowInsertForm(false);

  return (
    <Container>
      <h1 className="app-title">Albums</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchTerm}
          onChange={Filter}
        />
      </InputGroup>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* <Button variant="primary" onClick={handleShowInsertForm} className="mb-3">
        Insert New Album
      </Button> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Album Name</th>
            <th>Release Date</th>
            <th>Artist(s)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
            .reduce((acc, album) => {
              const existingAlbumIndex = acc.findIndex((groupedAlbum) => groupedAlbum.name === album.name);

              if (existingAlbumIndex !== -1) {
                // If the album with the same name exists, add the artist to the existing row
                acc[existingAlbumIndex].artists.push(album.artist);
              } else {
                // If the album with the same name does not exist, create a new row
                acc.push({
                  name: album.name,
                  release_date: album.release_date,
                  artists: [album.artist],
                });
              }

              return acc;
            }, [])
            .map((groupedAlbum, index) => (
              <tr key={index}>
                <td>{groupedAlbum.name}</td>
                <td>{groupedAlbum.release_date.toString()}</td>
                <td>{groupedAlbum.artists.join(', ')}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      {maxPages > 1 && (
        <Pagination className="pagination">
          {renderPaginationItems()}
        </Pagination>
      )}

      {/* InsertAlbumForm component */}
      <InsertAlbumForm show={showInsertForm} handleClose={handleCloseInsertForm} />
    </Container>
  );
};

export default Albums;
