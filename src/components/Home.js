import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, InputGroup, FormControl, ListGroup, Pagination } from 'react-bootstrap';
import './Home.css';

const ITEMS_PER_PAGE = 15; // Number of items per page
const PAGES_TO_SHOW = 23; // Number of page numbers to show in pagination

const Home = () => {
  const [tracksList, setTracksList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.length >= 3 || searchTerm === '') {
        try {
          setLoading(true);
          const response = await axios.get(`http://localhost:8080/tracks/search?track_name=${searchTerm}`);
          setTracksList(response.data);
        } catch (error) {
          console.error('Error fetching data from API:', error);
          setError('An error occurred while fetching data.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page on new search
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const maxPages = Math.ceil(tracksList.length / ITEMS_PER_PAGE);
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

  return (
    <Container>
      <h1 className="app-title">Search App</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputGroup>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <ListGroup>
        {tracksList
          .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
          .map((trackName, index) => (
            <ListGroup.Item key={index} className="track-item">
              <Link to={`/track/${encodeURIComponent(trackName)}`} className="track-link">
                {trackName}
              </Link>
            </ListGroup.Item>
          ))}
      </ListGroup>

      {/* Pagination component */}
      {maxPages > 1 && (
        <Pagination className="pagination">
          {renderPaginationItems()}
        </Pagination>
      )}
    </Container>
  );
};

export default Home;
