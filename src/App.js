import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Route, Routes, Outlet } from 'react-router-dom';
import DetailPage from './pages/DetailPage/index';
import MainPage from './pages/MainPage/index';
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
