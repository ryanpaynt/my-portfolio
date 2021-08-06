import React from 'react';
// import banner from '../assets/img/banner.jpg'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href='#home' onClick={() => handlePageChange('home')}>
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Sections
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href='#portfolio' onClick={() => handlePageChange('portfolio')}>
                Portfolio
              </a>
              <a className="navbar-item" href='#resume' onClick={() => handlePageChange('resume')}>
                Resume
              </a>
              <a className="navbar-item" href='#about' onClick={() => handlePageChange('about')}>
                About
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href='#contact' onClick={() => handlePageChange('contact')}>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button" target='_blank' href="https://github.com/ryanpaynt">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>
                    GitHub
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" target='_blank' href="https://www.linkedin.com/in/ryan-paynter-2ba594191/">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span>Linkdin</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;

