import React from 'react';

import './styles.scss';

class Contact extends React.Component {
    render() {
        return(
            <div className="contact-page">
                <h4 style={{ marginBottom: '1.5rem' }}>Get in touch with me</h4>
                <h6 style={{ fontWeight: 'bold' }}>Email</h6>
                <ul>
                    <li>weili_liu@berkeley.edu</li>
                    <li>weililiu1996@gmail.com</li>
                </ul>
                <h6 style={{ fontWeight: 'bold' }}>Linkedin</h6>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/weili-liu/">linkedin.com/in/weili-liu/</a>
                    </li>
                </ul>
                <h6 style={{ fontWeight: 'bold' }}>Github</h6>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/weili-liu/">linkedin.com/in/weili-liu/</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Contact;