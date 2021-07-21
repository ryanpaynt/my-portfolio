import React from 'react';

const getDate = () => {
    const d = new Date();
    return d.getFullYear();
}

export default function Footer() {
    return (
        <footer>
        <p>&#169;{getDate()} | Made with Materialize | <a href="https://github.com/ryanpaynt" target='_blank'>GitHub</a> | <a href="https://www.linkedin.com/in/ryan-paynter-2ba594191/" target='_blank'>Linkedin</a></p>
      </footer>
    );
  }
  