import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

import './styles.scss';

class Project extends React.Component {

    render() {
        return(
            <div>
                <div className="card-deck">
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/images/evidenceminer.jpg')}></Card.Img>
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
                            <Card.Img variant="top" src={require('../../assets/images/zipt-2.jpg')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button" href="https://zipt.design">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>ZIPT</Card.Title>
                            <Card.Text>
                                A zero-integration performance testing platform that allows designers to collect detailed design and 
                                interaction data over any Android application.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">React</Badge>
                            <Badge variant="primary">ExpressJS</Badge>
                            <Badge variant="primary">MongoDB</Badge>
                            <Badge variant="primary">Vue</Badge>
                            <Badge variant="primary">Angular</Badge>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/images/pubgstat.jpg')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button" href="https://github.com/WeiliLiu/pubgstat">Github</Button>
                                <Button variant="link" className="overlay-button" href="https://pubgstat-db9ba.firebaseapp.com/">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>Pubgstat</Card.Title>
                            <Card.Text>
                                A website for PUBG players to look for information and chat.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary">React</Badge>
                            <Badge variant="primary">Firebase</Badge>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="card-img-wrapper">
                            <Card.Img variant="top" src={require('../../assets/images/godutch.jpg')}></Card.Img>
                            <Card.ImgOverlay>
                                <Button variant="link" className="overlay-button" href="https://github.com/WeiliLiu/GoDutch">Github</Button>
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
                </div>
            </div>
        )
    }
}

export default Project;