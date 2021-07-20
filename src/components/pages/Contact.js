import React from 'react';

export default function Contact() {
  return (
    <div>
      <div>
        <h1 className="title">Contact Page</h1>
      </div>
      <form className='email-form' action="https://postmail.invotes.com/send"
    method="post" id="email_form">

    <input type="text" name="subject" placeholder="Subject" />
    <textarea name="text" placeholder="Message"></textarea>
    <input type="hidden" name="access_token" value="p33z18m1pow0i2bxt99o3iwt" />
    <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
    <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />

   
    <input className='waves-effect btn' id="submit_form" type="submit" value="Send" />
    <p>Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>
</form>
    </div>
  );
}
