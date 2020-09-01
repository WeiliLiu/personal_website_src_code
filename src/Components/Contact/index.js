import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import './styles.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
            errors: []
        }

        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.subjectChange = this.subjectChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.validateSubmission = this.validateSubmission.bind(this);
    }

    firstNameChange = (event) => {
        this.setState({ firstName: event.target.value })
    }

    lastNameChange = (event) => {
        this.setState({ lastName: event.target.value })
    }

    emailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    phoneChange = (event) => {
        this.setState({ phone: event.target.value })
    }

    subjectChange = (event) => {
        this.setState({ subject: event.target.value })
    }

    messageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    // Emailjs method
    sendMessage = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId, variables
        ).then(response => {
            // successfully sent
            Swal.fire({
                title: 'Email Successfully sent.',
                icon: 'success'
            })
        })
        // Email failed to be sent
        .catch(err => {
            Swal.fire({
                title: 'Email failed to send.',
                icon: 'error'
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const templateId = 'personal_website';
        const { firstName, lastName, phone, email, subject, message } = this.state;

        const errors = this.validateSubmission(firstName, lastName, email, subject, message);

        if (errors.length > 0) {
            this.setState({ errors: errors });
            return;
        }

        this.sendMessage(templateId, {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            subject: subject,
            message: message
        })
    }

    validateSubmission = (firstName, lastName, email, subject, message) => {
        const errors = [];

        if(firstName.length === 0) {
            errors.push("firstName cannot be empty!")
        }

        if(lastName.length === 0) {
            errors.push("lastName cannot be empty!")
        }

        if(email.length === 0) {
            errors.push("email cannot be empty!")
        }

        if(subject.length === 0) {
            errors.push("subject cannot be empty!")
        }

        if(message.length === 0) {
            errors.push("message cannot be empty!")
        }

        return errors;
    }

    render() {
        const { firstName, lastName, phone, email, subject, message, errors } = this.state;

        return(
            <div className="contact-page">
                <h4 style={{ marginBottom: '1.5rem' }}>Get in touch with me</h4>
                <ul>
                    {errors.map(error => ( <li className="error-msg" key={error}>Error: {error}</li> ))}
                </ul>
                <Form className="form-container">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control placeholder="Firstname" className="square-form form-font form-padding no-box-shadow" onChange={this.firstNameChange} value={firstName}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control placeholder="Lastname" className="square-form form-font form-padding no-box-shadow" onChange={this.lastNameChange} value={lastName}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" className="square-form form-font form-padding no-box-shadow" onChange={this.emailChange} value={email}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone (Optional)</Form.Label>
                            <Form.Control placeholder="Phone number" className="square-form form-font form-padding no-box-shadow" onChange={this.phoneChange} value={phone}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="Email title" className="square-form form-font form-padding no-box-shadow" onChange={this.subjectChange} value={subject}/>
                    </Form.Group>

                    <Form.Group controlId="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter your message here" className="message-box square-form form-font no-box-shadow" onChange={this.messageChange} value={message}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="square-form submit-button" onClick={this.handleSubmit}>
                        Send
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Contact;