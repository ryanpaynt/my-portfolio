import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';
import Resume from '../components/pages/Resume';
// import Footer from '../../old/components/pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    var hash = window.location.hash.substr(1);
    console.log(hash);
    setCurrentPage(hash);
  }, [])

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
