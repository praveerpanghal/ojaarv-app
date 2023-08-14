import React from 'react';
import './OnlineTraining.css'; // Make sure to create the corresponding CSS file

const OnlineTraining = () => {
  return (
    <div className="container online-training-container">
      <h3 className="text-center"><i>Online Training</i></h3>
      <p>We are a leading provider of IT services and online training. With years of experience and a dedicated team of professionals, we deliver exceptional solutions to our clients worldwide.</p>
      <p>Our comprehensive range of training includes:</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">HTML</h3>
              <p className="card-text">Learn the fundamentals of HTML to create the structure and content of web pages.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">CSS</h3>
              <p className="card-text">Master the art of CSS to style and enhance the appearance of your web pages.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">JavaScript</h3>
              <p className="card-text">Unlock the power of JavaScript to add interactivity and dynamic behavior to your web applications.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional rows of training cards... */}

      <p>At <i>OjaArv</i>, we are committed to delivering high-quality training programs that help individuals acquire the necessary skills to succeed in the IT industry. Our experienced instructors and practical hands-on approach ensure that you gain the knowledge and confidence to excel in your chosen field.</p>
      <p>Ready to expand your knowledge and advance your career? Browse our training courses and start your learning journey with <i>OjaArv</i> today.</p>
     
    </div>
  );
};

export default OnlineTraining;
