import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Aside from './components/aside/aside';
import About from './components/about/about';
import Itemmain from './components/itemmain/itemmain';
import Mypage from './routes/mypage';
import Cspage from './components/cspage/cspage';
import Login from './components/login/login';
import Joinus from './components/joinus/joinus';
function App() {
  return (
    <>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<About />} /> 
      <Route path='/itemmain' element={<Itemmain/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/cspage' element={<Cspage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/joinus' element={<Joinus/>}/>
    </Routes>
    <Aside />
    <Footer />
  </BrowserRouter>
</>

  );
}

export default App;
