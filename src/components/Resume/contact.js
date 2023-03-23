import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-bootstrap';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8urx9w9', 'template_c3z3xbm', form.current, 'lTD7cLisL9dRDf_CH')
      .then((result) => {
          console.log(result.text);
          document.getElementById("myform").reset();
          alert("Message Sent ")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form id = "myform" ref={form} onSubmit={sendEmail}>
          <div class="inputField">
        <input type="name" name="user_name" id="user_name" placeholder="Your name" autocomplete="on" required/>
        <span class="valid_info_name"></span>
      </div>
      <br/>
     
      <div class="inputField">
        <input type="Email" name="user_email" id="user_email" placeholder="Your email" required="" />
        <span class="valid_info_email"></span>
      </div>
      <br/>


      <div class="inputField">
        <textarea name="message" id="message" placeholder="Your message"></textarea>
        <span class="valid_info_message"></span>
      </div>
      <br/>


      <div class="inputField_btn">
        <button type="submit"   class="main-gradient-button">Send a message</button>
      </div>
      <br/>

    </form>

  );
};