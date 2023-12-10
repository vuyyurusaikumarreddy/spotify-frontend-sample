import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlist from './components/Playlist';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import TrackDetails from './components/TrackDetails';
import Albums from './components/Albums';
import PlaylistDetails from './components/PlaylistDetails';
import InserToPlaylist from './components/InsertToplaylist';


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/track/:trackName" element={<TrackDetails />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/playlistdetails/:playlistName" element={< PlaylistDetails/>} />
          <Route path='/track/:playlist_name/insert-track-to-playlist' element={ < InserToPlaylist/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
