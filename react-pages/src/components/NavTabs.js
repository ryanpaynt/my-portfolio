import React from 'react';
import banner from '../assets/img/banner.jpg'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
  <div className='navigation'>
    <ul id="nav-mobile" className="right">
        <li>
          <a 
          href="#home"
          onClick={() => handlePageChange('home')}
          className={currentPage === 'home' ? 'btn disabled' : 'waves-effect btn'}>
            <i className='material-icons'>home</i><p>Home</p>
          </a>
        </li>

        <li>
          <a 
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}
          className={currentPage === 'portfolio' ? 'btn disabled' : 'waves-effect btn'}>
            <i className='material-icons'>dashboard</i><p>Work</p>
          </a>
        </li>

        <li>
          <a 
          href="#contact"
          onClick={() => handlePageChange('contact')}
          className={currentPage === 'contact' ? 'btn disabled' : 'waves-effect btn'}>
            <i className='material-icons'>drafts</i><p>Contact</p>
          </a>
        </li>

        <li>
          <a 
          href="#resume"
          onClick={() => handlePageChange('resume')}
          className={currentPage === 'resume' ? 'btn disabled' : 'waves-effect btn'}>
            <i className='material-icons'>recent_actors</i><p>Resume</p>
          </a>
        </li>
    </ul>
    <img className="responsive-img" id="banner" src={banner}/>
  </div>
  );
}

export default NavTabs;

