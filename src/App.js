import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Support from './pages/Support/Support';
import Background from './components/Background/Background';
import MyAccount from './pages/MyAccount/MyAccount';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.HOME} element={ <Home /> } />
        <Route path={routes.CATALOG} element={ <Catalog /> } />
        <Route path={routes.ABOUT} element={ <About /> } />
        <Route path={routes.LOGIN} element={ <Login /> } />
        <Route path={routes.REGISTER} element={ <Register /> } />
        <Route path={routes.SUPPORT} element={ <Support /> } />
        <Route path={routes.MY_ACCOUNT} element={ <MyAccount /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Background />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
