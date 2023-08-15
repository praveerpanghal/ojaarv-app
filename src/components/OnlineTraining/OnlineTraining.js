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

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">ES6</h3>
              <p className="card-text">Explore the features and capabilities of ECMAScript 6 for modern JavaScript development.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">React.js</h3>
              <p className="card-text">Learn how to build dynamic and responsive user interfaces using React.js library.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Redux</h3>
              <p className="card-text">Manage the state of your React applications efficiently using Redux.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">GIT</h3>
              <p className="card-text">Learn version control and collaborative software development using Git.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Node.js</h3>
              <p className="card-text">Explore server-side JavaScript development using Node.js.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">C#</h3>
              <p className="card-text">Master C# programming language for building Windows applications and more.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">My SQL</h3>
              <p className="card-text">Learn how to work with MySQL databases for data storage and retrieval.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">SQL Server</h3>
              <p className="card-text">Discover Microsoft SQL Server for managing and querying relational databases.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">MongoDB</h3>
              <p className="card-text">Explore MongoDB, a NoSQL database for flexible and scalable data storage.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Angular</h3>
              <p className="card-text">Learn how to build dynamic web applications with the Angular framework.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">AWS</h3>
              <p className="card-text">Get hands-on experience with Amazon Web Services cloud platform.</p>
            </div>
          </div>
        </div>
        {/* Add more courses here... */}
      </div>

      <p>At <i>OjaArv</i>, we are committed to delivering high-quality training programs that help individuals acquire the necessary skills to succeed in the IT industry. Our experienced instructors and practical hands-on approach ensure that you gain the knowledge and confidence to excel in your chosen field.</p>
      <p>Ready to expand your knowledge and advance your career? Browse our training courses and start your learning journey with <i>OjaArv</i> today.</p>
    </div>
  );
};

export default OnlineTraining;
