import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import ProductDetail from './pages/ProductDetail';
import Sales from './pages/Sales';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Results />} />
      <Route path="/item/:id" element={<ProductDetail />} />
      <Route path="/sales" element={<Sales />} />
    </Routes>
  );
}

export default App;
