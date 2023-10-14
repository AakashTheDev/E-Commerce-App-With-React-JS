import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
  <center>
   <form class="container">
    <h3>Contact Form</h3>

    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Enter Your Name.."/>

    <label for="lname">E-Mail</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter Your E-Mail.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="select">Select</option>
      <option value="india">India</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write Something.." ></textarea>

    <input type="submit" value="Submit"/>
   </form>
  </center>
  )
}

export default ContactUs;