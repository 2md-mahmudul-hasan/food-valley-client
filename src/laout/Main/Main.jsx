import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';
import MyCarousel from '../../pages/Home/Carousel/MyCarousel';
import Category from '../../pages/Home/Category/Category';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <MyCarousel></MyCarousel>
      <Category></Category>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;