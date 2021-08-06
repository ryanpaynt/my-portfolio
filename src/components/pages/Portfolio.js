import React from "react";
import '../../assets/css/portfolio.css';
import team from '../../assets/imgs/team-gen.jpg';
import poke from '../../assets/imgs/poketeam.jpg';
import note from '../../assets/imgs/note-taker.jpg';
import html from '../../assets/imgs/html-gen.jpg';
import fitness from '../../assets/imgs/fitness-tracker.jpg';
import ff from '../../assets/imgs/forum-friends.jpg';
import budget from '../../assets/imgs/budget-tracker.jpg';

export default function Portfolio() {
  return (
    <section className="section has-background-primary-dark">
      <div className="container" style={{ height: '100%' }}>
        <div class="tile is-ancestor top">
          <div class="tile is-parent test">
            <article class="tile is-child box" style={{ margin: '100px' }}>
              <p class="title test-text">Resume Builder</p>
              <div className='img-container'>
                <img className='test-img' src={team} />
                <a href='https://github.com/morrisbianco/resume-builder' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                </a>
                <a href='https://rapid-resume.herokuapp.com/' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                </a>
              </div>
            </article>
          </div>
          <div class="tile is-parent test">
            <article class="tile is-child box">
              <p class="title test-text">Note Taker</p>
              <div className='img-container'>
                <img className='test-img' src={note} />
                <a href='https://github.com/ryanpaynt/note-taker' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                </a>
                <a href='https://secure-citadel-65053.herokuapp.com/' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                </a>
              </div>
            </article>
          </div>
          <div class="tile is-parent test">
            <article class="tile is-child box">
              <p class="title test-text">Book Search</p>
              <div className='img-container'>
                <img className='test-img' src={html} />
                <a href='https://github.com/ryanpaynt/book-search' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                </a>
                <a href='https://book-search-1402.herokuapp.com/' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                </a>
              </div>
            </article>
          </div>
          <div class="tile is-parent test">
            <article class="tile is-child box">
              <p class="title test-text">Fitness Tracker</p>
              <div className='img-container'>
                <img className='test-img' src={fitness} />
                <a href='https://github.com/ryanpaynt/fitness-tracker' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                </a>
                <a href='https://fitness-tracker-1402.herokuapp.com/' target='_blank'>
                  <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor move-tile">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent welcome">
              <article class="tile is-child box">
                <p class="title greeting">Welcome</p>
                <div class="content">
                  <p className='descr'>
                    This is my profile page! Here you will find just a small portion of the work I have produced on my full stack journey.
                    Each tile has two links to the repository and the deployed website! If there are any issues do not hesitate to use the contact page.
                  </p>
                </div>
              </article>
            </div>
            <div class="tile is-8 is-vertical">
              <div class="tile">
                <div class="tile is-parent test">
                  <article class="tile is-child box">
                    <p class="title test-text">Forum Friends</p>
                    <div className='img-container'>
                      <img className='test-img' src={ff} />
                      <a href='https://github.com/huirayj/forum-friends' target='_blank'>
                        <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                      </a>
                      <a href='https://forum-friends.herokuapp.com/' target='_blank'>
                        <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                      </a>
                    </div>
                  </article>
                </div>
                <div class="tile is-parent test">
                  <article class="tile is-child box">
                    <p class="title test-text">Budget Tracker</p>
                    <div className='img-container'>
                      <img className='test-img' src={budget} />
                      <a href='https://github.com/ryanpaynt/budget-tracker' target='_blank'>
                        <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                      </a>
                      <a href='https://budget-tracker-1402.herokuapp.com/' target='_blank'>
                        <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-12 is-vertical big-tile">
            <div class="tile is-parent test">
              <article class="tile is-child box">
                <p class="title test-text">Poketeam</p>
                <div className='img-container'>
                  <img className='test-img' src={poke} />
                  <a href='https://github.com/amgaudet/pokemon-team-builder' target='_blank'>
                    <div style={{ fontSize: '30px' }} className='deployed-git'><i className="fab fa-github"></i></div>
                  </a>
                  <a href='https://amgaudet.github.io/pokemon-team-builder' target='_blank'>
                    <div style={{ fontSize: '30px' }} className='deployed-URL'><i className="fas fa-link"></i></div>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}