import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a 
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'btn disabled' : 'waves-effect waves-light btn'}>
            About Me
          </a>
        </li>

        <li>
          <a 
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'btn disabled' : 'waves-effect waves-light btn'}>
            My Work
          </a>
        </li>

        <li>
          <a 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'btn disabled' : 'waves-effect waves-light btn'}>
            Contact
          </a>
        </li>

        <li>
          <a 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'btn disabled' : 'waves-effect waves-light btn'}>
            Contact
          </a>
        </li>
    </ul>

   
  );
}

export default NavTabs;
