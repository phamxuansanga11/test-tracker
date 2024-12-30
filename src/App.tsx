import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
