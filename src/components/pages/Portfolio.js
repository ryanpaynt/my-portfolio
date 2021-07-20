import React, { Component } from "react"
import M from "materialize-css"
import '../../assets/css/materialize.css'
import '../../assets/css/materialize.min.css'
import html_page from '../../assets/img/html.jpg'
import note_page from '../../assets/img/note-taker.jpg'


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
