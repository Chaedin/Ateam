import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './routes/main';
import Aside from './components/aside';
import About from './routes/about';
import Itemmain from './routes/itemmain';
import Mypage from './routes/mypage';
import Cspage from './routes/cspage';
import Login from './routes/login';
import Joinus from './routes/joinus';
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
