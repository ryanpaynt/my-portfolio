import React from 'react';
import profilePic from '../../assets/img/profile.jpg'

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="title">Home Page</h1>
        {<img className="responsive-img" id="profile" src={profilePic} />}
      </div>
      <div className="row" id='about-head'>
        <div className='col s3'>
          <h4>About Me</h4>
        </div>
        <div className="col s9">
          <p className="text" > Hello, my name is Ryan Paynter. I am currently a student at UNCC and a participator in
            the UNCC
            Coding
            Boot Camp.
            I am proficient in Java, C++, and linux. I am due to graduate in December of 2022.
            With a Bachelors in Science with a concentration in Software Development.
            I am also minoring in German! I am currently 20 years old and living in Cornelius, North
            Carolina.
            I love sports, Lake Norman, my dog, and coding!
          </p>
        </div>
      </div>
    </div>
  );
}
