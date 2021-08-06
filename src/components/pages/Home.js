import React from 'react';
import { Link } from 'react-router-dom';
import codingImg from '../../assets/imgs/ProgrammingIllustration.png'
import '../../assets/css/home.css';

export default function Home() {
  return (
    <section className="section has-background-primary-dark" style={{}}>
      <div className="container" style={{ height: '300px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className='title is-1 line-1 anim-typewriter' style={{ color: 'white', fontFamily: 'Libre Baskerville', fontSize: '4.5vw', marginTop: '5%', marginBottom: '10%' }}>
            &lt;h1&gt;My Portfolio.&lt;/h1&gt;
          </h1>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src={codingImg} alt="computer img" width="1000" style={{ marginTop: '-200px' }} />
        </div>
      </div>
    </section>
  );
};