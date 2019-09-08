import React from 'react';
import GG001 from './images/GG_001.jpg';
import GG002 from './images/GG_002.jpg';
import GG003 from './images/GG_003.jpg';
import GG004 from './images/GG_004.jpg';
import GG005 from './images/GG_005.jpg';


import './Home.css';

const Home = () => {
  return (
  <> 
    <div id="carouselExampleIndicators" className="carousel slide carousel_parent" data-ride="carousel">
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={GG001} className="d-block w-100" alt="Gamble Garden"/>
    </div>
    <div className="carousel-item">
      <img src={GG002} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={GG003} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={GG004} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={GG005} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</>
  );
};

export default Home;
