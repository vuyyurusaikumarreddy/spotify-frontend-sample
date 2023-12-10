import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, InputGroup, FormControl, Button, Table, Pagination } from 'react-bootstrap';
import InsertTrackForm from './InsertTrackForm';
import './Home.css';

const ITEMS_PER_PAGE = 15; // Number of items per page
const PAGES_TO_SHOW = 23; // Number of page numbers to show in pagination

const Home = () => {
  const [tracksList, setTracksList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showInsertForm, setShowInsertForm] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/tracks`);
        setTracksList(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    setFilteredData(tracksList.filter(track => track.name.toLowerCase().includes(searchTerm) || track.artist.toLowerCase().includes(searchTerm)));
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

  const handleShowInsertForm = () => setShowInsertForm(true);
  const handleCloseInsertForm = () => setShowInsertForm(false);

  return (
    <Container>
      <h1 className="app-title">Tracks</h1>
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
        Insert New Track
      </Button> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {filteredData
            .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
            .map((track, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/track/${encodeURIComponent(track.name)}`} className = 'track-link'>
                    {track.name}
                  </Link>
                </td>
                <td>{track.artist}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      {/* Pagination component */}
      {maxPages > 1 && (
        <Pagination className="pagination">
          {renderPaginationItems()}
        </Pagination>
      )}

      <InsertTrackForm show={showInsertForm} handleClose={handleCloseInsertForm} />
    </Container>
  );
};

export default Home;
