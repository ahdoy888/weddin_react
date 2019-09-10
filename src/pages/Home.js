import React from 'react';
import GG001 from './images/GG_001wedding.jpg';
import GG002 from './images/GG_002wedding.jpg';
import GG003 from './images/GG_003wedding.jpg';
import GG004 from './images/GG_004wedding.jpg';
import GG005 from './images/GG_005wedding.jpg';


import './Home.css';

const Home = () => {
  return (
    <>
      <div className="container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={GG001} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GG002} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GG003} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GG004} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GG005} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <br />
          <div>
            <span><h2>Welcome to Our Wedding</h2></span>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
