import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission and email sending
    // You can use a library like Nodemailer or an API to send the email
    // Example: sendEmail(name, email, message);
    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-form-container">
        <h2 className="contact-heading">Send us a message</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="row mt-1">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row mt-1">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row mt-1">
              <label htmlFor="message" className="col-sm-2 col-form-label ">Message</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row mt-1">
              <div className="col-sm-2"></div> {/* Empty column for spacing */}
              <div className="col-sm-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="contact-info-container mt-5">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="row">
          <div className="col-lg-6">
            <h5>New Jersey, USA</h5>
            <h5>+1-848-248-0465</h5>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
