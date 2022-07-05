import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Details from './pages/Details/Details';
import MapList from './pages/MapList/MapList';
import Kakao from './components/Nav/LogIn/Kakao';
import LoggedModal from './components/Nav/LogIn/LoggedModal';

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/maplist/:pageId" element={<MapList />} />
        <Route path="/users/kakao-signin" element={<Kakao />} />
        <Route path="/test" element={<LoggedModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
