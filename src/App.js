import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Aside from './components/aside/aside';
import About from './components/about/about';
import Itemmain from './components/itemmain/itemmain';
import Mypage from './components/mypage/mypage';
import Cspage from './components/cspage/cspage';
import Login from './components/login/login';
import Joinus from './components/joinus/joinus';
import Terms from './components/terms/terms';
import Cart from './components/cart/cart'

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
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Aside />
    <Footer />
  </BrowserRouter>
</>

  );
}

export default App;
