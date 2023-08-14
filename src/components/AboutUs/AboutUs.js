import React from 'react';
import './AboutUs.css'; // Make sure to create the corresponding CSS file

const AboutUs = () => {
  return (
    <div className="container about-container">
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title text-center"><i>About Us</i></h3>
          <p className="card-text">We are a leading IT services company with a strong presence in the industry since 2015. With our years of experience, we have been providing exceptional IT solutions to clients worldwide.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Our Mission</h5>
          <p className="card-text">At <i>OjaArv</i>, our mission is to deliver top-quality IT services and training programs that empower individuals and organizations to thrive in the digital world. We strive to provide innovative solutions and exceed customer expectations in every project we undertake.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Online Training</h5>
          <p className="card-text">We offer comprehensive online training programs in various IT domains, including software development, web development, database management, and more. Our courses are designed to equip learners with the skills and knowledge needed to excel in the ever-evolving IT industry.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">IT Services</h5>
          <p className="card-text">With our team of skilled professionals, we provide a wide range of IT services to meet the diverse needs of our clients. Our services include software development, system integration, network management, IT consulting, and support. We leverage the latest technologies and industry best practices to deliver efficient and reliable solutions.</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Why Choose Us?</h5>
          <ul className="card-text">
            <li>Expertise: Our team consists of highly skilled professionals with extensive experience in their respective domains. We stay updated with the latest industry trends to deliver cutting-edge solutions.</li>
            <li>Customer-centric Approach: We prioritize customer satisfaction and work closely with our clients to understand their unique requirements. We tailor our solutions to meet their specific goals and objectives.</li>
            <li>Quality Commitment: We are committed to delivering excellence in every project. Our stringent quality assurance processes ensure that our deliverables meet the highest standards.</li>
            <li>Timely Delivery: We value time and understand the importance of timely project delivery. We follow a well-defined project management approach to ensure on-time completion.</li>
          </ul>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Get in Touch</h5>
          <p className="card-text">Ready to take your IT projects and skills to the next level? Contact us today to discuss your requirements or to enroll in our online training programs. We are here to assist you every step of the way.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
