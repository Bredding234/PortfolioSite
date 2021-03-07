import React from 'react';


export default class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="resume">
                <div className="container">

                    <div className="section-title">
                        <h2>Resume</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Brian Redding</h4>
                                <p><em>
                                    I specialize in Desktop Support, in which I am responsible for assisting customers, students, and guests with a variety of Desktop issues such as logging into Blackboard, network connection, email, printers, documents, computers, audio issues, etc. Also, I worked as a Computer Support Specialist where I was responsible for updating the University FCLD website. I have created University Blackboard website so it looks more intituive and follows the University of Hartford branding.

                                </em></p>
                                <ul>
                                    <li>59 Mohawk Street, Apt B</li>
                                    <li>(203) 490 - 8314</li>
                                    <li>bredding@hartford.edu</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelors Degree in Computer Science</h4>
                                <h5>2016 - 2020</h5>
                                <p><em>University of Hartford</em></p>
                                <p>
                                    I have work experience in IT Helpdesk Support where I was assisting students, faculty, and guests with technical issues. Also, I was hired as a Computer Support Specialist where I have recreated the University login site and I update and installed the monitors.
                                </p>
                            </div>
                            <div className="resume-item">
                                <h4>Master in Software Engineering</h4>
                                <h5>2020 - 2021</h5>
                                <p><em>Walden University</em></p>
                                <p>
                                    I am pursing my Masters degree in Software Engineering
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>IT Helpdesk Support</h4>
                                <h5>2018 - 2020</h5>
                                {/* <p><em>Experion, New York, NY </em></p> */}
                                <ul>
                                    <li>
                                        Face-to-face helpdesk support such as logging into Blackboard, network connection, email, printers, documents, computers, audio issues, etc.
                                    </li>
                                    <li>
                                        I have set up a large group of pc and I detected software, network, and hardware issues using several softwares, assisted students, faculty, staff, and guests with technical issues.
                                    </li>
                                    <li>
                                        Also, I provided technical support for faculty, students, and guests.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Computer Support Specialist</h4>
                                <h5>2019 - 2020</h5>
                                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                                <ul>
                                    <li>
                                        I updated the University Faculty Center for Learning Development website using the content management system blackboard website and ensuring that the front-end aspect of the website looks updated or clear for others to access the site.
                                    </li>
                                    <li>
                                        Use HTML, CSS, and JavaScript to recreate the new University of Hartford Blackboard cascade page.
                                    </li>
                                    <li>
                                        Also, I made sure the Blackboard Cascade looks intuitive and follows University of Hartford branding.
                                    </li>

                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Desktop Support Technician</h4>
                                <h5>2020 - 2021</h5>
                                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                                <ul>
                                    <li>
                                        I was assigned to set up monitors and computers.
                                    </li>
                                    <li>
                                        Also, I was responsible for E-waste disposal.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}