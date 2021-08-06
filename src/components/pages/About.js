import React from "react";
import profilePic from '../../assets/imgs/profile.jpg'
import '../../assets/css/about.css'

export default function Home() {
  return (
    <section className="section has-background-primary-dark" style={{}}>
      <div className="container" style={{ height: '150px' }}>
        <div className="container" style={{ textAlign: "left" }}>
          <h2 className='title is-1 line-1 anim-typewriter' style={{ color: 'white', fontFamily: 'Libre Baskerville', fontSize: '2.5vw', margin: '0', marginTop: '5%' }}>
            &lt;h2&gt;About Me &lt;/h2&gt;
          </h2>
          <img className='profile' src={profilePic} style={{ borderRadius: '100%' }} />
          <p className='description' style={{ margin: '10%', marginTop: '5%' }}> Hello, my name is Ryan Paynter. I am currently a student at UNCC and a participator in
            the UNCC Coding Boot Camp.
            I am proficient in Java, C++, and linux. I am due to graduate in December of 2022.
            With a Bachelors in Science with a concentration in Software Development.
            I am also minoring in German! I am currently 20 years old and living in Cornelius, North Carolina.
            I love sports, Lake Norman, my dog, and coding!
          </p>
        </div>
      </div>
    </section>
  );
}