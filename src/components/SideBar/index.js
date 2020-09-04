import React, { Component } from 'react';
import { Nav, ListGroup } from 'react-bootstrap';
import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import './styles.scss';

import About from '../About';
import Home from '../Home';
import Experience from '../Experience';
import Project from '../Project';
import Gallery from '../Gallery';
import Contact from '../Contact';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: false,
            isLargeScreen: true,
            showSidebar: false,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({isMobile: window.innerWidth <= 992, isLargeScreen: window.innerWidth >= 1372});
    }

    render() {
        const { isLargeScreen, isMobile, showSidebar } = this.state;

        return(
            <BrowserRouter>
                <div className="wrapper">
                    <Nav id="sidebar" className="flex-column" style={{ backgroundColor: isMobile && showSidebar? 'black' : 'white' }}>
                        <div className="inside-wrapper">
                            <Nav.Link as={isMobile? 'span' : 'h3'}
                                      className="sidebar-header" 
                                      style={{ 
                                          textAlign: isMobile && showSidebar? 'center' : 'left',
                                          marginBottom: isMobile? '0' : '1.5rem' 
                                          }}>
                                              <span style={{ fontSize: isLargeScreen? '2.5rem' : (isMobile? (showSidebar? '1.5rem' : '1rem') : '1.5rem'), color: isMobile && showSidebar? 'white' : 'black' }}>
                                                  <a href="/">Weili Liu</a>
                                              </span>
                                              <span hidden={!isMobile || showSidebar}
                                                    onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                                                    style={{ float: 'right', 
                                                             fontSize: isMobile && showSidebar? '1.5rem' : '1rem', 
                                                             fontFamily: "Montserrat", 
                                                             color: isMobile && showSidebar? 'white' : 'black' }}>
                                                  Menu
                                              </span>
                            </Nav.Link>
                            <div hidden={!showSidebar && isMobile}>
                                <hr hidden={!isMobile}/>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/experiences">Experiences</Nav.Link>
                                <hr />
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/gallery">Gallery</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Item className="bottom-info">
                                    <ListGroup className="icon-list" horizontal>
                                        <ListGroup.Item className="social-icons"><a href="https://www.linkedin.com/in/weili-liu/"><FontAwesomeIcon icon={faLinkedinIn} /></a></ListGroup.Item>
                                        <ListGroup.Item className="social-icons"><a href="https://github.com/WeiliLiu"><FontAwesomeIcon icon={faGithub} /></a></ListGroup.Item>
                                        <ListGroup.Item className="social-icons"><a href="https://www.instagram.com/weili_liu_liye/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a></ListGroup.Item>
                                        <ListGroup.Item className="social-icons"><a href="mailto:weili_liu@berkeley.edu"><FontAwesomeIcon icon={faAt} /></a></ListGroup.Item>
                                    </ListGroup>
                                </Nav.Item>
                            </div>
                        </div>
                    </Nav>

                    <div id="content">
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/about" component={About} />
                            <Route path="/experiences" component={Experience} />
                            <Route path="/projects" component={Project} />
                            <Route path="/gallery" component={Gallery} />
                            <Route path="/contacts" component={Contact} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default SideBar;