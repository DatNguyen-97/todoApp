import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import FaceBook from './components/FaceBook';


function App() {
  return (
    <div>
          <FaceBook />
          <p>Hello, world!</p>
      <BrowserRouter>
        <h2>Languages</h2>

        <ul>
          <li>
            <Link to="/english">English</Link>
          </li>
          <li>
            <Link to="/spanish">Spanish</Link>
          </li>
          <li>
            <Link to="/french">French</Link>
          </li>
          <li>
            <Link to="/german">German</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/:id" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
