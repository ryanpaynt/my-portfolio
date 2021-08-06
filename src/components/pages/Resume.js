import React from "react";
import pdf from "../../assets/RyanPayntersResume.pdf"

export default function Resume() {
  return (
    <section className="section has-background-primary-dark">
      <div className="container" style={{ height: '150px' }}>
        <div className="container" style={{ textAlign: "left" }}>
          <h2 className='title is-1 line-1 anim-typewriter'
            style={{ color: 'white', fontFamily: 'Libre Baskerville', fontSize: '2.5vw', margin: '0', marginTop: '5%', marginBottom: '2%' }}>
            &lt;h2&gt; Resume &lt;/h2&gt;
          </h2>
          <p style={{ textAlign: 'right', marginBottom: '5px' }}>Download my <a href={pdf}>resume</a></p>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Back End</p>
                <p class="subtitle">With experience in...</p>
                <div class="content">
                </div>
              </article>
            </div>
            <div class="tile is-parent is-8">
              <article class="tile is-child box">
                <div class="content">
                  <ul>
                    <li>Hyper Text Markup Language</li>
                    <li>Cascading Sheets</li>
                    <li>CSS Frameworks</li>
                    <li>BootStrap</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Front End</p>
                <p class="subtitle">With experience in...</p>
                <div class="content">
                </div>
              </article>
            </div>
            <div class="tile is-parent is-8">
              <article class="tile is-child box">
                <div class="content">
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
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}