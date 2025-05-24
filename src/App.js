import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import "../src/App"
import { Layouts } from './Layouts';

const App = () => {
  return (
    <Router>
      <Layouts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
