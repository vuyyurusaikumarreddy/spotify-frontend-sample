import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlist from './components/Playlist';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
