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
                                <Button variant="link" className="overlay-button">Github</Button>
                                <Button variant="link" className="overlay-button">Demo</Button>
                            </Card.ImgOverlay>
                        </div>
                        <Card.Body>
                            <Card.Title>EvidenceMiner</Card.Title>
                            <Card.Text>
                                Automatic textual evidence mining in COVID-19 and other life sciences literature.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Badge variant="primary" className="react-badge">React</Badge>
                            <Badge variant="primary" className="es-badge">Elasticsearch</Badge>
                            <Badge variant="primary" className="py-badge">Python</Badge>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" ></Card.Img>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some Card Text.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card>
                        <Card.Img variant="top" ></Card.Img>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some Card Text.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card>
                        <Card.Img variant="top" ></Card.Img>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some Card Text.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Project;