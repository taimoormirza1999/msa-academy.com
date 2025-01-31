import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetails';

function App() {
  return (
    <Router>
    
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
