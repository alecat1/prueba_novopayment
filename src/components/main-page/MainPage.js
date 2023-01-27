import React from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import navbarPages from "./servicio.json";

const MainPage = () => {
  return (
    <>
    <div>
      <Header></Header>
      <div className='navbar-div'>
        <Navbar navbarPages={navbarPages.lista}></Navbar>
      </div>
      <Footer></Footer>
    </div>
    </>
  );
};

export default MainPage;