import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Basic from './components/Basic';


function App() {
  return (
    <div className="">
      <Navbar />
      {/* main content */}
      <div className="p-3">
        {/* Home */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic/*" element={<Basic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
