import React from 'react'
import './contact.css'
const ContactMe = () => {
  return (
   <div className="contact-container">
  <form className="contact-form">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="tel" placeholder="Phone Number" />

    <button type="submit">Submit</button>
  </form>
</div>
  )
}

export default ContactMe
