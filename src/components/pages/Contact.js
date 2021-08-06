import React from "react";
import '../../assets/css/contact.css';

export default function Contact() {
  return (
    <section className="section has-background-primary-dark" style={{}}>
      <div className="container" style={{ height: '150px' }}>
        <div className="container" style={{ textAlign: "left" }}>
          <h2 className='title is-1 line-1 anim-typewriter' style={{ color: 'white', fontFamily: 'Libre Baskerville', fontSize: '2.5vw', margin: '0', marginTop: '5%' }}>
            &lt;h2&gt; Contact &lt;/h2&gt;
          </h2>
          <div className='contact-space'>
            <form className='email-form' action="https://postmail.invotes.com/send"
              method="post" id="email_form">
              <div className="field fields" style={{ marginLeft: '25%', width: '50%', marginTop: '10%' }}>
                <p className="control has-icons-left">
                  <input className="input" type="subject" placeholder="Subject" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
                <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                <input type="hidden" name="access_token" value="p33z18m1pow0i2bxt99o3iwt" />
                <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
                <input className='input is-primary-dark' id="submit_form" type="submit" value="Send" style={{ textAlign: 'center', backgroundColor: 'rgb(64,146,127)', width: '65px', color: 'white' }} />
                <p>Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}