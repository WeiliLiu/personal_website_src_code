import React from 'react';
import { Card, ListGroup, ListGroupItem, Badge, Button } from 'react-bootstrap';

import './styles.scss';

class Project extends React.Component {

    render() {
        return(
            <div>
                <div className="card-deck">
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/Images/evidenceminer.png')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button" href="https://github.com/WeiliLiu/EvidenceMiner">Github</Button>
                                <Button variant="link" className="overlay-button" href="https://evidenceminer.com">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>EvidenceMiner</Card.Title>
                            <Card.Text>
                                Automatic textual evidence mining in COVID-19 and other life sciences literature.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">React</Badge>
                            <Badge variant="primary">Elasticsearch</Badge>
                            <Badge variant="primary">Python</Badge>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/Images/pubgstat.png')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button" href="https://github.com/WeiliLiu/pubgstat">Github</Button>
                                <Button variant="link" className="overlay-button" href="https://pubgstat-db9ba.firebaseapp.com/">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>Pubgstat</Card.Title>
                            <Card.Text>
                                A website for PUBG players.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">React</Badge>
                            <Badge variant="primary">Firebase</Badge>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/Images/pubgstat.png')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button">Github</Button>
                                <Button variant="link" className="overlay-button">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>GoDutch</Card.Title>
                            <Card.Text>
                                An Android application for grocery bill splitting.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">React Native</Badge>
                            <Badge variant="primary">mySQL</Badge>
                            <Badge variant="primary">Flask</Badge>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/Images/linux.jpg')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button">Github</Button>
                                <Button variant="link" className="overlay-button">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>Linux Kernel</Card.Title>
                            <Card.Text>
                                A mini linux kernel with basic functionalities implemented.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">C</Badge>
                            <Badge variant="primary">x86</Badge>
                            <Badge variant="primary">Unix</Badge>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Project;