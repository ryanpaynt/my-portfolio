import React, { Component } from "react"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import html_page from '../../assets/img/html.jpg'
import note_page from '../../assets/img/note-taker.jpg'
import team_page from '../../assets/img/PTB.jpg'
import ff_page from '../../assets/img/ff.jpg'


class Portfolio extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);

    //Instance Plugin
    // let instance = M.Carousel.getInstance(this.Carousel);
    // instance.next(2);
  }

  render() {
    return (
      <div>
        <h1 className="title">My Work</h1>
    
      <div
          ref={Carousel => {
              this.Carousel = Carousel;
          }}
          className="carousel"
      >
          <a className="carousel-item"><img src={html_page} alt="image 1"/>
          </a>

          <a className="carousel-item" ><img src={note_page} alt="image 2"/>    
          </a>
      </div>
      </div>
        );
  }
}

export default Portfolio;
