import React from 'react';
import Objective from './Objective';

const AboutMe = () => {
    return(
    
        <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>Self-motivated IT professional with deep knowledge and proficiency in  HTML 5, CSS, jquery, Bootstrap and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code, seeks the position of Front-end Web Developer with Schoolnet India Limited.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="./dist/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="font-italic">
            Hard-working individual with proficiency in HTML, JavaScript, and CSS, as well as strong ability to communicate and work in a team effectively seeks to apply for the position of Intern Front-end Developer.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>20 February 1979</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>???</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9004145011</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Hyderabad, Telangana</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>42</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.sc(Computers)</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email-id:</strong> <span>suryasree22@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            Skilled Web UI Developer adept at reducing the amount of work required of end users to navigate software. This means experience at designing interfaces that create the best liaisons between user and application through functions that minimize reaching a goal.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Objective></Objective>
          </div>
      </div>
      </div>
    </section>
    )
}

export default AboutMe;
