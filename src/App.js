import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
