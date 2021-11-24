import React from 'react';
import Modal  from './modal';



const Resume = () => {


return(

    <section className="resume" id="resume">  
       <div class="container aos-init aos-animate" data-aos="fade-up">

            <div class="section-title">
                <h2>Resume</h2>
                <p>User Interface (UI) designers work closely with User Experience (UX) designers and create attractive user interfaces that are in line with the overall vision for the product. Use the following job description template when hiring your next UI Designer and customize it further based on your specific requirements</p>
            </div>
            <div>
                <Modal></Modal>
                </div>
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="resume-title">Sumary</h3>
                    <div class="resume-item pb-0">
                    <h4>VSK KALIDAS</h4>
                    <p><em>Innovative and deadline-driven UI Designer with 13+ years of experience designing and developing user-centered UI/website from initial concept to final, polished deliverable.</em></p>
                    <ul>
                        <li>Flat No: 402 SRI SAI Apartsments,</li>
                        <li>+91 -0- 9004145011</li>
                        <li>suryasree22@gmail.com</li>
                    </ul>
                    </div>

                    <h3 class="resume-title">Education</h3>
                    <div class="resume-item">
                    <h4>Bachelor Degree of Computers Science</h4>
                    <h5>1997 - 2000</h5>
                    <p><em>Osmania University, Hyderabad, Telangana</em></p>
                    <p>Completed My Bachelor Degree in Computers Science from Osmania University, College is Sai Sudhir Degree College.. ASRAO Nagar Hyderabad.</p>
                    </div>
                    <div class="resume-item">
                    <h4>Web Designing Course</h4>
                    <h5>2000 - 2001(6 months)</h5>
                    <p><em>Arena Multimedia, Hyderabad</em></p>
                    <p>I done my Web designing Course in Arena Multimedia - Software i learnt illustrator, Photoshop, Dreamweaver</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="resume-title">Professional Experience</h3>
                    <div class="resume-item">
                    <h4>Asst. Manager</h4>
                    <h5>2008 - Present</h5>
                    <p><em>Schoolnet India Limited, Hyderabad, Telangana </em></p>
                    <ul>
                        <li>Taking design briefs to understand requirements</li>
                        <li>Translating requirements into style guides, design systems, design patterns and attractive user interfaces.</li>
                        <li>Creating a visualisation of screens within a prototype framework</li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                    <div class="resume-item">
                    <h4>Graphic design specialist</h4>
                    <h5>2004 - 2008</h5>
                    <p><em>Client TCS (Tata Consultancy Service) as Business Associate. Parent Company Future Focus Pvt Ltd.</em></p>
                    <ul>
                        <li>Developed APP Icons for the Product Like BIO-Suite for numerous marketing programs (I designed logos, infographics, Icons) of the Product.</li>
                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                        <li>Created 2+ design presentations and proposals a month for clients and account managers</li>
                    </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
)
}

export default Resume;