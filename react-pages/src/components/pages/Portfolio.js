import React from 'react';

export default function Contact() {
    return (
        <div
            ref={Carousel => {
                this.Carousel = Carousel;
            }}
            className="carousel"
        >
            <a class="carousel-item" href="https://github.com/ryanpaynt/html-generator"
                target="_blank"><img src="./assets/html.jpg" />
                <p class="center-align">HTML-Generator</p>
            </a>

            <a class="carousel-item" href="https://github.com/ryanpaynt/note-taker"
                target="_blank"><img src="./assets/note-taker.jpg" />
                <p class="center-align">note-taker</p>
            </a>

            <a class="carousel-item" href="https://github.com/amgaudet/pokemon-team-builder/"
                target="_blank"><img src="./assets/PTB.jpg" />
                <p class="center-align">poketeam-builder</p>
            </a>

            <a class="carousel-item" href="https://github.com/huirayj/forum-friends/"
                target="_blank"><img src="./assets/ff.jpg" />
                <p class="center-align">forum-friends</p>
            </a>
        </div>
    );
}