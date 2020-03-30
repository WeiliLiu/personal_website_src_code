import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { faFilePdf, faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.scss';

class Experience extends Component {

    render() {
        return(
            <div className="experience-container">
                <h4>Research Experiences</h4>

                <Row>
                    <Col xl={8} lg={12}>
                        <Row>
                            <Col xl={8} lg={12}>
                                <span className="experience-title">Privacy Probe (Data Driven Design Group, UIUC)</span>
                            </Col>
                            <Col xl={4} lg={12}>
                                <span className="metadata">August 2019 - Present</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={9} lg={12}>
                                <span>Undergraduate Research Assistant (Advised by Prof. <a href="http://ranjithakumar.net/">Ranjitha Kumar</a>)</span>
                            </Col>
                            <Col xl={3} lg={12}>
                                <span className="metadata">Champaign, IL</span>
                            </Col>
                        </Row>
                        <p></p>
                        <Image className="experience-pic" align="right"
                            src="https://firebasestorage.googleapis.com/v0/b/teamfinder-55b6b.appspot.com/o/c4b03b5a591dbe77c02224117d5d3b4.png?alt=media&token=0860ef30-542f-4b76-8989-402ce2155617"/>
                        <p>Intro: Personally identifiable information (PII) is a topic that has been studied
                            extensively in research. Existing systems are fully capable of automatically
                            detecting typical PII like social security numbers (SSN), email addresses, phone
                            numbers, etc. However, more recent regulations like GDPR, define
                            personal data as any information which is related to an identified or
                            identifiable natural person. This requires a more extensive
                            understanding of PII in order to develop mechanisms to handle cases where
                            traditional measures might fall short.</p>
                        <ul>
                            <li>Designed a user study with 20 participants to collect data on what people consider as private on  UI screen</li>
                            <li>Enhanced the existing interaction trace collection system by developing a redaction interface (<strong>ReactJS</strong>)</li>
                            <li>Expand the database (<strong>MongoDB</strong>) and API (<strong>MongoDB</strong>) to include redaction support</li>
                            <li>Implemented a user dashboard (<strong>MongoDB</strong>) with a queue system to facilitate the user study</li>
                        </ul>
                    </Col>
                </Row>

                <hr/>

                <Row>
                    <Col xl={8} lg={12}>
                        <Row>
                            <Col xl={9} lg={12}>
                                <span className="experience-title">EvidenceMiner (Biotext Data Mining Group, UIUC)</span>
                            </Col>
                            <Col xl={3} lg={12}>
                                <span className="metadata">May 2019 - Present</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={9} lg={12}>
                                <span>Undergraduate Research Intern (Advised by Prof. <a href="http://hanj.cs.illinois.edu/">Jiawei Han</a>)</span>
                            </Col>
                            <Col xl={3} lg={12}>
                                <span className="metadata">Champaign, IL</span>
                            </Col>
                        </Row>
                        <span className="research-icons" as='a' href="#"><FontAwesomeIcon icon={faFilePdf}/></span>
                                <span className="research-icons"><FontAwesomeIcon icon={faFileCode}/></span>
                                <span className="research-icons"><FontAwesomeIcon icon={faDesktop}/></span>
                        <p></p>
                        <Image className="experience-pic" align="right"
                            src="https://firebasestorage.googleapis.com/v0/b/teamfinder-55b6b.appspot.com/o/181119d453331748108c078bce480b2.png?alt=media&token=0d7dd792-c193-452e-b4c0-7ec4df8565b1" />
                        <p><strong>Intro: </strong>Search engines on scientific literature have been widely used by life scientists for new discoveries based on 
                            past knowledge. Each day, millions of users query PubMed and PubMed Central (PMC) for their information needs
                            in biomedicine. However, traditional search engines for life sciences (e.g. PubMed) are designed for document
                            retrieval and do not allow direct retrieval of specific statements. With the results from those search search
                            engines, scientists still need to read a large number of retrieved documents to find specific statements as
                            textual evidence is key to tasks such as developing new hypotheses, designing informative experiments, or 
                            comparing and validating newfindings against previous knowledge.
                        </p>
                        <ul>
                            <li>Created a web application (<strong>ReactJS</strong>) with a search interface, an annotation interface and a analytics interface</li>
                            <li>Incorporated <strong>Elasticsearch</strong> into the backend API to allow for more sophisticated search functionalities</li>
                            <li>Studied various existing dictionaries on the biomedical domain and built a pipeline to preprocess them for later neural network
                                training
                            </li>
                        </ul>
                    </Col>
                </Row>
                
                <h4>Teaching Experiences</h4>

                <Row>
                    <Col xl={8} lg={12}>
                        <Row>
                            <Col xl={9} lg={12}>
                                <span className="experience-title">ECE391 - Computer Systems Engineering, UIUC</span>
                            </Col>
                            <Col xl={3} lg={12}>
                                <span className="metadata">Aug 2018 - Dec 2018</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={9} lg={12}>
                                <span>Undergraduate Course Assistant (Led by Prof. <a href="https://ece.illinois.edu/about/directory/faculty/kalbarcz">Zbigniew T. Kalbarczyk</a>)</span>
                            </Col>
                            <Col xl={3} lg={12}>
                                <span className="metadata">Champaign, IL</span>
                            </Col>
                        </Row>
                        <p></p>
                        <ul>
                            <li>Managed office hours to answer student's course-related conceptual questions and help debug their machine problems</li>
                            <li>Worked with graduate teaching assistants in staff meeting to grade student's assignments and discuss ambiguity encountered</li>
                            <li>Evaluated student's course projects and machine problems by testing the functionalities, looking through their coding styles
                                and interviewed them several conceptual questions
                            </li>
                        </ul>
                    </Col>
                </Row>

                <h4>Professional Experiences</h4>

                <p><a href="/contacts">Contact</a> me with any job opportunities!</p>
            </div>
        )
    }
}

export default Experience;