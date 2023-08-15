// External imports
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Local imports
import HomePage from 'pages/Home';

import './styles/main.scss';

// Component definition
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

  );
}

// Default export
export default App;
