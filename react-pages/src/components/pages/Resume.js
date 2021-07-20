import React from 'react';
import pdf from '../../assets/img/RyanPayntersResume.pdf'

export default function Resume() {
  return (
    <div>
      <div>
        <h1 className="title">Resume Page</h1>
      </div>
      <div className='row skills'>
        <div className='col s6 left-skill'>
        <h4>Front End Skills</h4>
        <h4>Back End Skills</h4>
        <p>Download my <a href={pdf}>resume</a></p>
        </div>
        <div className='col s6 right-skill'>
        <ul>
          <li>Hyper Text Markup Language</li>
          <li>Cascading Sheets</li>
          <li>CSS Frameworks</li>
          <li>BootStrap</li>
          <li>JavaScript</li>
        </ul>
        <p>--------------------</p>
        <ul>
          <li>React</li>
          <li>Progressive Web Application</li>
          <li>sequelize | mySQL</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>GraphQL</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
