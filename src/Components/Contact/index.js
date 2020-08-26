import React from 'react';

import './styles.scss';

class Contact extends React.Component {
    render() {
        return(
            <div className="contact-page">
                <h4 style={{ marginBottom: '1.5rem' }}>Get in touch with me</h4>
                <h6 style={{ fontWeight: 'bold' }}>Email</h6>
                <p>weili_liu@berkeley.edu</p>
                <h6 style={{ fontWeight: 'bold' }}>Linkedin</h6>
                <a href="https://www.linkedin.com/in/weili-liu/">linkedin.com/in/weili-liu/</a>
                <h6 style={{ fontWeight: 'bold' }}>Github</h6>
                <a href="https://github.com/WeiliLiu">github.com/WeiliLiu</a>
            </div>
        )
    }
}

export default Contact;