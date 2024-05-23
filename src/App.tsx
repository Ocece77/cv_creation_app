import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Generator from './generator/Generator';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </HashRouter>
  );
}

export default App;