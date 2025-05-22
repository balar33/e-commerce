import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components';
import "../src/App"
import { Navbar } from './Layouts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
