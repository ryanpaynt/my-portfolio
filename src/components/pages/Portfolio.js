import React, { Component } from "react"
import M from "materialize-css"
import '../../assets/css/materialize.css'
import '../../assets/css/materialize.min.css'
import budget_page from '../../assets/img/budget.jpg'
import note_page from '../../assets/img/note-taker.jpg'
import ff_page from '../../assets/img/ff.jpg'
import poke_page from '../../assets/img/PTB.jpg'
import team_page from '../../assets/img/team-gen.jpg'
import fitness_page from '../../assets/img/fitness.jpg'


export default function Portfolio() {
    return (
      <div>
        <h1 className="title">My Work</h1>

        <div className='row' id='images'>
          <div className='col s12 m6 6 responsive-img img'>
            <img src={budget_page}/>
            <figcaption>
            <p><u><b>Budget Tracker</b></u></p>
              <br></br>
              <a href='https://budget-tracker-1402.herokuapp.com/' target='blank'>Deployed Website</a>
              <br></br>
              <br></br>
              <a href='https://github.com/ryanpaynt/budget-tracker' target='blank'>Git Repo</a>
            </figcaption>
          </div>
          <div className='col s12 m6 6 responsive-img img'>
            <img src={note_page}/>
            <figcaption>
            <p><u><b>Notes App</b></u></p>
              <br></br>
              <a href='https://secure-citadel-65053.herokuapp.com/' target='blank'>Deployed Website</a>
              <br></br>
              <br></br>
              <a href='https://github.com/ryanpaynt/note-taker' target='blank'>Git Repo</a>
            </figcaption>
          </div>
          <div className='col s12 m6 6 responsive-img img'>
            <img src={poke_page}/>
            <figcaption>
            <p><u><b>PokeTeam App</b></u></p>
              <br></br>
              <a href='https://budget-tracker-1402.herokuapp.com/' target='blank'>Deployed Website</a>
              <br></br>
              <br></br>
              <a href='https://github.com/huirayj/forum-friends/' target='blank'>Git Repo</a>
            </figcaption>
          </div>
          <div className='col s12 m6 6 responsive-img img'>
            <img src={ff_page}/>
            <figcaption>
            <p><u><b>Forum Friends</b></u></p>
              <br></br>
              <a href='https://forum-friends.herokuapp.com/' target='blank'>Deployed Website</a>
              <br></br>
              <br></br>
              <a href='https://github.com/ryanpaynt/budget-tracker' target='blank'>Git Repo</a>
            </figcaption>
          </div>
          <div className='col s12 m6 6 responsive-img img'>
            <img src={team_page}/>
            <figcaption>
            <p><u><b>Team Tracker</b></u></p>
              <br></br>
              <a href='https://github.com/ryanpaynt/team-generator' target='blank'>Git Repo</a>
            </figcaption>
          </div>
          <div className='col s12 m6 6 responsive-img img'>
            <img src={fitness_page}/>
            <figcaption>
            <p><u><b>Fitness Tracker</b></u></p>
              <br></br>
              <a href='https://fitness-tracker-1402.herokuapp.com/' target='blank'>Deployed Website</a>
              <br></br>
              <br></br>
              <a href='https://github.com/ryanpaynt/fitness-tracker' target='blank'>Git Repo</a>
            </figcaption>
          </div>
        </div>
      </div>
    );
}