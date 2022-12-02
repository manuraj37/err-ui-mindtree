import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Headers from "./components/Headers"
import './App.css';
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
