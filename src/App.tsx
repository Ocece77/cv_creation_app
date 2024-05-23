import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Generator from './generator/Generator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;