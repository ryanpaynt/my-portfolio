import React, { Component } from "react"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import html_page from '../../assets/img/html.jpg'
import note_page from '../../assets/img/note-taker.jpg'
import team_page from '../../assets/img/PTB.jpg'
import ff_page from '../../assets/img/ff.jpg'


class Carousel extends Component {
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
          <a className="carousel-item" href="https://github.com/ryanpaynt/html-generator"
              target="_blank" rel="noreferrer"><img src={html_page} alt="image 1"/>
              <p className="center-align">HTML-Generator</p>
          </a>

          <a className="carousel-item" href="https://github.com/ryanpaynt/note-taker"
              target="_blank" rel="noreferrer"><img src={note_page} alt="image 2"/>
              <p className="center-align">note-taker</p>
          </a>

          <a className="carousel-item" href="https://github.com/amgaudet/pokemon-team-builder/"
              target="_blank" rel="noreferrer"><img src={team_page} alt="image 3"/>
              <p className="center-align">poketeam-builder</p>
          </a>

          <a className="carousel-item" href="https://github.com/huirayj/forum-friends/"
              target="_blank" rel="noreferrer"><img src={ff_page} alt="image 4"/>
              <p className="center-align">forum-friends</p>
          </a>
      </div>
      </div>
        );
  }
}

export default Carousel;
