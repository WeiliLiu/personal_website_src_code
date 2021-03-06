import React, { Component } from 'react';
import { Image, Row, Col, ListGroup, Button } from 'react-bootstrap';

import './styles.scss';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOtherSkills: true
        }
    }
    
    render() {
        const { showOtherSkills } = this.state;

        return(
            <div>
                <h1>About Me ...</h1>
                <Row className="about-container">
                    <Col xl={5} lg={12} >
                        <p>Hi!</p>
                        <p>
                            My name is Weili. I'm currently pursuing a Masters of Engineering degree in Electrical Engineering and
                            Computer Sciences (Expected graduation in May 2021) at the University of California, Berkeley. I received 
                            my B.S. degree in Computer Science with highest honor from the University of Illinois at Urbana-Champaign
                            in May 2020.
                        </p>
                        <p>
                            After becoming a full-time programming students since 2016, I have discovered my interest in full-stack web
                            development, with multiple <a href="/projects">projects</a> on various types of web applications. In 2019, I joined
                            Professor <a href="http://ranjithakumar.net/">Ranjitha Kumar</a>'s Data Driven Design Group to work as a research
                            assistant. During this time, I developed knowledge in making design decisions using different data mining 
                            techniques and enhanced my working knowledge of many state-of-the-art web and mobile development technologies.
                        </p>
                        <p>
                            I am actively seeking internship and full-time positions within the United States as software development engineer.
                            Feel free to <a href="/contacts">contact</a> me regarding any job opportunities.
                        </p>
                        <p>
                            Here is a list of my professional skills:
                        </p>
                        <ListGroup className="skills-list">
                            <ListGroup.Item className="skills-listitem skills-listheader">Programming Languages:</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">JavaScript</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Python</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">C++</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">C</ListGroup.Item>
                        </ListGroup>
                        <p></p>
                        <ListGroup className="skills-list">
                            <ListGroup.Item className="skills-listitem skills-listheader">Frontend frameworks:</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">React</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Nextjs</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Angular</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Vue</ListGroup.Item>
                        </ListGroup>
                        <p></p>
                        <ListGroup className="skills-list">
                            <ListGroup.Item className="skills-listitem skills-listheader">UI Libraries:</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">SemanticUI</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Bootstrap</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">MaterialUI</ListGroup.Item>
                        </ListGroup>
                        <p></p>
                        <ListGroup className="skills-list">
                            <ListGroup.Item className="skills-listitem skills-listheader">Backend frameworks:</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Node.js</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Expressjs</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">Python Flask</ListGroup.Item>
                        </ListGroup>
                        <p></p>
                        <ListGroup className="skills-list">
                            <ListGroup.Item className="skills-listitem skills-listheader">Database:</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">MySQL</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem">MongoDB</ListGroup.Item>
                        </ListGroup>
                        <p></p>
                        <ListGroup className="skills-list">
                            <ListGroup.Item className="skills-listitem skills-listheader">
                                <Button variant='link' className="see-others-button" onClick={() => this.setState({showOtherSkills: !showOtherSkills})}>See My Other Skills</Button>
                            </ListGroup.Item>
                            <ListGroup.Item className="skills-listitem" hidden={!showOtherSkills}>...</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem" hidden={showOtherSkills}>Tenosorflow</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem" hidden={showOtherSkills}>Pytorch</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem" hidden={showOtherSkills}>Unity Engine</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem" hidden={showOtherSkills}>Unreal Engine</ListGroup.Item>
                            <ListGroup.Item className="skills-listitem" hidden={showOtherSkills}>WebGL</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xl={7} lg={12}>
                        <Image className="profile-pic"
                            src={require('../../assets/images/me.jpg')}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;